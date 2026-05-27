"use client";

import { CloseIcon } from "@sanity/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Stack,
  Text,
  TextInput,
  useClickOutsideEvent,
} from "@sanity/ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { set, useClient, type ArrayOfPrimitivesInputProps } from "sanity";
import { apiVersion } from "@/sanity/env";
import {
  mergeStringListOptions,
  type StringListOption,
} from "@/sanity/lib/merge-string-list-options";

export type CreatableStringListConfig = {
  /** GROQ trả về string[] các giá trị đang dùng trong dataset. */
  inUseGroq: string;
  /** Gợi ý cố định (title/value). */
  defaultOptions: ReadonlyArray<StringListOption>;
  maxItems: number;
  maxItemLength?: number;
  suggestionLimit?: number;
  loadingLabel: string;
  placeholder: string;
  placeholderAtMax: string;
  /** Nhãn đếm: "tag", "phòng", … */
  itemNoun: string;
  helpText: string;
};

const DEFAULT_MAX_ITEM_LENGTH = 64;
const DEFAULT_SUGGESTION_LIMIT = 8;

function normalizeValues(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((t): t is string => typeof t === "string" && t.length > 0);
}

function normalizeValue(raw: string): string {
  return raw.trim();
}

function matchOption(option: StringListOption, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    option.title.toLowerCase().includes(q) ||
    option.value.toLowerCase().includes(q)
  );
}

type CreatableStringListInputProps = ArrayOfPrimitivesInputProps & {
  config: CreatableStringListConfig;
};

export function CreatableStringListInput({
  config,
  ...props
}: CreatableStringListInputProps) {
  const {
    inUseGroq,
    defaultOptions,
    maxItems,
    maxItemLength = DEFAULT_MAX_ITEM_LENGTH,
    suggestionLimit = DEFAULT_SUGGESTION_LIMIT,
    loadingLabel,
    placeholder,
    placeholderAtMax,
    itemNoun,
    helpText,
  } = config;

  const client = useClient({ apiVersion });
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [inUse, setInUse] = useState<string[] | null>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    client
      .fetch<string[]>(inUseGroq)
      .then((values) => {
        if (!cancelled) setInUse(Array.isArray(values) ? values : []);
      })
      .catch(() => {
        if (!cancelled) setInUse([]);
      });
    return () => {
      cancelled = true;
    };
  }, [client, inUseGroq]);

  const list = useMemo(
    () => mergeStringListOptions(defaultOptions, inUse),
    [defaultOptions, inUse],
  );
  const selected = useMemo(() => normalizeValues(props.value), [props.value]);
  const atMax = selected.length >= maxItems;
  const readOnly = Boolean(props.readOnly);

  const available = useMemo(
    () => list.filter((o) => !selected.includes(o.value)),
    [list, selected],
  );

  const trimmedQuery = query.trim();

  const suggestions = useMemo(() => {
    if (!trimmedQuery) return available.slice(0, suggestionLimit);
    return available
      .filter((o) => matchOption(o, trimmedQuery))
      .slice(0, suggestionLimit);
  }, [available, suggestionLimit, trimmedQuery]);

  const canCreate =
    Boolean(trimmedQuery) &&
    trimmedQuery.length <= maxItemLength &&
    !selected.includes(trimmedQuery) &&
    !available.some((o) => o.value === trimmedQuery);

  const menuItems = useMemo(() => {
    const items: Array<
      | { kind: "create"; value: string; label: string }
      | { kind: "option"; option: StringListOption }
    > = [];
    if (canCreate) {
      items.push({
        kind: "create",
        value: trimmedQuery,
        label: trimmedQuery,
      });
    }
    for (const o of suggestions) {
      items.push({ kind: "option", option: o });
    }
    return items;
  }, [canCreate, suggestions, trimmedQuery]);

  useClickOutsideEvent(
    () => setOpen(false),
    () => [rootRef.current],
  );

  const commit = useCallback(
    (next: string[]) => {
      props.onChange(set(next.slice(0, maxItems)));
    },
    [maxItems, props],
  );

  const addItem = useCallback(
    (raw: string) => {
      const value = normalizeValue(raw);
      if (!value) return false;
      if (value.length > maxItemLength) {
        setError(`${itemNoun} tối đa ${maxItemLength} ký tự`);
        return false;
      }
      if (selected.includes(value)) {
        setError(`${itemNoun} này đã được chọn`);
        return false;
      }
      if (atMax) {
        setError(`Tối đa ${maxItems} ${itemNoun}`);
        return false;
      }
      setError(null);
      commit([...selected, value]);
      setQuery("");
      setOpen(false);
      setActiveIndex(0);
      return true;
    },
    [atMax, commit, itemNoun, maxItemLength, maxItems, selected],
  );

  const pickMenuItem = useCallback(
    (index: number) => {
      const item = menuItems[index];
      if (!item) return;
      if (item.kind === "create") addItem(item.value);
      else addItem(item.option.value);
    },
    [addItem, menuItems],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (readOnly || atMax) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, Math.max(0, menuItems.length - 1)));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (menuItems.length > 0) pickMenuItem(activeIndex);
      else if (trimmedQuery) addItem(trimmedQuery);
      return;
    }
  };

  const removeItem = (value: string) => {
    if (readOnly) return;
    commit(selected.filter((t) => t !== value));
  };

  if (inUse === null) {
    return (
      <Text size={1} muted>
        {loadingLabel}
      </Text>
    );
  }

  return (
    <Stack space={3} ref={rootRef}>
      {selected.length > 0 && (
        <Flex wrap="wrap" gap={1}>
          {selected.map((value) => {
            const option =
              list.find((o) => o.value === value) ?? { title: value, value };
            return (
              <Card
                key={value}
                padding={1}
                paddingLeft={2}
                paddingRight={1}
                radius={2}
                tone="transparent"
                border
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Text size={1}>{option.title}</Text>
                {!readOnly && (
                  <Button
                    icon={CloseIcon}
                    mode="bleed"
                    padding={1}
                    fontSize={1}
                    aria-label={`Xóa ${option.title}`}
                    onClick={() => removeItem(value)}
                  />
                )}
              </Card>
            );
          })}
        </Flex>
      )}

      <Box style={{ position: "relative" }}>
        <TextInput
          fontSize={2}
          padding={3}
          value={query}
          disabled={readOnly || atMax}
          placeholder={atMax ? placeholderAtMax : placeholder}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          style={{ textTransform: "none" }}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
            setError(null);
            setOpen(true);
            setActiveIndex(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
        />

        {open && !atMax && !readOnly && menuItems.length > 0 && (
          <Card
            padding={1}
            radius={2}
            shadow={2}
            style={{
              position: "absolute",
              zIndex: 10,
              left: 0,
              right: 0,
              marginTop: 4,
              maxHeight: 240,
              overflowY: "auto",
            }}
          >
            <Stack space={1}>
              {menuItems.map((item, index) => {
                const isActive = index === activeIndex;
                if (item.kind === "create") {
                  return (
                    <SuggestionRow
                      key={`create-${item.value}`}
                      active={isActive}
                      label={`Tạo mới: ${item.label}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onPick={() => addItem(item.value)}
                    />
                  );
                }
                return (
                  <SuggestionRow
                    key={item.option.value}
                    active={isActive}
                    label={item.option.title}
                    hint={
                      item.option.title !== item.option.value
                        ? item.option.value
                        : undefined
                    }
                    onMouseEnter={() => setActiveIndex(index)}
                    onPick={() => addItem(item.option.value)}
                  />
                );
              })}
            </Stack>
          </Card>
        )}
      </Box>

      {error ? (
        <Text size={1} style={{ color: "var(--card-badge-critical-fg-color)" }}>
          {error}
        </Text>
      ) : (
        <Text size={1} muted>
          {helpText} Đã chọn {selected.length}/{maxItems}.
        </Text>
      )}
    </Stack>
  );
}

function SuggestionRow({
  label,
  hint,
  active,
  onPick,
  onMouseEnter,
}: {
  label: string;
  hint?: string;
  active: boolean;
  onPick: () => void;
  onMouseEnter: () => void;
}) {
  return (
    <Card
      as="button"
      type="button"
      padding={2}
      radius={2}
      tone={active ? "primary" : "default"}
      onMouseEnter={onMouseEnter}
      onClick={onPick}
      style={{
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        border: "none",
      }}
    >
      <Text size={1} weight="medium">
        {label}
      </Text>
      {hint ? (
        <Text size={0} muted>
          {hint}
        </Text>
      ) : null}
    </Card>
  );
}

/** Factory: một config → một Sanity array input component. */
export function createCreatableStringListInput(
  config: CreatableStringListConfig,
) {
  function Input(props: ArrayOfPrimitivesInputProps) {
    return <CreatableStringListInput {...props} config={config} />;
  }
  Input.displayName = `CreatableStringListInput(${config.itemNoun})`;
  return Input;
}

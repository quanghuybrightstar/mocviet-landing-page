export type StringListOption = { title: string; value: string };

/**
 * Gộp gợi ý mặc định + giá trị đang dùng trong dataset (giữ nguyên chuỗi).
 */
export function mergeStringListOptions(
  defaults: ReadonlyArray<StringListOption>,
  inUse: string[] | null | undefined,
): StringListOption[] {
  const seen = new Set<string>();
  const out: StringListOption[] = [];

  for (const o of defaults) {
    if (!seen.has(o.value)) {
      seen.add(o.value);
      out.push({ title: o.title, value: o.value });
    }
  }

  const extras = Array.isArray(inUse) ? [...inUse] : [];
  extras
    .filter((v): v is string => typeof v === "string" && v.length > 0)
    .sort((a, b) => a.localeCompare(b, "vi"))
    .forEach((value) => {
      if (!seen.has(value)) {
        seen.add(value);
        const known = defaults.find((o) => o.value === value);
        out.push({ title: known?.title ?? value, value });
      }
    });

  return out;
}

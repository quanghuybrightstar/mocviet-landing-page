import { PROJECT_TAG_OPTIONS } from "@/libs/project-tags";
import {
  mergeStringListOptions,
  type StringListOption,
} from "@/sanity/lib/merge-string-list-options";

export type ProjectTagListOption = StringListOption;

export { PROJECT_TAGS_IN_USE_GROQ } from "@/sanity/lib/creatable-string-list-queries";

export function projectTagListOption(value: string): ProjectTagListOption {
  const known = PROJECT_TAG_OPTIONS.find((o) => o.value === value);
  return { title: known?.title ?? value, value };
}

export function mergeProjectTagOptions(
  inUse: string[] | null | undefined,
): ProjectTagListOption[] {
  return mergeStringListOptions(PROJECT_TAG_OPTIONS, inUse);
}

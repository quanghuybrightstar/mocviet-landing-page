import { PROJECT_TAG_OPTIONS } from "@/libs/project-tags";
import { createCreatableStringListInput } from "@/sanity/components/CreatableStringListInput";
import { PROJECT_TAGS_IN_USE_GROQ } from "@/sanity/lib/creatable-string-list-queries";

export const ProjectTagsInput = createCreatableStringListInput({
  inUseGroq: PROJECT_TAGS_IN_USE_GROQ,
  defaultOptions: PROJECT_TAG_OPTIONS,
  maxItems: 3,
  maxItemLength: 64,
  loadingLabel: "Đang tải danh sách loại công trình…",
  placeholder: "Gõ để tìm hoặc tạo loại công trình…",
  placeholderAtMax: "Đã chọn đủ 3 loại",
  itemNoun: "Loại công trình",
  helpText: "Lưu đúng như bạn nhập (phân biệt hoa/thường).",
});

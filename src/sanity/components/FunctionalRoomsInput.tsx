import { FUNCTIONAL_ROOM_OPTIONS } from "@/libs/functional-rooms";
import { createCreatableStringListInput } from "@/sanity/components/CreatableStringListInput";
import { FUNCTIONAL_ROOMS_IN_USE_GROQ } from "@/sanity/lib/creatable-string-list-queries";

export const FunctionalRoomsInput = createCreatableStringListInput({
  inUseGroq: FUNCTIONAL_ROOMS_IN_USE_GROQ,
  defaultOptions: FUNCTIONAL_ROOM_OPTIONS,
  maxItems: 12,
  maxItemLength: 64,
  loadingLabel: "Đang tải danh sách phòng chức năng…",
  placeholder: "Gõ để tìm hoặc thêm phòng chức năng…",
  placeholderAtMax: "Đã chọn đủ 12 phòng",
  itemNoun: "Phòng",
  helpText: "Lưu đúng như bạn nhập (phân biệt hoa/thường).",
});

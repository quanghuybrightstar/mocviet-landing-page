/** Gợi ý phòng chức năng (Stitch detail — pills). Editor có thể thêm tự do. */
export const FUNCTIONAL_ROOM_SUGGESTIONS = [
  "Phòng khách",
  "Phòng bếp",
  "Phòng ngủ",
  "Phòng tắm",
  "Ban công",
  "Sân vườn",
  "Hành lang",
  "Phòng làm việc",
];

export const FUNCTIONAL_ROOM_OPTIONS = FUNCTIONAL_ROOM_SUGGESTIONS.map(
  (label) => ({ title: label, value: label }),
);

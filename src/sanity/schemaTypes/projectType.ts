import { FolderIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { FunctionalRoomsInput } from "@/sanity/components/FunctionalRoomsInput";
import { ProjectTagsInput } from "@/sanity/components/ProjectTagsInput";
import { FUNCTIONAL_ROOM_SUGGESTIONS } from "@/libs/functional-rooms";

const MAX_PROJECT_TAG_LENGTH = 64;
const MAX_FUNCTIONAL_ROOM_LENGTH = 64;

/**
 * Slugify Vietnamese titles: remove diacritics via Unicode NFD, then
 * lowercase, replace spaces with hyphens.
 * Example: "Công trình test" -> "cong-trinh-test". đ/Đ -> d. No external lib.
 */
function slugifyVietnamese(input: string): string {
  if (!input || typeof input !== "string") return "";
  let s = input.trim();
  s = s.replace(/đ/g, "d").replace(/Đ/g, "d");
  s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Project (Công trình) document type.
 * List: title, code, images[0], tags, description.
 * Detail (Stitch): gallery, designConcept, functionalRooms, contentSections,
 * projectMeta, relatedProjects. Short description also used on detail hero/SEO.
 */
export const projectType = defineType({
  name: "project",
  title: "Công trình",
  type: "document",
  icon: FolderIcon,
  groups: [
    { name: "list", title: "Danh sách", default: true },
    { name: "detail", title: "Trang chi tiết" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Tên công trình",
      type: "string",
      group: "list",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Mã (slug URL)",
      type: "slug",
      group: "list",
      description:
        "Click [Generate] để tự sinh từ tên công trình. Chỉnh tay nếu cần (chữ thường, số, dấu gạch ngang).",
      options: {
        source: "title",
        slugify: (value) => slugifyVietnamese(value ?? ""),
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (!slug?.current) return true;
          return (
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug.current) ||
            "Chỉ dùng chữ thường, số và dấu gạch ngang"
          );
        }),
    }),
    defineField({
      name: "images",
      title: "Ảnh công trình",
      type: "array",
      group: "list",
      description:
        "Ảnh đầu tiên dùng cho thẻ danh sách. Toàn bộ album hiển thị trên trang chi tiết (gallery Stitch). Kéo thả nhiều ảnh hoặc Add item.",
      options: {
        layout: "grid",
      },
      validation: (Rule) =>
        Rule.custom((images: unknown) => {
          // Sanity Studio expects each item in the array to have a `_key`
          // so the list can be edited reliably.
          // The "Missing keys" warning typically happens when data was imported
          // via an API without setting `_key`.
          if (!Array.isArray(images)) return true;
          const hasMissingKey = images.some(
            (img: any) =>
              !img ||
              typeof img !== "object" ||
              typeof img._key !== "string" ||
              img._key.trim().length === 0,
          );
          return (
            !hasMissingKey ||
            "Mỗi ảnh trong 'Ảnh công trình' phải có _key (thường do import thiếu _key). Hãy chạy migration để sửa dữ liệu cũ."
          );
        }),
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Loại công trình",
      type: "array",
      group: "list",
      description:
        "Gõ để tìm tag có sẵn hoặc tạo mới. Lưu đúng như nhập (phân biệt hoa/thường). Tối đa 3.",
      of: [{ type: "string" }],
      components: {
        input: ProjectTagsInput,
      },
      validation: (Rule) =>
        Rule.max(3)
          .unique()
          .custom((tags: unknown) => {
            if (!tags || !Array.isArray(tags) || tags.length === 0) return true;
            const invalid = tags.filter((t) => {
              if (typeof t !== "string") return true;
              const trimmed = t.trim();
              return (
                trimmed.length === 0 || trimmed.length > MAX_PROJECT_TAG_LENGTH
              );
            });
            return (
              invalid.length === 0 ||
              `Mỗi tag không được trống và tối đa ${MAX_PROJECT_TAG_LENGTH} ký tự`
            );
          }),
    }),
    defineField({
      name: "description",
      title: "Mô tả ngắn",
      type: "text",
      rows: 3,
      group: "list",
      description:
        "Mô tả ngắn: thẻ danh sách /projects, phụ đề hero trang chi tiết và meta description (để trống thì site dùng mẫu mặc định + tên công trình).",
    }),
    defineField({
      name: "designConcept",
      title: "Ý tưởng thiết kế",
      type: "object",
      group: "detail",
      description: "Khối moodboard + mô tả (Stitch: Ý tưởng thiết kế).",
      fields: [
        defineField({
          name: "title",
          title: "Tiêu đề khối",
          type: "string",
          initialValue: "Ý tưởng thiết kế",
        }),
        defineField({
          name: "moodboardImages",
          title: "Ảnh moodboard",
          type: "array",
          description: "Thường 3 ảnh nhỏ (vật liệu / phong cách).",
          validation: (Rule) => Rule.max(6),
          of: [{ type: "image", options: { hotspot: true } }],
        }),
        defineField({
          name: "description",
          title: "Mô tả",
          type: "text",
          rows: 4,
        }),
      ],
    }),
    defineField({
      name: "functionalRooms",
      title: "Phòng chức năng",
      type: "array",
      group: "detail",
      description:
        "Autocomplete — gợi ý: " +
        FUNCTIONAL_ROOM_SUGGESTIONS.slice(0, 4).join(", ") +
        ", … Tối đa 12.",
      of: [{ type: "string" }],
      components: {
        input: FunctionalRoomsInput,
      },
      validation: (Rule) =>
        Rule.max(12)
          .unique()
          .custom((rooms: unknown) => {
            if (!rooms || !Array.isArray(rooms) || rooms.length === 0) {
              return true;
            }
            const invalid = rooms.filter((r) => {
              if (typeof r !== "string") return true;
              const trimmed = r.trim();
              return (
                trimmed.length === 0 ||
                trimmed.length > MAX_FUNCTIONAL_ROOM_LENGTH
              );
            });
            return (
              invalid.length === 0 ||
              `Mỗi phòng không được trống và tối đa ${MAX_FUNCTIONAL_ROOM_LENGTH} ký tự`
            );
          }),
    }),
    defineField({
      name: "contentSections",
      title: "Nội dung mô tả chi tiết",
      type: "array",
      group: "detail",
      description:
        "Các đoạn có tiêu đề (VD: Chi tiết vật liệu). Thứ tự = thứ tự hiển thị.",
      of: [
        {
          type: "object",
          name: "contentSection",
          title: "Đoạn nội dung",
          fields: [
            defineField({
              name: "heading",
              title: "Tiêu đề (tùy chọn)",
              type: "string",
            }),
            defineField({
              name: "body",
              title: "Nội dung",
              type: "text",
              rows: 6,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "heading", subtitle: "body" },
            prepare({ title, subtitle }) {
              return {
                title: title || "Đoạn văn",
                subtitle:
                  typeof subtitle === "string"
                    ? subtitle.slice(0, 80)
                    : undefined,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "projectMeta",
      title: "Thông tin dự án",
      type: "object",
      group: "detail",
      description:
        "Sidebar Thông tin dự án (khách hàng, vị trí, diện tích, năm).",
      fields: [
        defineField({
          name: "client",
          title: "Khách hàng",
          type: "string",
        }),
        defineField({
          name: "location",
          title: "Vị trí",
          type: "string",
          description: "VD: Quận 2, TP.HCM",
        }),
        defineField({
          name: "area",
          title: "Diện tích",
          type: "string",
          description: "VD: 450 m²",
        }),
        defineField({
          name: "completedYear",
          title: "Năm hoàn thành",
          type: "string",
          description: "VD: 2023",
        }),
      ],
    }),
    defineField({
      name: "relatedProjects",
      title: "Dự án liên quan",
      type: "array",
      group: "detail",
      description:
        "Tối đa 3 dự án. Chọn 1–2 vẫn tự bổ sung đủ 3 trên site. Để trống: ưu tiên cùng loại công trình (tags), không có thì 3 dự án mới nhất.",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
      validation: (Rule) =>
        Rule.max(3)
          .unique()
          .custom((refs, context) => {
            const docId = context.document?._id?.replace(/^drafts\./, "");
            if (!docId || !Array.isArray(refs)) return true;
            const selfRef = refs.some(
              (r: { _ref?: string }) =>
                r?._ref === docId || r?._ref === `drafts.${docId}`,
            );
            return !selfRef || "Không thể chọn chính công trình này";
          }),
    }),
  ],
  preview: {
    select: { title: "title", code: "code.current" },
    prepare({ title, code }) {
      return {
        title: title || "Chưa đặt tên",
        subtitle: code ? `/projects/${code}` : "",
      };
    },
  },
});

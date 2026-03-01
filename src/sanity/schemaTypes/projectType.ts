import { FolderIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

/**
 * Slugify Vietnamese title: remove diacritics via Unicode NFD, then lowercase, spaces → hyphens.
 * "Công trình test" → "cong-trinh-test". đ/Đ → d. No external lib.
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
 * Frontend uses: title, code (URL slug), images (array; GROQ resolves asset->url).
 */
export const projectType = defineType({
  name: "project",
  title: "Công trình",
  type: "document",
  icon: FolderIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tên công trình",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Mã (slug URL)",
      type: "slug",
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
      description:
        "Kéo thả nhiều ảnh vào đây cùng lúc, hoặc bấm Add item rồi chọn file.",
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
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

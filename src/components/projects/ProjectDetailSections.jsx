"use client";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";

const META_ICONS = {
  "Khách hàng": PersonOutlineOutlinedIcon,
  "Vị trí": LocationOnOutlinedIcon,
  "Diện tích": SquareFootOutlinedIcon,
  "Năm hoàn thành": CalendarTodayOutlinedIcon,
};

const SECTION_TITLE_CLASS = "text-lg font-semibold text-heading";

const ROOM_PILL_BASE =
  "inline-flex shrink-0 items-center rounded-full text-sm font-medium whitespace-nowrap transition-colors";

const ROOM_PILL_DESKTOP = `${ROOM_PILL_BASE} px-6 py-2 border border-border-light bg-surface text-secondary`;

const ROOM_PILL_MOBILE = `${ROOM_PILL_BASE} px-5 py-2.5 border border-border-light bg-white text-secondary`;

function MetaIcon({ label }) {
  const Icon = META_ICONS[label];
  if (!Icon) return null;
  return <Icon className="!text-[20px]" />;
}

const ProjectMetaCard = ({ metaRows, layout }) => {
  if (!metaRows.length) return null;

  if (layout === "mobile") {
    return (
      <div className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
        <h2 className={`${SECTION_TITLE_CLASS} mb-6`}>Thông tin dự án</h2>
        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {metaRows.map(({ label, value }) => (
            <li key={label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-[var(--primary-color)]">
                <MetaIcon label={label} />
              </div>
              <div className="min-w-0">
                <p className="m-0 text-[10px] font-semibold uppercase tracking-widest text-muted">
                  {label}
                </p>
                <p className="m-0 text-sm font-medium text-heading">
                  {value.trim()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <aside className="h-fit shrink-0 lg:col-span-1">
      <div className="rounded-xl border border-border-light bg-surface p-3 shadow-md shadow-[var(--primary-color)]/5 md:p-6">
        <h2
          className={`${SECTION_TITLE_CLASS} mb-6 border-b border-border-light pb-3`}
        >
          Thông tin dự án
        </h2>
        <ul className="m-0 flex list-none flex-col gap-5 p-0 text-sm">
          {metaRows.map(({ label, value }) => (
            <li key={label} className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-2 text-secondary">
                <span className="text-[var(--primary-color)]">
                  <MetaIcon label={label} />
                </span>
                <span>{label}:</span>
              </div>
              <span className="shrink-0 text-right font-medium text-heading">
                {value.trim()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

function MoodboardGrid({ images, layout }) {
  if (!images.length) return null;

  const thumbClass =
    layout === "mobile"
      ? "relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border-light shadow-sm"
      : "relative h-20 w-20 overflow-hidden rounded-lg border border-border-light shadow-sm hover:shadow transition-shadow";

  const wrapClass =
    layout === "mobile"
      ? "mb-6 flex gap-3 overflow-x-auto pb-1 -mx-0.5 px-0.5"
      : "mb-6 flex flex-wrap gap-4";

  return (
    <div className={wrapClass}>
      {images.map((src, i) => (
        <div key={`${src}-${i}`} className={thumbClass}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * @param {{ designConcept?: object, functionalRooms?: string[], contentSections?: Array, projectMeta?: object, layout?: 'mobile' | 'desktop' }} props
 */
export default function ProjectDetailSections({
  designConcept,
  functionalRooms,
  contentSections,
  projectMeta,
  layout = "desktop",
}) {
  const isMobile = layout === "mobile";
  const moodboard = designConcept?.moodboardImages?.filter(Boolean) ?? [];
  const rooms = (functionalRooms ?? []).filter(
    (r) => typeof r === "string" && r.trim().length > 0,
  );
  const sections = (contentSections ?? []).filter((s) => s?.body?.trim());
  const metaRows = [
    { label: "Khách hàng", value: projectMeta?.client },
    { label: "Vị trí", value: projectMeta?.location },
    { label: "Diện tích", value: projectMeta?.area },
    { label: "Năm hoàn thành", value: projectMeta?.completedYear },
  ].filter((row) => row.value?.trim());

  const hasDesign =
    designConcept?.title?.trim() ||
    designConcept?.description?.trim() ||
    moodboard.length > 0;
  const hasMain = hasDesign || rooms.length > 0 || sections.length > 0;
  const hasSidebar = metaRows.length > 0;

  if (!hasMain && !hasSidebar) return null;

  const blockGap = isMobile ? "gap-8" : "gap-10";
  const sectionBlockClass = isMobile ? "flex flex-col" : "mb-10 last:mb-0";

  const mainContent = (
    <div
      className={
        isMobile
          ? `flex flex-col ${blockGap}`
          : "flex min-w-0 flex-col lg:col-span-2"
      }
    >
      {hasDesign ? (
        <div className={sectionBlockClass}>
          <h2
            className={`${SECTION_TITLE_CLASS} ${isMobile ? "mb-3" : "mb-6"}`}
          >
            {designConcept?.title?.trim() || "Ý tưởng thiết kế"}
          </h2>
          <MoodboardGrid images={moodboard} layout={layout} />
          {designConcept?.description?.trim() ? (
            <p
              className={
                isMobile
                  ? "m-0 border-l-2 border-[var(--primary-color)]/30 pl-6 text-sm italic leading-relaxed text-secondary whitespace-pre-line"
                  : "m-0 max-w-3xl text-base leading-relaxed text-secondary whitespace-pre-line"
              }
            >
              {designConcept.description.trim()}
            </p>
          ) : null}
        </div>
      ) : null}

      {rooms.length > 0 ? (
        <div className={sectionBlockClass}>
          <h2
            className={`${SECTION_TITLE_CLASS} ${isMobile ? "mb-3" : "mb-6"}`}
          >
            Phòng chức năng
          </h2>
          <div className="flex flex-wrap gap-2">
            {rooms.map((room) => (
              <span
                key={room}
                className={isMobile ? ROOM_PILL_MOBILE : ROOM_PILL_DESKTOP}
              >
                {room.trim()}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {sections.map((section) => (
        <article
          key={section._key || section.heading || section.body}
          className={sectionBlockClass}
        >
          {section.heading?.trim() ? (
            <h2
              className={`${SECTION_TITLE_CLASS} ${isMobile ? "mb-2" : "mb-6"}`}
            >
              {section.heading.trim()}
            </h2>
          ) : null}
          <p
            className={
              isMobile
                ? "m-0 border-l-2 border-border-light pl-6 text-sm leading-relaxed text-secondary whitespace-pre-line"
                : "m-0 text-base leading-relaxed text-secondary whitespace-pre-line"
            }
          >
            {section.body?.trim()}
          </p>
        </article>
      ))}
    </div>
  );

  if (isMobile) {
    return (
      <section className={`flex flex-col ${blockGap}`}>
        {hasSidebar ? (
          <ProjectMetaCard metaRows={metaRows} layout="mobile" />
        ) : null}
        {hasMain ? mainContent : null}
      </section>
    );
  }

  return (
    <section className="pb-6 md:pb-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12 xl:gap-16">
        {hasMain ? mainContent : null}
        {hasSidebar ? (
          <ProjectMetaCard metaRows={metaRows} layout="desktop" />
        ) : null}
      </div>
    </section>
  );
}

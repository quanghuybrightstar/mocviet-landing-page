"use client";

import FadeUp from "@/components/motion/FadeUp";

/**
 * @param {{ title: string, description?: string, descriptionHtml?: string, className?: string, descriptionClassName?: string }} props
 */
export default function PageIntro({
  title,
  description,
  descriptionHtml,
  className = "pt-[75px] pb-8 md:pt-[100px] md:pb-11 flex flex-col items-center justify-center md:px-6",
  descriptionClassName = "text-sm md:text-base max-w-[960px] text-center m-0 font-normal",
}) {
  return (
    <FadeUp>
      <section className={className}>
        <h1 className="text-[28px] md:text-[40px]">{title}</h1>
        {descriptionHtml ? (
          <h2
            className={descriptionClassName}
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        ) : (
          <h2 className={descriptionClassName}>{description}</h2>
        )}
      </section>
    </FadeUp>
  );
}

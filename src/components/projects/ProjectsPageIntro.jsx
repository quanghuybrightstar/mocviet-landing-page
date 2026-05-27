"use client";

import PageIntro from "@/components/motion/PageIntro";

/**
 * @param {{ title: string, description: string }} props
 */
export default function ProjectsPageIntro({ title, description }) {
  return <PageIntro title={title} description={description} />;
}

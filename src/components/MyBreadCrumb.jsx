import React, { useMemo } from "react";
import { Breadcrumbs, Typography, Box } from "@mui/material";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { IconArrowRight } from "@public/assets/icons";
import { interFont } from "@/libs/fonts";

const MyBreadCrumb = ({ breadCrumbs = [], variant = "default" }) => {
  const isCompact = variant === "compact";

  const breadcrumbs1 = useMemo(
    function generateBreadcrumbs() {
      return [{ url: "/", name: "Trang chủ" }, ...breadCrumbs].map(
        (item, index, list) => {
          const lastChild = index === list.length - 1;
          const { url, name } = item;
          if (url) {
            return (
              <Link
                prefetch
                key={url}
                href={url || ""}
                className={clsx(
                  interFont.className,
                  isCompact
                    ? "text-xs uppercase tracking-widest font-medium text-secondary hover:!text-[var(--primary-color)]"
                    : "text-sm font-bold cursor-pointer !text-[var(--text-color)] hover:!text-[var(--primary-color)] hover:underline",
                )}
                color="text.primary"
              >
                {name}
              </Link>
            );
          }
          return (
            <Typography
              key={name}
              color={lastChild ? "text.primary" : "text.secondary"}
              component="span"
              className={clsx(
                interFont.className,
                isCompact
                  ? "!text-sm uppercase tracking-widest font-semibold !text-[var(--primary-color)]"
                  : {
                      "!font-bold !text-[var(--text-color)]": !lastChild,
                      "!text-sm": true,
                    },
              )}
            >
              {name}
            </Typography>
          );
        },
      );
    },
    [breadCrumbs, isCompact],
  );

  if (!breadCrumbs.length) {
    return <></>;
  }
  return (
    <Box className={isCompact ? "pt-0" : "pt-6"}>
      <Breadcrumbs
        separator={
          <Image
            src={IconArrowRight}
            width={isCompact ? 6 : 8}
            height={isCompact ? 6 : 8}
            alt="icon arrow right"
            className={isCompact ? "opacity-60" : undefined}
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs1}
      </Breadcrumbs>
    </Box>
  );
};

export default React.memo(MyBreadCrumb);

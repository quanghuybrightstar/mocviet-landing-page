import React, { useMemo } from "react";
import { Breadcrumbs, Typography, Box } from "@mui/material";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { IconArrowRight } from "@public/assets/icons";
import { inter } from "@/libs/fonts";

const MyBreadCrumb = ({ breadCrumbs = [] }) => {
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
                  inter.className,
                  " text-sm font-bold cursor-pointer !text-[var(--text-color)] hover:!text-[var(--primary-color)] hover:underline"
                )}
                color="text.primary"
              >
                {name}
              </Link>
            );
          }
          return (
            <Typography
              key={url}
              color={lastChild ? "text.primary" : "text.secondary"}
              component="span"
              className={clsx(
                inter.className,
                { "!font-bold !text-[var(--text-color)] ": !lastChild },
                " !text-sm "
              )}
            >
              {name}
            </Typography>
          );
        }
      );
    },
    [breadCrumbs]
  );

  if (!breadCrumbs.length) {
    return <></>;
  }
  return (
    <Box className="bg-white pt-4">
      <Breadcrumbs
        separator={
          <Image
            src={IconArrowRight}
            width={8}
            height={8}
            alt="icon arrow right"
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

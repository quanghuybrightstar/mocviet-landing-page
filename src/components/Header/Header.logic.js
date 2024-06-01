import { useState } from "react";
import { TypeHeader } from "../../constants/header";

export const headerLogic = () => {
  const dataNavBar = [
    {
      id: 1,
      title: TypeHeader.HOME.name,
      path: TypeHeader.HOME.path,
    },
    {
      id: 2,
      title: TypeHeader.ABOUT.name,
      path: TypeHeader.ABOUT.path,
    },
    {
      id: 3,
      title: TypeHeader.PROJECT.name,
      path: TypeHeader.PROJECT.path,
    },
    {
      id: 4,
      title: TypeHeader.SERVICE.name,
      path: TypeHeader.SERVICE.path,
    },
    {
      id: 5,
      title: TypeHeader.BLOG.name,
      path: TypeHeader.BLOG.path,
    },
  ];

  return {
    dataNavBar,
  };
};

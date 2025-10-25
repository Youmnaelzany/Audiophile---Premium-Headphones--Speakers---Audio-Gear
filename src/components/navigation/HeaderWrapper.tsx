"use client";

import { usePathname } from "next/navigation";

import Header from "./Header";

const HeaderWrapper = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return <Header isHomePage={isHomePage} />;
};

export default HeaderWrapper;

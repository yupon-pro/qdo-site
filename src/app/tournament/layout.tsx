import SubNav from "@/ui/SubNav";
import { Fragment } from "react";

const navs = ["Registration", "Visit", "Schedule"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages: [string, string][] = navs.map((nav) => [nav, nav.toLowerCase()]);
  return (
    <Fragment>
      <SubNav pages={pages} route="tournament" />
      {children}
    </Fragment>
  );
}

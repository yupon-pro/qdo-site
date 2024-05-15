import SubNav from "@/ui/SubNav";
import { Fragment } from "react";

const pages: [string, string][] = [
  ["QDO", ""],
  ["Kyushu Uni", "kyushu_university"],
  ["Fukuoka", "fukuoka"],
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Fragment>
      <SubNav pages={pages} route="about" />
      {children}
    </Fragment>
  );
}

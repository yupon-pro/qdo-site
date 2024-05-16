"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import { hoverUnderline } from "./Component/Props";
import { usePathname } from "next/navigation";
import { useNavHeight } from "./ContextProvider";

const aboutPages: [string, string][] = [
  ["QDO", ""],
  ["Kyushu Uni", "kyushu_university"],
  ["Fukuoka", "fukuoka"],
];

const tournamentPages: [string, string][] = ["Registration", "Visit", "Schedule"].map((page) => [
  page,
  page.toLowerCase(),
]);

export default function SubNav() {
  const {navHeight} = useNavHeight();
  const pathname = usePathname();
  const flagAboutPage = pathname.includes("about");
  const flagTournamentPage = pathname.includes("tournament");
  const pages = flagAboutPage ? aboutPages : flagTournamentPage ? tournamentPages : undefined;

  if (pages == undefined) return null;

  return (
    <Box sx={{position:"sticky", top:`${navHeight}px` ,width:"100%", zIndex:10, display: "flex", justifyContent: "center", backgroundColor: "gray" }}>
      {pages.map((page, index) => (
        <Link key={index} href={`/${flagAboutPage ? "about" : "tournament"}/${page[1]}`}>
          <Button sx={{ ...hoverUnderline, color: "#fff" }}>{page[0]}</Button>
        </Link>
      ))}
    </Box>
  );
}

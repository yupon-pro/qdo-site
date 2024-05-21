"use client";

import { Box, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavHeight } from "./ContextProvider";
import { SyntheticEvent, useEffect, useState } from "react";

const aboutPages: [string, string][] = [
  ["QDO", ""],
  ["Kyushu Uni", "kyushu-university"],
  ["Fukuoka", "fukuoka"],
];

const tournamentPages: [string, string][] = ["Registration", "Visit", "Schedule"].map((page) => [
  page,
  page.toLowerCase(),
]);

export default function SubNav() {
  const [value, setValue] = useState<number | boolean>(false);

  const { navHeight } = useNavHeight();
  const pathname = usePathname();
  const flagAboutPage = pathname.includes("about");
  const isAboutQDO = pathname.endsWith("about");
  const flagTournamentPage = pathname.includes("tournament");
  const pages = flagAboutPage ? aboutPages : flagTournamentPage ? tournamentPages : undefined;

  useEffect(() => {
    isAboutQDO ? setValue(0) 
    : flagAboutPage ? aboutPages.forEach((page, index)=> pathname.endsWith(page[1]) && setValue(index)) 
    : flagTournamentPage ? tournamentPages.forEach((page,index )=> pathname.endsWith(page[1]) && setValue(index))
    : setValue(false);
  }, [flagAboutPage, flagTournamentPage])

  if (pages == undefined) return null;

  function handleChange(e: SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <Box
      sx={{
        position: "sticky",
        top: `${navHeight}px`,
        width: "100%",
        zIndex: 10,
        display: "flex",
        gap: 2,
        justifyContent: "center",
        backgroundColor: "lightsteelblue",
      }}
    >
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
        {pages.map((page, index) => (
          <Tab
            key={index}
            value={index}
            label={page[0]}
            component={Link}
            href={`/${flagAboutPage ? "about" : "tournament"}/${page[1]}`}
          />
        ))}
      </Tabs>
    </Box>
  );
}

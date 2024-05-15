import { Box, Button } from "@mui/material";
import Link from "next/link";
import { hoverUnderline } from "./Component/Props";

export default function SubNav({ pages, route }: { pages: [string, string][]; route: "about" | "tournament" }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "gray" }}>
      {pages.map((page, index) => (
        <Link key={index} href={`/${route}/${page[1]}`}>
          <Button sx={{ ...hoverUnderline, color: "#fff" }}>{page[0]}</Button>
        </Link>
      ))}
    </Box>
  );
}

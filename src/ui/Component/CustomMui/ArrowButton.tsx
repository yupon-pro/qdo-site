"use client";

import { DoubleArrow } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function ArrowButton({ url, text }: { url: string; text: string }) {
  const [hover, setHover] = useState(false);

  return (
    <Button
      onMouseOut={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      variant="text"
      endIcon={
        <DoubleArrow
          sx={
            hover
              ? { transition: "1s", transform: "translate(5px,0)" }
              : { transition: "1s", right: "5px", transform: "translate(0,0)" }
          }
        />
      }
    >
      <Link href={url}>{text}</Link>
    </Button>
  );
}

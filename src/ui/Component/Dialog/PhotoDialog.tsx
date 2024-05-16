"use client";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Image, { StaticImageData } from "next/image";
import { Box } from "@mui/material";

export default function PhotoDialog({ image }: { image: { title: string; url: string | StaticImageData } }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          ":hover": { cursor: "pointer", opacity: 0.65 },
          transitionProperty: "opacity",
          transitionDuration: "0.5s",
        }}
      >
        <Image
          src={image.url}
          blurDataURL={typeof image.url === "string" ? image.url : undefined}
          placeholder="blur"
          fill
          style={{ objectFit: "cover" }}
          alt={image.title}
          loading="lazy"
          onClick={handleClickOpen}
        />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Image
          src={image.url}
          blurDataURL={typeof image.url === "string" ? image.url : undefined}
          placeholder="blur"
          alt={image.title}
          height={450}
          width={450}
        />
      </Dialog>
    </React.Fragment>
  );
}

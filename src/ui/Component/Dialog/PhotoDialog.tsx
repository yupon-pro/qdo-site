"use client";

import Dialog from "@mui/material/Dialog";
import Image, { StaticImageData } from "next/image";
import { Box } from "@mui/material";
import { Fragment, useState } from "react";

export default function PhotoDialog({ image }: { image: { title: string; url: string | StaticImageData } }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
}

"use client";

import { Box, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import { Fragment } from "react";
import PhotoDialog from "../Component/Dialog/PhotoDialog";

import selfphoto from "../../../public/gallery/selfphoto.jpeg";
import stairs from "../../../public/gallery/stairs.jpeg";
import awards from "../../../public/gallery/awards.jpeg";
import holdingpaper from "../../../public/gallery/holdingpaper.jpeg";
import judgeback from "../../../public/gallery/judgeback.jpeg";
import strongspeech from "../../../public/gallery/strongspeech.jpeg";
import onsofa from "../../../public/gallery/onsofa.jpeg";
import relax from "../../../public/gallery/relax.jpeg";
import preparation from "../../../public/gallery/preparation.jpeg";
import coaches from "../../../public/gallery/coaches.jpeg";
import speeching from "../../../public/gallery/speeching.jpeg";
import lectureroom from "../../../public/gallery/lectureroom.jpeg";

const images = [
  { title: "selfphoto", url: selfphoto, featured: true },
  { title: "stairs", url: stairs },
  { title: "awards", url: awards },
  { title: "holdingpaper", url: holdingpaper, featured: true },
  { title: "judgeback", url: judgeback },
  { title: "strongspeech", url: strongspeech },
  { title: "onsofa", url: onsofa, featured: true },
  { title: "relax", url: relax },
  { title: "preparation", url: preparation },
  { title: "coaches", url: coaches, featured: true },
  { title: "speeching", url: speeching },
  { title: "lectureroom", url: lectureroom },
];

export default function QDOGallery() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Fragment>
      <Box justifyContent="center">
        <Box>
          <Typography variant="h4" align="center">
            Gallery
          </Typography>
          <Typography variant="caption" align="center">
            The following photos were shot in 2019
          </Typography>
        </Box>
      </Box>
      <ImageList
        sx={{ width: { xs: 300, sm: 400, md: 650 }, height: matches ? 2000 : 1500 }}
        variant="quilted"
        rowHeight={160}
        cols={matches ? 1 : 2}
      >
        {images.map((image) => (
          <ImageListItem key={image.title} cols={matches ? 1 : image.featured ? 2 : 1}  rows={ matches ? 1 : image.featured ? 1.25 : 1  } >
            <PhotoDialog image={{ title: image.title, url: image.url }} />
          </ImageListItem>
        ))}
      </ImageList>
    </Fragment>
  );
}

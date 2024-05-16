"use client";

import ArrowButton from "@/ui/Component/CustomMui/ArrowButton";
import BodySubtitle from "@/ui/Component/CustomMui/BodySubtitle";
import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import PhotoDialog from "@/ui/Component/Dialog/PhotoDialog";
import { Box, Container, ImageList, ImageListItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment } from "react";

const images = [
  { title: "小郡城", row: 2 },
  { title: "うきはのいちご" },
  { title: "八女提灯", row: 2, col: 2 },
  { title: "かしわ飯" },
  { title: "オルレ大島宗像", row: 2, col: 2 },
  { title: "久留米つつじ公園", col: 2 },
  { title: "屋台" },
  { title: "糸島" },
  { title: "作業風景", row: 2 },
  { title: "辛子明太子" },
  { title: "天神中央公園", row: 2, col: 2 },
  { title: "星野村棚田" },
  { title: "九州国立博物館", row: 2, col: 2 },
  { title: "博多ラーメン" },
  { title: "大川組子", row: 2 },
  { title: "浮羽稲荷神社" },
  { title: "柳川雛祭り", row: 2 },
  { title: "柳川まり" },
  { title: "北九州空港", row: 2, col: 2 },
  { title: "柳川川下り" },
];

export default function Home() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Fragment>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: "url('/thirdparty/fukuoka.jpeg')",
          backgroundSize: "100%",
          backgroundPosition: { xs: "top", md: "50% 75%" },
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          opacity: "0.7",
          height: { xs: "35vh", sm: "70vh" },
        }}
      />
      <Stack alignItems="center" spacing={5} sx={{ marginY: "2rem" }}>
        <Box>
          <Typography sx={{ typography: { xs: "h4", sm: "h3" } }}> Fukuoka</Typography>
        </Box>
        <Box sx={{ width: { xs: "75%", sm: "60%" } }}>
          <BodySubtitle>Outline</BodySubtitle>
          <BodyTypography>
            Fukuoka Prefecture, situated on the northern shore of Japan{"'"}s Kyushu Island, is a dynamic and culturally
            rich region known for its vibrant cities, historical landmarks, and natural beauty. As one of Japan{"'"}s
            most populous and economically prosperous prefectures, Fukuoka seamlessly blends traditional charm with
            modern innovation.
          </BodyTypography>
          <BodyTypography>
            At its heart lies Fukuoka City, the prefectural capital and a bustling metropolis renowned for its
            liveliness and cosmopolitan atmosphere. Boasting a rich history dating back centuries, Fukuoka City is home
            to iconic landmarks such as the ancient Hakata Port, which has long been a vital hub for trade and cultural
            exchange.
          </BodyTypography>
          <BodySubtitle boxSx={{ marginY: 3 }}>Travel & Food</BodySubtitle>
          <BodyTypography>
            Beyond the urban sprawl, Fukuoka Prefecture is blessed with breathtaking natural landscapes, including
            scenic coastlines, lush mountains, and serene countryside. For example, visitors can explore picturesque
            seaside towns like Itoshima, renowned for its sandy beaches and stunning sunsets, or venture inland to
            discover tranquil hot springs and verdant valleys. Yanagawa is also famous for its river rafting. A boatman
            welcome you and often sing some traditional songs while rowing a boat along rivers. Visiters will be
            impressed by its hospitality and relaxed on the boat.
          </BodyTypography>
          <BodyTypography>
            Cultural enthusiasts will find plenty to admire in Fukuoka Prefecture, which is steeped in tradition and
            folklore. From vibrant festivals and traditional arts to centuries-old temples and shrines, the region
            offers a glimpse into Japan{"'"}s rich cultural heritage such as Dazaifu Tenmangu, Ukiha Inari shrine, and
            Ogori castle.
          </BodyTypography>
          <BodyTypography>
            Fukuoka{"'"}s culinary scene is equally enticing, with the prefecture renowned for its fresh seafood, hearty
            ramen noodles, and delectable street food delights. Visitors can sample local delicacies at bustling food
            markets like Yanagibashi Rengo Market or indulge in gourmet dining experiences at Michelin-starred
            restaurants.
          </BodyTypography>
          <BodyTypography>If you want to search further information, please browse the official site.</BodyTypography>
          <ArrowButton url="https://www.crossroadfukuoka.jp/en" text="visit site" />
        </Box>
        <Box justifyContent="center">
          <Box>
            <Typography variant="h4" align="center">
              Impression
            </Typography>
            <Typography variant="caption" align="center">
              ©Fukuoka prefecture travel association
            </Typography>
          </Box>
        </Box>
        <ImageList
          sx={{ width: { xs: 300, sm: 400, md: 650 }, height: 1250 }}
          variant="quilted"
          cols={matches ? 1 : 4}
          rowHeight={matches ? 150 : 121}
        >
          {images.map((image) => (
            <ImageListItem key={image.title} cols={matches ? 1 : image.col || 1} rows={matches ? 1 : image.row || 1}>
              <PhotoDialog image={{ title: image.title, url: `/thirdparty/fukuoka/${image.title}.jpeg` }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Fragment>
  );
}

import FukuokaImpression from "@/ui/About/FukuokaImpression";
import ArrowButton from "@/ui/Component/CustomMui/ArrowButton";
import BodySubtitle from "@/ui/Component/CustomMui/BodySubtitle";
import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import { Box, Container, ImageList, ImageListItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment } from "react";

export default function Home() {
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
          height: { xs: "35vh", sm: "50vh", md: "70vh" },
          transitionDuration: "1000ms",
        }}
      />
      <Stack alignItems="center" spacing={5} sx={{ marginY: "2rem" }}>
        <Box>
          <Typography sx={{ typography: { xs: "h5", sm: "h4", md: "h3" } }}> Fukuoka Prefecture</Typography>
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
        <FukuokaImpression />
      </Stack>
    </Fragment>
  );
}

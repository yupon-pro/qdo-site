import BodySubtitle from "@/ui/Component/CustomMui/BodySubtitle";
import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import Preparation from "@/ui/Preparation";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

export default function Home() {
  return (
    <Stack alignItems="center">
      <Typography align="center" variant="h3" sx={{ paddingTop: 8, paddingBottom: 3 }}>
        Schedule
      </Typography>
      <Container
        maxWidth="md"
        sx={{
          backgroundImage: "url('/tournament/schedule.jpeg')",
          backgroundSize: "60%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          transitionDuration: "1000ms",
          height: { xs: "40vh", md: "55vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transitionProperty: "height, background-position",
        }}
      />
      <Stack sx={{ paddingY: 3 }} >
        <BodySubtitle >Day 1 (17th August, 2024)</BodySubtitle>
        <BodyTypography>8:00 - 8:20: Registration</BodyTypography>
        <BodyTypography>8:20 - 9:10: Opening Ceremony</BodyTypography>
        <BodyTypography>9:10 - 11:40: Round 1</BodyTypography>
        <BodyTypography>11:55 - 14:25: Round 2</BodyTypography>
        <BodyTypography>14:40 - 17:10: Round 3</BodyTypography>
        <BodyTypography>17:25 - 18:55: Round 4 (Silent Round)</BodyTypography>
        <BodyTypography>19:00 - 21:00: Break Night</BodyTypography>
      </Stack>
      <Stack sx={{ paddingY:3 }} >
        <BodySubtitle>Day 2 (18th August, 2024)</BodySubtitle>
        <BodyTypography>08:30 - 09:00: Registration</BodyTypography>
        <BodyTypography>09:20 - 10:50: Quarter Final</BodyTypography>
        <BodyTypography>10:50 - 12:30: Lunch</BodyTypography>
        <BodyTypography>12:30 - 14:00: Semi Final/ Rookie Grand Final</BodyTypography>
        <BodyTypography>14:20 - 15:50: Grand Final</BodyTypography>
        <BodyTypography>16:20 - 17:00: Closing Ceremony</BodyTypography>
      </Stack>
    </Stack>

  );
}

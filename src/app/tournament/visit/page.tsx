import AccessMap from "@/ui/Component/AccessMap";
import { Box, Container, List, ListItem, ListItemText, ListSubheader, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Typography align="center" variant="h3" sx={{ paddingY: 8 }}>
        Visit
      </Typography>
      <Stack spacing={5} alignItems="center">
        <Stack spacing={5} alignItems="center">
          <Container
            maxWidth="md"
            sx={{
              backgroundImage: "url('/tournament/plane_airport.jpeg')",
              backgroundSize: "60%",
              backgroundPosition: "center 20%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
              height: { xs: "40vh", md: "55vh" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "50%",
                backgroundColor: "rgba(200,200,200,0.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Airplane
              </Typography>
            </Box>
          </Container>
          <Typography variant="body1" sx={{ width: { xs: "70vw", md: "60vw" } }}>
            Fukuoka Airport → (Subway Kuko Line) → Meinohama Station (Transfer JR Chikuhi Line) → Kyudai-Gakkentoshi
            Station → Showa Bus → ItoCampus (please get off at Kyudai Central Library bus stop or Kyudai Big Orange bus
            stop)
          </Typography>
          <BusStopList />
        </Stack>
        <Stack spacing={5} alignItems="center">
          <Container
            maxWidth="md"
            sx={{
              backgroundImage: "url('/tournament/train.jpeg')",
              backgroundSize: { xs: "70%", sm: "65%", md: "60%" },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
              height: { xs: "40vh", sm: "45vh", md: "50vh" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "55%",
                height: "55%",
                paddingX: 1,
                backgroundColor: "rgba(200,200,200,0.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Shinkansen / JR train
              </Typography>
            </Box>
          </Container>
          <Typography variant="body1" sx={{ width: { xs: "70vw", md: "60vw" } }}>
            JR Hakata Station → (Subway Kuko Line) → Meinohama Station (Transfer JR Chikuhi Line) → Kyudai-Gakkentoshi
            Station → Showa Bus→Ito Campus (please get off at Kyudai Central Library bus stop)
          </Typography>
          <BusStopList />
        </Stack>
        <AccessMap />
      </Stack>
    </Fragment>
  );
}

function BusStopList() {
  return (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemText sx={{ maxWidth: "75vw" }}>
          *Please take one of these buses below (DO NOT take No.3, No.4, No.6, No.7 bus);
        </ListItemText>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText inset>No.1九大総合グラウンド(Kyudai Sogo Ground)</ListItemText>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText inset>No.2九大総合グラウンド(Kyudai Sogo Ground)</ListItemText>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText inset>No.5九大総合グラウンド(Kyudai Sogo Ground)</ListItemText>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText inset>No.8九大総合グラウンド(Kyudai Sogo Ground)</ListItemText>
      </ListItem>
      <ListItem disableGutters>
        <ListItemText inset>No.9九大東ゲート(Kyudai Higashi Gate)</ListItemText>
      </ListItem>
    </List>
  );
}

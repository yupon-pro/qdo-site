import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const routes = [
  { nav: "Registration", image: "writing" },
  { nav: "Visit", image: "travel_woman", description: "You can arrive the university via train or plane." },
  { nav: "Schedule", image: "antique_clock" },
];

type Route = (typeof routes)[number];

export default function Home() {
  return (
    <Fragment>
      <Typography align="center" variant="h3" sx={{ paddingY: 5 }}>
        Tournament
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 5, md: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{ paddingY: 5 }}
      >
        {routes.map((route, index) => (
          <Item key={index} route={route} />
        ))}
      </Stack>
    </Fragment>
  );
}

function Item({ route }: { route: Route }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Link href={`/tournament/${route.nav.toLowerCase()}`}>
        <Box sx={{ position: "relative", height: "50vh", width: "350px" }}>
          <Image src={`/tournament/${route.image}.jpeg`} fill objectFit="cover" alt="schedule" />
        </Box>
        <Typography align="center" variant="h4">
          {route.nav}
        </Typography>
        {route.description && (
          <Typography align="center" variant="caption">
            {route.description}
          </Typography>
        )}
      </Link>
    </Box>
  );
}

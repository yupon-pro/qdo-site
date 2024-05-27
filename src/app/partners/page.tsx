import { Partner } from "@/lib/Definition";
import PartnerCard from "@/ui/Component/Card/PartnerCard";
import UnderConstruction from "@/ui/Preparation";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  const sponsors: Partner[] = [];
  const supporters: Partner[] = [
    {name:"文部科学省", image:"/partners/supporters/EduSciAgency.jpg"}
  ];

  if (!sponsors.length || !supporters.length) {
    return <UnderConstruction />;
  }

  return (
    <Stack spacing={2}>
      <Typography align="center" variant="h2">
        Partnership
      </Typography>
      <Container>
        <Typography align="center" variant="h3">
          Supporters
        </Typography>
        <Grid container spacing={1}>
          {supporters.map((partner, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PartnerCard partner={partner} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography align="center" variant="h3">
          Sponsors
        </Typography>
        <Grid container spacing={1}>
          {sponsors.map((partner, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PartnerCard partner={partner} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

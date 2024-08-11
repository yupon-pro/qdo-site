import { Partner } from "@/lib/Definition";
import PartnerCard from "@/ui/Component/Card/PartnerCard";
import { Container, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  const sponsors: Partner[] = [
    { name: "OCES", ref: "https://oces.jp/" }
  ];
  const supporters: Partner[] = [
    { name: "Ministry of Education and Science", ref: "https://www.mext.go.jp/"},
    { name: "Ministry of Foreign Affairs", ref: "https://www.mofa.go.jp/mofaj/" },
    { name: "Kyushu University", ref: "https://www.kyushu-u.ac.jp/ja/" },
    { name: "Fukuoka Prefecture", ref: "https://www.pref.fukuoka.lg.jp/" },
    { name: "Fukuoka City", ref: "https://www.city.fukuoka.lg.jp/index.html" },
  ];

  return (
    <Stack spacing={10} sx={{ paddingY: 8 }}>
      <Typography align="center" variant="h2">
        Partnership
      </Typography>
      <Container  >
        <Typography align="center" variant="h3" sx={{ paddingBottom: 5 }} >
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
      <Container >
        <Typography align="center" variant="h3" sx={{ paddingBottom: 5 }} >
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

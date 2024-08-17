import { Partner } from "@/lib/Definition";
import PartnerCard from "@/ui/Component/Card/PartnerCard";
import { Box, Container, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

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

  const contributors = [
    "Yasumitsu Takehiko",
    "Maeda Ryota",
    "Imada Atsushi",
    "Otsubo Yusuke",
    "Oga Toru",
  ]

  return (
    <Stack spacing={10} sx={{ paddingY: 8 }}>
      <Typography align="center" variant="h2">
        Partnership
      </Typography>
      <Container>
        <Typography align="center" variant="h3"  >
          Supporters
        </Typography>
        <Box sx={{ display:"flex", justifyContent:"center", marginX:"auto", width:{xs:"100%", md:"70%"}}} >
          <Typography variant="subtitle1" sx={{ paddingBottom: 9, paddingTop: 5, overflowWrap:"breakWord"}}>
            The supporters are the organizations which go along with the ideal of this competition.
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {supporters.map((partner, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PartnerCard partner={partner} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography align="center" variant="h3"  >
          Sponsor
        </Typography>
        <Box sx={{ display:"flex", justifyContent:"center", marginX:"auto", width:{xs:"100%", md:"70%"}}} >
          <Typography variant="subtitle1" sx={{ paddingBottom: 9, paddingTop: 5, overflowWrap:"breakWord" }}>
            The sponsor is an organization which supplied us with financial aid. Thanks to the sponsor, our financial restrictions are alleviated.
          </Typography>
        </Box>
        <Grid container justifyContent="center" >
          {sponsors.map((partner, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PartnerCard partner={partner} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container>
        <Typography align="center" variant="h3">
          Contributors
        </Typography>
        <Box sx={{ display:"flex", justifyContent:"center", marginX:"auto", width:{xs:"100%", md:"70%"}}} >
          <Typography variant="subtitle1" sx={{ paddingBottom: 7, paddingTop: 5,  overflowWrap:"breakWord" }}>
            The contributors are those who donated their money to this competition. They help us operate this event smoothly in terms of financial conditions.
          </Typography>
        </Box>
        {contributors.map((contributor, index) => (
          <Typography key={index} align="center" variant="h5" sx={{ paddingY: 2 }} >
            {contributor}
          </Typography>
        ))}
      </Container>
    </Stack>
  );
}

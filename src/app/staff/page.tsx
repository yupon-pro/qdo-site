import { Staff } from "@/lib/Definition";
import StaffCard from "@/ui/Component/Card/StaffCard";
import FadeIn from "@/ui/Component/FadeIn";
import { Box, Container, Grid, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

export default function Home() {
  const staff = [
    { name: "Reona Ishizuka", role: "TD" },
    { name: "Hina Namisaki", role: "VTD" },
    { name: "Mami Matsuse", role: "AC" },
    { name: "Minami Matsushimar", role: "AC" },
    { name: "Atsuhiro Nishiyama", role: "CD" },
    { name: "Keigo Kawabata", role: "CD・MD" },
    { name: "Karin Minowa", role: "TC・MD" },
    { name: "Ibuki Okamura", role: "TC" },
    { name: "Arata Shimabukuro", role: "FD" },
    { name: "Keisuke Kino", role: "FD" },
    { name: "Natsuki Horita", role: "ST" },
    { name: "Arisa Imamura", role: "ST" },
    { name: "Toru Oga", role: "ST" },
    { name: "Sora Nishimura", role: "Tab" },
  ];

  const staffList: Staff[] = staff.map((staff) => {
    const image = "/staff/" + staff.name.split(" ")[0] + ".png";
    return { ...staff, image };
  });

  return (
    <Fragment>
      <Typography align="center" variant="h2" sx={{ paddingY: 8 }}>
        Staff Member
      </Typography>
      <Stack spacing={2} sx={{ paddingY: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Container sx={{ width: { md: "75%", sm: "60%" } }}>
          <Grid container spacing={2}>
            {staffList.map((staff, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FadeIn>
                  <StaffCard staff={staff} />
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Fragment>
  );
}

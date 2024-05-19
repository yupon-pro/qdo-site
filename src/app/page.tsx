import ArrowButton from "@/ui/Component/CustomMui/ArrowButton";
import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import HomeSlider from "@/ui/Component/Slider";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "next/image";
import sapling from "../../public/photos/sapling.jpeg";
import funny from "../../public/photos/funny.jpeg";

export default function Home() {
  return (
    <Fragment>
      <HomeSlider />
      <Stack spacing={5} alignItems="center" sx={{ marginY: 3 }}>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row-reverse" },
          }}
        >
          <Box sx={{ position: "relative", height: { xs: "200px", sm: "50vh" }, width: { xs: "200px", sm:"300px" }, transitionDuration:"1000ms", transitionProperty:"height, weight" }}>
            <Image src={sapling} fill  style={{ objectFit:"contain" }} alt="revival" placeholder="blur" loading="lazy" />
          </Box>
          <Box maxWidth={{ xs: "75%", md: "50%" }} sx={{ paddingY: 2 }}>
            <Typography variant="h4" align="center">
              Restart
            </Typography>
            <BodyTypography>
              The Kyushu Debate Open (QDO) was suspended for four years due to the prevailing coronavirus situation in
              Japan. With restrictions concerning COVID-19 lifted, many events at Kyushu University have recently
              resumed, including ours. As this marks the first QDO event in four years, there are notable differences
              compared to past competitions. We have developed this website to announce the restart of QDO and to inform
              you about the slight changes in style. If you wish to review past events, please click the following
              button.
            </BodyTypography>
            <ArrowButton url="https://kyushudebateopen.jimdofree.com/" text="Former Site" />
          </Box>
        </Container>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ position: "relative", height: { xs: "300px", sm: "74vh" }, width: { xs: "200px", sm:"300px" }, transitionDuration:"1000ms", transitionProperty:"height, weight" }}>
            <Image src={funny} fill style={{ objectFit:"contain" }}  alt="qdo" placeholder="blur" loading="lazy" />
          </Box>
          <Box maxWidth={{ xs: "75%", md: "50%" }} sx={{ paddingY: 2 }}>
            <Typography variant="h4" align="center">
              What is QDO?
            </Typography>
            <BodyTypography>
              The Kyushu Debate Open (QDO) is an annual British Parliamentary format competition held at Kyushu
              University{"'"}s Ito campus, welcoming domestic and international debating societies. Its primary aim is
              to enhance participants{"'"} logical thinking, English proficiency, and communication skills, fostering
              future {'"'}global citizens.{'"'}
              As Japan{"'"}s oldest international BP-style debate tournament, QDO facilitates Japanese debaters{"'"}{" "}
              exposure to and learning from international tournaments. Renowned overseas debaters are invited to serve
              as adjudication core (AC) and provide lectures, enriching participants{"'"} debating abilities. QDO also
              promotes the Kyushu region, offering information about Fukuoka city, and collaborates with Kyushu
              University to enhance the event{"'"}s quality.
            </BodyTypography>
            <ArrowButton url="/about" text="read more" />
          </Box>
        </Container>
      </Stack>
    </Fragment>
  );
}

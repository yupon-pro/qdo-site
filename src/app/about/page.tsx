import BodySubtitle from "@/ui/Component/CustomMui/BodySubtitle";
import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Libre_Baskerville } from "next/font/google";

const LibreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
});

export default function Home() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: "url('/photos/speech.jpeg')",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
        }}
      >
        <Box width={{ xs: "80vw", md: "50vw" }} sx={{ marginX: "auto", backgroundColor: "rgba(200,200,200,0.5)" }}>
          <Stack
            sx={{ minHeight: { xs: "50vh", sm: "55vh", md: "60vh" } }}
            alignItems="center"
            justifyContent="space-evenly"
            spacing={1}
          >
            <Box width="100%" sx={{ display: "flex", justifyContent: "left", paddingLeft: 3 }}>
              <Typography
                className={LibreBaskerville.className}
                sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
                color="black"
              >
                {" "}
                Think Logical{" "}
              </Typography>
            </Box>
            <Box width="100%" sx={{ display: "flex", justifyContent: "right", paddingRight: 3 }}>
              <Typography
                className={LibreBaskerville.className}
                sx={{ fontSize: { xs: "3rem", md: "4rem" } }}
                color="black"
              >
                {" "}
                Debate Global{" "}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
      <Stack alignItems="center" spacing={5} sx={{ marginY: "2rem" }}>
        <Typography sx={{ typography: { xs: "h4", sm: "h3" } }}> Kyushu Debate Open </Typography>
        <Box sx={{ width: { xs: "75%", sm: "60%" } }}>
          <BodySubtitle>Circumstances</BodySubtitle>
          <BodyTypography>
            The Kyushu Debate Open (QDO) was initially conceived as an inclusive event for the geographically isolated
            Kyushu region, aiming to provide access to major competitions. With the aspiration for international
            participation, we welcome applicants from both within and outside the nation. Originally named the {'"'}
            Kyushu Debate Cup{'"'} when it began in 2015, the event retained this title for three years until 2017.
            However, recognizing that the term {'"'}open{'"'} better reflects its inclusive nature and propagates as a
            major debate tournament{"'"}s name, we adopted the name {'"'}Kyushu Debate Open{'"'}.
          </BodyTypography>
          <BodyTypography>
            After a four-year hiatus, our tournament has resumed with the primary goal of offering valuable
            opportunities to nurture global citizenship. Participants will have the chance to enhance their logical
            thinking, engage in global debates, and compete rigorously. We firmly believe that this event holds a
            significant role, akin to other major debate tournaments, in cultivating individual debating skills. Its
            impact extends to various stakeholders such as Kyushu University, Fukuoka Prefecture, and the wider regional
            society.
          </BodyTypography>
          <BodySubtitle boxSx={{ marginY: 3 }}>No Lecture & No Online</BodySubtitle>
          <BodyTypography>
            This is for the first time in 4 years, and most members of the committee don{"'"}t have experience to
            operate this event, so there are some changes. In the past, this event ran for 3 days. On the first day,
            there was a lecture conveying tips of thinking and debating. However, we decided not to hold this lecture
            because it is hard to set up. It is tough to make all the arrangements such as asking for lecturers and
            preparing lecture materials in addition to the competition. If you were looking forward to this lecture,
            sorry for failing to up your expectations.
          </BodyTypography>
          <BodyTypography>
            You may think that because online tournaments have been prevalent during the corona virus crisis, this event
            also combines online and offline. However, it is difficult to include the online teams because they need
            additional consideration. Sorry to limit the accessibility to this event.
          </BodyTypography>
        </Box>
      </Stack>
    </Box>
  );
}

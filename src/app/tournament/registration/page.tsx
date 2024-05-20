import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

const bodyTypoSx = {
  width: { xs: "70vw", md: "60vw" },
  margin: 0,
};

export default function Home() {

  return (
    <Fragment>
      <Typography align="center" variant="h3" sx={{ paddingY: 8 }}>
        Registration
      </Typography>
      <Stack spacing={5} alignItems="center" marginBottom={5}>
        <Stack spacing={1} alignItems="center">
          <Container
            maxWidth="md"
            sx={{
              backgroundImage: "url('/tournament/application.jpeg')",
              backgroundSize: { xs:"90%", sm:"75%", md:"60%" },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
              transitionDuration: "1000ms",
              height: { xs: "40vh", md: "55vh" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transitionProperty: "height, background-size",
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
              <Box
                sx={{
                  typography: { xs: "h5", sm: "h4", lg: "h3" },
                  transitionDuration: "1000ms",
                  transitionProperty: "font-size",
                  textAlign:"center",
                }}
              >
                Phase 1
                Application
              </Box>
            </Box>
          </Container>
          <Typography variant="subtitle1" fontWeight="bolder" sx={{ padding:"10px 0px 5px 0px "}} >
          【Deadline is 23:59 8th June】
          </Typography>
          <BodyTypography nonBold="normal" sx={{ ...bodyTypoSx, wordBreak:"break-word" }} >
            Please submit the following application form and let us know by email after you send the form. 
            <br /> 
            kyushu.debate.open.since2014@gmail.com 
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            We send Phase2 information after your submission and email are confirmed.
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            *Please specify following information in email
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            For Representative: (name of representative) (institution)
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            For Independent Adjudicator: (your name)
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={{...bodyTypoSx, whiteSpace:"pre-wrap", wordBreak:"break-word"}} >
            {`- Team: \n  https://forms.gle/SRTuLU41X8PDeiSLA`}
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={{...bodyTypoSx, whiteSpace:"pre-wrap", wordBreak:"break-word"}} >
            {`- Junior and Senior High school students' team: \n  https://forms.gle/QAMj83uVVMR8Lw6s5`}
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={{...bodyTypoSx, whiteSpace:"pre-wrap", wordBreak:"break-word"}} >
            {`- Independent adjudicator: \n  https://forms.gle/4end8zCtE6Gd67XA8`}
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            *We accept teams by the first come first served principle if we get more applications than the limit of the slots for high school students.
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            *For participation in our tournament, you need to submit the disclaimer sheet of this tournament with your parent{"'"}s signature by PDF.
          </BodyTypography>
        </Stack>
        <Stack spacing={1} alignItems="center">
          <Container
            maxWidth="md"
            sx={{
              backgroundImage: "url('/tournament/payment.jpeg')",
              backgroundSize: { xs:"95%", sm:"80%", md:"60%" },
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "transparent",
              transitionDuration: "1000ms",
              height: { xs: "40vh", sm: "45vh", md: "55vh" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transitionProperty: "height, background-size",
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
              <Box
                sx={{
                  typography: { xs: "h5", sm: "h4", lg: "h3" },
                  transitionDuration: "1000ms",
                  transitionProperty: "font-size",
                  textAlign:"center",
                }}
              >
                Phase 2
                Payment
              </Box>
            </Box>
          </Container>
          <Typography variant="subtitle1" fontWeight="bolder"  sx={{ padding:"10px 0px 5px 0px"}}>
          【Deadline is scheduled for 22th June】
          </Typography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            Please follow the procedure written in our email and pay registration fee.
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            *We will send Phase2 messages to those who complete Phase1 registration of QDO 2024. 
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            Please make sure to pay money by no later than【22th June】.
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            *If we cannot confirm your payment by the deadline, those teams{"'"} applications would be automatically canceled. Make sure not to miss the deadline, and let us know in advance if you have some reasons you cannot pay money by the deadline. 
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={ bodyTypoSx } >
            *In case you cancel participation after you pay the registration fee, we cannot refund it. It is very important to run a tournament, thank you for your understanding and cooperation.
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={{...bodyTypoSx, whiteSpace:"pre-wrap"}} >
            {`- Debater (per person): \n 15000 JPY(tentative)`}
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={{...bodyTypoSx, whiteSpace:"pre-wrap"}} >
            {`- Junior and Senior High school students' team (per person): \n 5000 JPY(tentative)`}
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={{...bodyTypoSx, whiteSpace:"pre-wrap"}} >
            {`- Independent adjudicator: \n 10000JPY(tentative)`}
          </BodyTypography>
        </Stack>
      </Stack>
    </Fragment>
  );
}
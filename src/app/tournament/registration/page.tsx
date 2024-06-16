import BodyTypography from "@/ui/Component/CustomMui/BodyTypography";
import ListableTable from "@/ui/Component/CustomMui/ListableTable";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

const bodyTypoSx = {
  width: { xs: "70vw", md: "60vw" },
  margin: 0,
};

const width = { width:bodyTypoSx.width };

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
              backgroundSize: { xs: "90%", sm: "75%", md: "60%" },
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
                width: "60%",
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
                  textAlign: "center",
                }}
              >
                Application
              </Box>
            </Box>
          </Container>
          <Typography variant="subtitle1" fontWeight="bolder" sx={{ padding: "10px 0px 5px 0px " }}>
          【Deadline is 23:59 6th July】
          </Typography>
          <BodyTypography nonBold="normal" sx={{ ...bodyTypoSx, wordBreak: "break-word" }}>
            We will send you the confirmation email after you send the form. In case you do not receive the email within 3 workdays after your submission, please contact us.
          </BodyTypography>          
          <BodyTypography nonBold="normal" sx={{ ...bodyTypoSx, wordBreak: "break-word" }}>
            {`- For Teams' representatives: \n  https://forms.gle/ybW7mUSevLvHpGkDA \n`}
          </BodyTypography>
          <Typography variant="subtitle1" fontWeight="bolder" sx={{ padding: "10px 0px 5px 0px " }}>
          【Payment】
          </Typography>
          <BodyTypography nonBold="normal" sx={{ ...bodyTypoSx, wordBreak: "break-word" }}>
            Debater (per person): 15000 JPY
            <br />
            Independent adjudicator: 10000JPY
            <br />
            Junior and Senior High school students{"'"} team (per person): 5000 JPY
          </BodyTypography>
          <BodyTypography nonBold="normal" sx={{ ...bodyTypoSx, wordBreak: "break-word" }}>
            *Please note, for this Kyushu Debate Open, 
            the person in charge will send an email with payment instructions to those who have submitted a participation form for Phase 2, 
            and those who have received the email are requested to complete payment by the specified date.
          </BodyTypography>  
          <Typography variant="subtitle1" fontWeight="bolder" sx={{ padding: "10px 0px 5px 0px " }}>
          【Cancellation Policy】
          </Typography>
          <BodyTypography nonBold="normal" sx={{ ...bodyTypoSx, wordBreak: "break-word" }}>
            If you do not finish the payment by the deadline (July 6th), your team{"'"}s/adjudicator{"'"}s slot will automatically be dropped. 
            Please make sure not to miss the payment period, and inform us in advance if you cannot keep the deadline.
            Please also note that the money you paid won{"'"}t be refunded after payment.
          </BodyTypography>
          <Typography variant="subtitle1" fontWeight="bolder" sx={{ padding: "10px 0px 5px 0px " }}>
          【Categories】
          </Typography>
          <ListableTable 
            title={{ body: "Open Speaker" }}
            description={{ body: "All the debaters who do not apply to the eligibility below." }}
            size={width}
          />
          <ListableTable 
            title={{ body: "Novice Speaker eligibility"}}
            description={{ body: "No experience breaking in the open category at any domestic/international open tournaments (novice tournaments or Pro-Am competitions excluded)", sx:{ wordBreak:"break-word" } }}
            caution={{ body: [
              "*You are still a novice speaker if you broke in the Novice/Rookie category of an open tournament",
              "*You are not a novice speaker if you broke in the ESL/EFL category at majors (WUDC, UADC, ABP, EUDC) and NEADC",
              "*You are a schools speaker if you are a junior high/high school student regardless of your experience or achievements",
            ] }}
            size={width}
          />
          <ListableTable 
            title={{ body: "Schools Speaker eligibility" }}
            description={{ body: "Junior high/high school students."  }}
            size={width}
          />
          <ListableTable 
            title={{ body: "Novice Team eligibility" }}
            description={{ body: "All three speakers must be Novice Speakers." }}
            size={width}
          />
          <ListableTable 
            title={{ body: "Schools team eligibility" }}
            description={{ body: "All three speakers must be Schools Speakers." }}
            size={width}
          />
        </Stack>
      </Stack>
    </Fragment>
  );
}

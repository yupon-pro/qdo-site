import { Container, Typography } from "@mui/material";

export default function AccessMap() {
  return (
    <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column", paddingBottom: "3rem" }}>
      <Typography align="center" variant="h3" sx={{ marginY: "1rem" }}>
        {" "}
        Access Map{" "}
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.297301340236!2d130.22417869999998!3d33.597589799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541ebe2b0762ad3%3A0x9f3abe570e62db5b!2z5Lmd5bee5aSn5a2mIOS8iumDveOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1714806806211!5m2!1sja!2sjp"
        height={250}
        loading="lazy"
      />
    </Container>
  );
}

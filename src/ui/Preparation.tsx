import { Box, Typography } from "@mui/material";

export default function UnderConstruction() {
  return (
    <Box minHeight="80vh" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography sx={{typography:{xs:"h3",sm:"h2", md:"h1"}}}>Under Construction</Typography>
    </Box>
  );
}

import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box minHeight="80vh" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress color="success" size={80} thickness={4} />
    </Box>
  );
}

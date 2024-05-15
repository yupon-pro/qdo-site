"use client";

import { Button, Stack, Typography } from "@mui/material";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const errorMessage = error instanceof Error ? error.message : "Something went wrong!";

  return (
    <Stack minHeight="80vh" alignItems="center" justifyContent="center" spacing={2}>
      <Typography variant="h5" sx={{ color: "red", fontWeight: "bold" }}>
        Error!
      </Typography>
      <Typography variant="body1" sx={{ color: "red" }}>
        {errorMessage}
      </Typography>
      <Button variant="contained" color="error" onClick={reset}>
        Try Again
      </Button>
    </Stack>
  );
}

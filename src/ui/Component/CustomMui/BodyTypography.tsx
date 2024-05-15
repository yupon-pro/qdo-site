import { Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";

export default function BodyTypography({ children }: { children: ReactNode }) {
  return (
    <Typography variant="body1" sx={{ fontWeight: "bold", lineHeight: "25px", marginY: 1 }}>
      {children}
    </Typography>
  );
}

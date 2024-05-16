import { SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function BodyTypography({ children, sx }: { children: ReactNode; sx?: SxProps }) {
  return (
    <Typography variant="body1" sx={{ fontWeight: "bold", lineHeight: "25px", marginY: 1, ...sx }}>
      {children}
    </Typography>
  );
}

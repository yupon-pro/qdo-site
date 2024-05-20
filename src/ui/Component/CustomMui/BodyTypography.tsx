import { SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function BodyTypography({
  children,
  nonBold,
  sx,
}: {
  children: ReactNode;
  nonBold?: string;
  sx?: SxProps;
}) {
  return (
    <Typography variant="body1" fontWeight={nonBold || "bold"} sx={{ lineHeight: "25px", marginY: 1, ...sx }}>
      {children}
    </Typography>
  );
}

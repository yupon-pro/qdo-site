import { Box, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type UnderlineProps = { [Key in "width" | "height" | "left" | "bottom"]?: string };

export default function BodySubtitle({
  children,
  underlineProps,
  boxSx,
  typoSx,
}: {
  children: ReactNode;
  underlineProps?: UnderlineProps;
  boxSx?: SxProps;
  typoSx?: SxProps;
}) {
  return (
    <Box sx={{ position: "relative", marginY: 2, ...boxSx }}>
      <Typography
        sx={{
          typography: { xs: "h5", sm: "h4" },
          "::before": {
            position: "absolute",
            content: "''",
            display: "inline-block",
            backgroundColor: "black",
            width: `${underlineProps?.width || "3px"}`,
            height: { xs: "35px", sm: `${underlineProps?.height || "40px"}` },
            top: `${underlineProps?.bottom || "0px"}`,
            left: `${underlineProps?.left || "-10px"}`,
          },
          ...typoSx,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

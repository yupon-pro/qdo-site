import { SxProps, Theme } from "@mui/material";

export const hoverUnderline: SxProps<Theme> = {
  "::after": {
    position: "absolute",
    left: "0",
    content: "''",
    width: "100%",
    height: "2px",
    backgroundColor: "black",
    bottom: "0",
    transform: "scale(0,1)",
    transformOrigin: "left top",
    transition: "0.5s",
  },
  ":hover::after": {
    transform: "scale(1,1)",
  },
};

import { Facebook, Instagram, X, Chat } from "@mui/icons-material";
import { Box, Button, Container, IconButton, List, ListItem, ListItemText, SvgIcon, Typography } from "@mui/material";
import { FooterTooltip } from "./Component/CustomMui/FooterTooltip";
// import Line from "../../public/logo/line-logo.svg";
import Link from "next/link";

const nav = ["About", "Staff", "Partners", "Tournament", "Contact"];

export default function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "forestgreen",
        minHeight: "30vh",
        width: "100%",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "space-between", sm: "space-around" },
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "70%", display: "flex", justifyContent: "center", gap: 1 }}>
        {nav.map((page) => (
          <Link key={page} href={`/${page.toLowerCase()}`}>
            <Button
              sx={{
                ":hover": { backgroundColor: "rgba(50,205,50,0.5)" },
                backgroundColor: "inherit",
                transition: "background-color 700ms linear",
                color: "black",
                fontWeight: 600,
                display: { xs: "none", sm: "block" },
              }}
            >
              {page}
            </Button>
          </Link>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "50%", minWidth: "25%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <FooterTooltip title="Facebook">
            <IconButton>
              <Link href="https://www.facebook.com/QDO.KyushuDebateOpen/?locale=ja_JP">
                <Facebook fontSize="large" />
              </Link>
            </IconButton>
          </FooterTooltip>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption">©2024 Kyushu University Debate Society</Typography>
        </Box>
      </Box>
    </Container>
  );
}

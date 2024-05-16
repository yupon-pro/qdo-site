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
        backgroundColor: "seagreen",
        minHeight: "30vh",
        width: "100%",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "space-between", sm: "space-around" },
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "70%", display: "flex", justifyContent: "center" }}>
        {nav.map((page) => (
          <Link key={page} href={`/${page.toLowerCase()}`} style={{ margin: "0px 3px" }}>
            <Button
              sx={{
                ":hover": { backgroundColor: "rgba(50,205,50,0.5)" },
                backgroundColor: "inherit",
                transition: "background-color 700ms linear",
                color: "black",
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
          <FooterTooltip title="x">
            <IconButton>
              <X fontSize="large" />
            </IconButton>
          </FooterTooltip>
          <FooterTooltip title="Facebook">
            <IconButton>
              <Facebook fontSize="large" />
            </IconButton>
          </FooterTooltip>
          <FooterTooltip title="Instagram">
            <IconButton>
              <Instagram fontSize="large" />
            </IconButton>
          </FooterTooltip>
          <FooterTooltip title="Line">
            <IconButton>
              <Chat fontSize="large" />
            </IconButton>
          </FooterTooltip>
          {/* 
						カスタムbabelを使う方法だと、Next/fontのコンパイルが衝突する 
						https://nishinatoshiharu.com/next-svg/
					*/}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption">©2024 Ksyushu University Debate Society</Typography>
        </Box>
      </Box>
    </Container>
  );
}

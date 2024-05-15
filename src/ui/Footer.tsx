import { Facebook, Instagram, X, Chat } from "@mui/icons-material";
import { Box, Container, IconButton, List, ListItem, ListItemText, SvgIcon, Typography } from "@mui/material";
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
        minHeight: "125px",
        width: "100%",
        margin: "0",
        display: "flex",
        justifyContent: { xs: "space-between", sm: "space-around" },
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <List>
          {nav.map((page) => (
            <ListItem key={page} sx={{ paddingY: "4px" }}>
              <Link href={`/${page.toLowerCase()}`}>
                <ListItemText
                  primary={page.toUpperCase()}
                  sx={{
                    "::after": {
                      position: "absolute",
                      left: "0",
                      content: "''",
                      width: "150px",
                      height: "2px",
                      backgroundColor: "black",
                      bottom: "0",
                      transform: "scale(0,1)",
                      transformOrigin: "left top",
                      transition: "0.5s",
                    },
                    ":hover::after": { transform: "scale(1,1)" },
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
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

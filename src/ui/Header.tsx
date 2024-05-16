"use client";

import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { hoverUnderline } from "./Component/Props";
import { useNavHeight } from "./ContextProvider";

const drawerWidth = 200;
const navItems = ["About", "Staff", "Partners", "Tournament", "Contact"];

export default function DrawerAppBar() {
  const ref = React.useRef<HTMLHeadElement>(null);
  const { navHeight, setNavHeight } = useNavHeight();

  React.useEffect(() => {
    const height = ref.current?.offsetHeight;
    console.log(height);
    setNavHeight((prev) => (height ? height : prev));
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          QDO
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" ref={ref}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link href="/">
            <Avatar src="/logo/qdo-logo.jpeg" alt="qdo" sx={{ width: 24, height: 24, opacity: "0.9" }} />
          </Link>
          <Box sx={{ flexGrow: 1, marginX: 1, display: { xs: "none", md: "block" } }}>
            <Typography variant="h6" component="div">
              <Link href="/">QDO</Link>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <Button sx={{ ...hoverUnderline, color: "#fff" }}>{item}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* 理由は分からないが、toolbarを後ろで読み込ませると、appbarの分だけ下に下がるしfixedされる。 */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FormGroup } from "@mui/material";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LightOutlinedIcon from "@mui/icons-material/LightOutlined";
import "../css/header.css";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "@mui/material/Link";

const drawerWidth = 450;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "100px",
  backgroundColor: "#F0F0F0",
  "&:hover": {
    backgroundColor: "lightgray",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "1125px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [loginUser, setLoginUser] = React.useState(null);
  const logout = React.useCallback((e) => {
    console.log(e);
    e.preventDefault();
    sessionStorage.removeItem("USER_INFO");
    setLoginUser(null);
    /*window.location.href="/";*/
  }, []);

  React.useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("USER_INFO")));
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} >
        <FormGroup>
          <IconButton
            className="greenheader_btn"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <LocalShippingOutlinedIcon sx={{ color: "white" }} />
            <p className="greenheader_text">배송 서비스</p>
          </IconButton>

          <IconButton
            className="greenheader_btn"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <CelebrationOutlinedIcon sx={{ color: "white" }} />
            <p className="greenheader_text">이벤트 및 프로모션</p>
          </IconButton>

          <IconButton
            className="greenheader_btn"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <LightOutlinedIcon sx={{ color: "white" }} />
            <p className="greenheader_text">온라인쇼룸</p>
          </IconButton>
        </FormGroup>

        <AppBar
          position="static"
          sx={{ backgroundColor: "white", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            <img className="logo" src="images/logo.png" />

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="검색어 입력"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <PermIdentityOutlinedIcon sx={{ fontSize: 28 }} />
                <div className="login_text">
                  {loginUser !== null ? (
                    <>
                      <p>{loginUser.userNickname}</p>
                      <Link onClick={logout} href="/">
                        로그아웃
                      </Link>
                    </>
                  ) : (
                    <>
                      <p>
                        <Link href="/join">회원가입</Link>
                      </p>
                      <Link href="/login">로그인</Link>
                    </>
                  )}
                </div>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["카테고리", "인테리어 쇼룸", "Send email", "Drafts"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div className="header_line">
        <hr />
        </div>
      </Box>
    </>
  );
};

export default Header;

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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Navbar from "./main/CategoryNavbar";
import CategoryNavbar from "./main/CategoryNavbar";
import { useNavigate } from "react-router-dom";

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
    marginLeft: theme.spacing(2),
    width: "1100px",
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
  const [cartCount, setCartCount] = React.useState(0); //장바구니에 담긴 제품 개수
  const [loginUser, setLoginUser] = React.useState(null);
  const [word, setWord] = useState("");

  // const onSubmit = async (e) => {
  //   if (e.keyCode === 13) window.location.href = "/search/" + word;
  // };

  const onSubmit = async () => {
    window.location.href = "/search/" + word;
  };

  const logout = React.useCallback((e) => {
    // console.log(e);
    // e.preventDefault();
    sessionStorage.removeItem("USER_INFO");
    sessionStorage.removeItem("ACCESS_TOKEN");
    sessionStorage.removeItem("cartCount");
    //localStorage.removeItem("cartCount");
    setLoginUser(null);
    window.location.href = "/";
  }, []);

  React.useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("USER_INFO")));
    setCartCount(JSON.parse(sessionStorage.getItem("cartCount")));
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [CategoryPage, setCategoryPage] = React.useState();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const categoryClick = (e) => {
    const { name } = e.target;
    setCategoryPage(name);
  };

  // const navigate = useNavigate();
  // const search = (event) => {
  //   if (event.key === "Enter") {
  //     //입력한 검색어를 읽어와서
  //     //url을 바꿔준다
  //     let keyword = event.target.value;
  //     console.log("keyword", keyword);

  //     //url을 바꿔준다
  //     navigate(`/list/?q=${keyword}`);
  //   }
  // };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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

            <div className="logoSearchbarLogin">
              <Link href="/">
                <img className="logo" src="images/logo_2.png" alt="헤더로고" />
              </Link>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="검색어 입력"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    setWord(e.target.value);
                    console.log(word);
                  }}
                  onKeyPress={onSubmit}
                />
                {/* 
                <button type="button">
                  검색
                </button> */}
              </Search>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <PermIdentityOutlinedIcon sx={{ fontSize: 28 }} />

                  {loginUser !== null ? (
                    <>
                      <div className="loginName">
                        <p>{loginUser.userNickname}</p>
                      </div>

                      <div className="logout">
                        <Link onClick={logout} href="/">
                          로그아웃
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="login">
                      <Link href="/login">로그인 또는 가입하기</Link>
                    </div>
                  )}
                </IconButton>

                {loginUser !== null ? (
                  <>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Link href="/wishlist">
                        <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
                      </Link>
                    </IconButton>

                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <Link href="/cart">
                        <Badge badgeContent={cartCount} color="success">
                          <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
                        </Badge>
                      </Link>
                    </IconButton>
                  </>
                ) : (
                  <>
                    <IconButton
                      size="large"
                      aria-label="show 17 new notifications"
                      color="inherit"
                    >
                      <Link href="/login">
                        <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
                      </Link>
                    </IconButton>

                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <Link href="/login">
                        <Badge badgeContent={cartCount} color="success">
                          <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
                        </Badge>
                      </Link>
                    </IconButton>
                  </>
                )}
              </Box>
            </div>
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
          <div>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}
              </IconButton>
            </DrawerHeader>

            <img
              className="logo"
              style={{ margin: "0 0 16px 56px" }}
              src="images/logo_2.png"
              alt="네브바로고"
            />
          </div>
          <div className="nav_hr">
            <hr />
          </div>
          <Divider />
          <List sx={{ paddingLeft: "40px" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <CategoryNavbar />
                <ListItemText primary="모든제품" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <Link href="/showroom">
                  <ListItemText primary="인테리어 쇼룸" />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="이벤트 및 프로모션" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="고객센터" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="지점안내" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <Link href="/mypage">
                  <ListItemText primary="마이페이지" />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="직원소개" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider />
        </Drawer>
      </Box>
    </>
  );
};

export default Header;

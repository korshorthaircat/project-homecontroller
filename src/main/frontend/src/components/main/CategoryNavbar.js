import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CloseIcon from "@mui/icons-material/Close";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { initializeConnect } from "react-redux/es/components/connect";
import "../../css/CategoryNavcss.css";
const drawerBleeding = 56;
const categoryDrawerWidth = 450;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const StyledBox = styled(Box)(({ theme }) => ({}));

const Puller = styled(Box)(({ theme }) => ({}));

function CategoryNavbar(props) {
  const { window, moveToCategoryList } = props;
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const moveCategoryList = (e) => {
    console.log(e.target.textContent);
    moveToCategoryList(e.target.textContent);
  };

  return (
    <Root>
      <CssBaseline />

      {/* ?????????????????? */}
      <Box>
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            width: "200px",
            height: "50px",
            justifyContent: "left",
            fontSize: "16px",
            textAlign: "left",
            color: "black",
          }}
        >
          ????????????
        </Button>
      </Box>
      <Drawer
        sx={{
          width: categoryDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: categoryDrawerWidth,
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
              {theme.direction === "ltr" ? (
                <ArrowBackIcon />
              ) : (
                <ArrowBackIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <img
            className="logo"
            style={{ margin: "0 0 16px 56px" }}
            src="../images/logo_2.png"
            alt="???????????????"
          />
        </div>
        <div className="nav_hr">
          <hr />
        </div>

        <Divider />
        <List sx={{ paddingLeft: "50px" }}>
          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="????????? | ?????? | ??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="????????? | tv???" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="?????? | ?????????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="????????? | ??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="?????? | ??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="????????? | ??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="??????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="?????????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="?????????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="????????????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="????????????" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={moveCategoryList}>
              <ListItemText primary="???????????? ??????" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
      </Drawer>
    </Root>
  );
}

export default CategoryNavbar;

import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NavContentInfo from "./NavContentInfo";
import ProductDetailInfo from "./ProductDetailInfo";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({}));

const Puller = styled(Box)(({ theme }) => ({}));

function MainInfoNav(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(106% - ${drawerBleeding}px)`,
            width: `calc(30% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      {/* 오픈박스버튼 */}
      <Box sx={{position: "absolute"}}>
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            width: "900px",
            height: "50px",
          }}
        ></Button>
      </Box>

      {/* 메인박스 */}
      <SwipeableDrawer
        container={container}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          borderBottomLeftRadius: 8,
        }}
      >
        {/* 상단 토글 */}
        <StyledBox>
          <Puller></Puller>
          <Typography />
        </StyledBox>

        {/* 중앙 */}
        <StyledBox
          sx={{
            height: "100%",
            margin: "20px",
            overflow: "auto",
          }}
        >
          <NavContentInfo />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

MainInfoNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainInfoNav;

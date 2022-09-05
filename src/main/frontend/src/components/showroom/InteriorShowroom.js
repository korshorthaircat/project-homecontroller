import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/system";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "../../css/showroom.css";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SplitButton from "../list/SplitButton";
import ColorChip from "../list/ColorChip";

function InteriorShowroom() {
  return (
    <Container component="main" maxWidth="xl" style={{ marginTop: "8%" }}>
      <div className="showroomMain">
        <div
          className="row"
          style={{ flexWrap: "nowrap", overflowX: "scroll" }}
        >
          <div className="col-md-3">
            <img src="../images/light1.png" width="100%" />
            <h4>상품명</h4>
            <p>상품설명</p>
            <p>price </p>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </div>
          <div className="col-md-3">
            <img src="../images/light2.png" width="100%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-3">
            <img src="../images/light3.png" width="100%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-3">
            <img src="../images/light3.png" width="100%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-3">
            <img src="../images/light3.png" width="100%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
        <div className="seemore">
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 12.5 }}
          >
            더 보기
          </Button>
        </div>
      </div>
      <div className="header_line">
        <hr />
      </div>
      <div className="wrapper">
        <ColorChip></ColorChip>
      </div>
    </Container>
  );
}

export default InteriorShowroom;

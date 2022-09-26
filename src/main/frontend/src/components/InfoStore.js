/*global kakao*/
import { KayakingOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Grid } from "rsuite";
import "../css/infoStore.css";
import KakaoMap from "./KakaoMap";

const InfoStore = () => {
  return (
    <div style={{ margin: "5%" }}>
        <Typography>지점 안내</Typography>
        <Typography>
          <div>강남점</div>
          <div>포천점</div>
          <div>의왕점</div>
          <div>나주점</div>
          <div>울산점</div>
        </Typography>

      <Grid
        container
        spacing={12}
        columns={16}
        style={{
          width: "80%",
          flexDirection: "row",
          margin: "5%",
        }}
        // direction="row"
        alignItems="center"
      >
        <Grid item xs={6}>
          <div>
            <div style={{ float: "left" }}>
              <img className="mapImg" src="../images/mapImg.png"></img>
            </div>
            <img
              className="mapPin"
              id="강남"
              style={{ top: "435px", left: "290px" }}
              src="../images/pin.png"
            ></img>
            <div className="gangnam">강남점</div>
            <img
              className="mapPin"
              id="울산"
              style={{ top: "750px", left: "500px" }}
              src="../images/pin.png"
            ></img>
            <img
              className="mapPin"
              id="의왕"
              style={{ top: "470px", left: "280px" }}
              src="../images/pin.png"
            ></img>
            <img
              className="mapPin"
              id="포천"
              style={{ top: "385px", left: "310px" }}
              src="../images/pin.png"
            ></img>
            <img
              className="mapPin"
              id="나주"
              style={{ top: "850px", left: "200px" }}
              src="../images/pin.png"
            ></img>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div>
            <KakaoMap />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoStore;

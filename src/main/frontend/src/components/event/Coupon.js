import React, { useCallback, useState } from "react";
import { Button, TextField, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "../../css/coupon.css";

const Coupon = () => {
  const coupons = [
    {
      couponNo: 1,
      couponName: "5% 할인",
      couponExpdate: "221231",
      couponMethod: "P",
      couponPrice: 5,
    },
    {
      couponNo: 2,
      couponName: "10% 할인",
      couponExpdate: "221231",
      couponMethod: "P",
      couponPrice: 10,
    },
    {
      couponNo: 3,
      couponName: "3000원 할인",
      couponExpdate: "221231",
      couponMethod: "W",
      couponPrice: 3000,
    },
    {
      couponNo: 4,
      couponName: "5000원 할인",
      couponExpdate: "221231",
      couponMethod: "W",
      couponPrice: 5000,
    },
  ];

  //쿠폰 발급받기 버튼 클릭시
  const createCoupon = (num) => {
    axios({
      url: "http://localhost:8080/api/coupon/createCoupon",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: coupons[num],
    }).then((response) => {
      // console.log("cart",response.data);
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <img className="treeImg" src="../images/pine-tree.png"></img>
      <img className="treeImg" src="../images/pine-tree.png"></img>
      <div className="couponOutline"></div>
      <div style={{ position: "relative" }}>
        <Typography id="couponTitle">MEMBERSHIP COUPON</Typography>
        <Typography id="couponSub">
          HOME CONTROLLER 회원들을 위한 특별한 혜택
        </Typography>

        <Grid
          container
          spacing={12}
          columns={16}
          style={{
            width: "50%",
            flexDirection: "row",
            margin: "1% 26% 20%",
          }}
          // direction="row"
          alignItems="center"
        >
          <Grid item xs={8}>
            <div>
              <div id="couponContent">
                <div style={{ fontSize: "15px", color: "#546e23" }}>
                  THANK YOU COUPON
                </div>
                <div
                  style={{
                    fontSize: "95px",
                    fontWeight: "1000",
                    color: "#74992e",
                  }}
                >
                  5%
                </div>
              </div>

              <div id="couponDownload">
                쿠폰 발급
                <p />
                <img
                  className="downloadIcon"
                  src="../images/downloadIcon(2).png"
                ></img>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <div id="couponContent">
                <div style={{ fontSize: "15px", color: "#546e23" }}>
                  THANK YOU COUPON
                </div>
                <div
                  style={{
                    fontSize: "95px",
                    fontWeight: "1000",
                    color: "#74992e",
                  }}
                >
                  10%
                </div>
              </div>

              <div id="couponDownload">
                쿠폰 발급
                <p />
                <img
                  className="downloadIcon"
                  src="../images/downloadIcon(2).png"
                ></img>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <div id="couponContent">
                <div style={{ fontSize: "15px", color: "#546e23" }}>
                  THANK YOU COUPON
                </div>
                <div
                  style={{
                    fontSize: "65px",
                    fontWeight: "1000",
                    color: "#74992e",
                  }}
                >
                  3,000원
                </div>
              </div>

              <div id="couponDownload">
                쿠폰 발급
                <p />
                <img
                  className="downloadIcon"
                  src="../images/downloadIcon(2).png"
                ></img>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <div id="couponContent">
                <div style={{ fontSize: "15px", color: "#546e23" }}>
                  THANK YOU COUPON
                </div>
                <div
                  style={{
                    fontSize: "65px",
                    fontWeight: "1000",
                    color: "#74992e",
                  }}
                >
                  5,000원
                </div>
              </div>

              <div id="couponDownload">
                쿠폰 발급
                <p />
                <img
                  className="downloadIcon"
                  src="../images/downloadIcon(2).png"
                ></img>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Coupon;

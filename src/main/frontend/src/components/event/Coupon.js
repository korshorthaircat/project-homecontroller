import React, { useCallback, useState } from "react";
import { Button, TextField, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import axios from "axios";

const Coupon = () => {
  const coupons = [
    {
      couponNo: 1,
      couponName: "첫 구매 10% 할인",
      couponExpdate: "221231",
      couponMethod: "P",
      couponPrice: 10,
    },
    {
      couponNo: 2,
      couponName: "5% 할인",
      couponExpdate: "221231",
      couponMethod: "P",
      couponPrice: 5,
    },
    {
      couponNo: 3,
      couponName: "5000원 할인",
      couponExpdate: "221231",
      couponMethod: "W",
      couponPrice: 5000,
    },
    {
      couponNo: 4,
      couponName: "3000원 할인",
      couponExpdate: "221231",
      couponMethod: "W",
      couponPrice: 3000,
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
      <Typography variant="h1" style={{ textAlign: "center" }}>
        쿠폰 발급
      </Typography>

      <Grid
        container
        spacing={2}
        columns={16}
        style={{ width: "70%" }}
        // direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Item>
            <img
              className="coupon"
              src="images/coupons/coupon_10perdiscount.jpg"
              alt="쿠폰"
            />
            <Button
              color="success"
              variant="contained"
              fullWidth
              onClick={createCoupon(1)}
            >
              발급 받기
            </Button>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <img
              className="coupon"
              src="images/coupons/coupon_5perdiscount.jpg"
              alt="쿠폰"
            />{" "}
            <Button
              color="success"
              variant="contained"
              fullWidth
              onClick={createCoupon(2)}
            >
              발급 받기
            </Button>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <img
              className="coupon"
              src="images/coupons/coupon_5000discount.jpg"
              alt="쿠폰"
            />
            <Button
              color="success"
              variant="contained"
              fullWidth
              onClick={createCoupon(3)}
            >
              발급 받기
            </Button>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <img
              className="coupon"
              src="images/coupons/coupon_3000discount.jpg"
              alt="쿠폰"
            />
            <Button
              color="success"
              variant="contained"
              fullWidth
              onClick={createCoupon(4)}
            >
              발급 받기
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Coupon;

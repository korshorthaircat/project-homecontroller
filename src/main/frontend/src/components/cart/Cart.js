import { Typography } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import ProductInCart from "./ProductInCart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CartItemList from "./CartItemList";

const Cart = () => {
  function createProductData(
    prooductNo,
    productCategory,
    productDeliveryInfo,
    productName,
    productPrice
  ) {
    return {
      prooductNo,
      productCategory,
      productDeliveryInfo,
      productName,
      productPrice,
    };
  }

  //제품들
  const products = [
    createProductData(1, "C13", "배송 가능", "ANNAKAJSA 안나카이사", 5000),
    createProductData(2, "C01", "배송 가능", "MALM 말름 오토만침대", 30000),
    createProductData(3, "C02", "배송 가능", "멋있는 전등", 50000),
  ];

  //주문금액
  const [orderAmount, setOrderAmount] = useState(0);

  //결제금액
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    if (document.getElementById("auto-select").value == "3,000원 할인") {
      setPaymentAmount(paymentAmount - 3000);
    } else if (
      document.getElementById("auto-select").value == "첫 구매 회원 10% 할인"
    ) {
      setPaymentAmount(paymentAmount * 0.9);
    } else if (document.getElementById("auto-select").value == "5,000원 할인") {
      setPaymentAmount(paymentAmount - 5000);
    }
  }, []);

  //쿠폰 옵션
  const coupons = [
    {
      couponNo: "1",
      couponExpdate: "220930",
      couponMethod: "P",
      couponName: "첫 구매 회원 10% 할인",
    },
    {
      couponNo: "2",
      couponExpdate: "220930",
      couponMethod: "W",
      couponName: "3,000원 할인",
    },
    {
      couponNo: "3",
      couponExpdate: "220930",
      couponMethod: "W",
      couponName: "5,000원 할인",
    },
  ];

  const [couponVal, setCouponVal] = useState(coupons[0]);
  // const handleClick = () => {
  //   setCouponVal(coupons[0]);
  // };

  //주문하기 버튼 클릭시 실행될 함수
  const onClickHandler = () => {
    window.location.href = "/order";
  };

  return (
    <div>
      <Typography variant="h4">장바구니</Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        marginTop={"20px"}
      >
        <Grid className="productsInCart">
          {products.map((product) => (
            <ProductInCart
              product={product}
              orderAmount={orderAmount}
              setOrderAmount={setOrderAmount}
              paymentAmount={paymentAmount}
              setPaymentAmount={setPaymentAmount}
            ></ProductInCart>
          ))}
        </Grid>

        <Grid className="cartInfo">
          <Paper
            elevation={24}
            sx={{
              p: 2,
              marginLeft: 20,
              width: 400,
              height: 400,
              backgroundColor: "#F0F0F0",
            }}
          >
            <Grid>
              <Grid sx={{ paddingBottom: "30px" }}>
                <Typography variant="h4">총 주문금액</Typography>
                <Typography>₩ {orderAmount}</Typography>
              </Grid>
              <Grid sx={{ paddingBottom: "70px" }}>
                <Typography variant="h5">할인 혜택 적용하기(선택)</Typography>
                <Autocomplete
                  value={couponVal}
                  options={coupons}
                  getOptionLabel={(option) => option.couponName}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="쿠폰 선택"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              <Grid sx={{ paddingBottom: "20px" }}>
                <Typography variant="h4">총 결제금액</Typography>
                <Typography>₩ {paymentAmount}</Typography>
              </Grid>
              <Grid>
                <Button variant="contained" onClick={onClickHandler}>
                  상품 주문하기
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;

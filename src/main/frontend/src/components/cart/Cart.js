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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "@mui/material/Link";

const Cart = () => {
  // const [order, setOrder] = useState({
  //   orderNo: 1,
  //   userId: "gogo",
  //   orderStatus: "결제대기",
  //   paymentAmount: paymentAmount,
  //   cart: products,
  // });

  //장바구니의 제품들
  const products = [
    {
      prooductNo: 1,
      productCategory: "C13",
      productDeliveryInfo: "배송 가능",
      productName: "ANNAKAJSA 안나카이사",
      productPrice: 5000,
    },
    {
      prooductNo: 2,
      productCategory: "C01",
      productDeliveryInfo: "배송 가능",
      productName: "MALM 말름 오토만침대",
      productPrice: 10000,
    },
    {
      prooductNo: 3,
      productCategory: "C02",
      productDeliveryInfo: "배송 가능",
      productName: "멋있는 전등",
      productPrice: 3000,
    },
  ];

  //주문금액
  const [orderAmount, setOrderAmount] = useState(0);

  //결제금액
  const [paymentAmount, setPaymentAmount] = useState(0);

  //쿠폰 선택
  const [coupon, setCoupon] = useState("");
  const handleChange = (event) => {
    setCoupon(event.target.value);
  };

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
              coupon={coupon}
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
              <Grid sx={{ paddingBottom: "30px" }}>
                <Typography variant="h5">할인 혜택 적용하기(선택)</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    쿠폰 선택
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={coupon}
                    onChange={handleChange}
                    autoWidth
                    label="Coupon"
                  >
                    <MenuItem value="">
                      <em>쿠폰 선택 없음</em>
                    </MenuItem>
                    <MenuItem value={"1"}>첫 구매 회원 10% 할인</MenuItem>
                    <MenuItem value={"2"}>3,000원 할인</MenuItem>
                    <MenuItem value={"3"}>5,000원 할인</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{ paddingBottom: "20px" }}>
                <Typography variant="h4">총 결제금액</Typography>
                <Typography>₩ {paymentAmount}</Typography>
              </Grid>
              <Grid>
                {/* <Button variant="contained" onClick={onClickHandler}>
                  상품 주문하기
                </Button> */}

                <Link
                  to={{
                    pathname: "/order",
                    state: {
                      orderNo: 1,
                      userId: "gogo",
                      paymentAmount: paymentAmount,
                      cart: products,
                    },
                  }}
                >
                  <Button variant="contained">상품 주문하기</Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;

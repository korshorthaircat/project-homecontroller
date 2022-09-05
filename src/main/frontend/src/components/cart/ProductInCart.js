import React, { useReducer, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useScrollTrigger } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ProductInCart = ({
  cart,
  orderAmount,
  getOrderAmount,
  paymentAmount,
  getPaymentAmount,
  coupon,
}) => {
  //제품 수량관리를 위해 useReducer 사용
  const [number, dispatch] = useReducer(reducer, parseInt(cart.productCount));

  //수량 변경 버튼 클릭시 수량과 주문금액에 영향
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        getOrderAmount(
          orderAmount + parseInt(cart.productOption.product.productPrice)
        );
        return state + 1;
      case "DECREMENT":
        if (state > 1) {
          getOrderAmount(
            orderAmount - parseInt(cart.productOption.product.productPrice)
          );
          return state - 1;
        } else {
          return state;
        }
      default:
        return state;
    }
  }

  //수량 증가
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  //수량 감소
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  //쿠폰 선택에 따른 결제금액 재계산
  useEffect(() => {
    getPaymentAmount(orderAmount);
    if (coupon == "1") {
      getPaymentAmount(orderAmount * 0.9);
    } else if (coupon == "2") {
      getPaymentAmount(orderAmount - 3000);
    } else if (coupon == "3") {
      getPaymentAmount(orderAmount - 5000);
    }
  }, [orderAmount, coupon]);

  //제품 이미지
  const ProductImg = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Paper
      sx={{
        p: 2,
        alignItems: "left",
        marginLeft: 5,
        marginBottom: 5,
        //maxWidth: 800,
        width: 700,

        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2} sx={{ paddingBottom: "40px" }}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <ProductImg alt="complex" src="images/light1.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {cart.productOption.product.productName}
              </Typography>
              <Typography>
                옵션: {cart.productOption.common.commonCodeName},{" "}
                {cart.productOption.product.productSize}
              </Typography>

              <Typography>
                수량:
                <RemoveCircleOutlineIcon onClick={onDecrease} />
                {number}
                <AddCircleOutlineIcon onClick={onIncrease} />
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                삭제하기
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ₩ {cart.productOption.product.productPrice}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductInCart;

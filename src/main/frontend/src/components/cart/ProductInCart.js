import React, { useReducer, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "../../css/cart.css";

const ProductInCart = ({
  cart,
  cartImage,
  orderAmount,
  getOrderAmount,
  paymentAmount,
  getPaymentAmount,
  coupon,
  deleteCart,
  updateCart,
}) => {
  //제품 수량관리를 위해 useReducer 사용
  const [number, dispatch] = useReducer(reducer, parseInt(cart.productCount));

  //수량 변경 버튼 클릭시 수량과 주문금액에 영향
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        updateCart(
          cart.productOption.product.productNo,
          cart.productOption.common.commonCode,
          state + 1
        );
        return state + 1;
      case "DECREMENT":
        if (state > 1) {
          updateCart(
            cart.productOption.product.productNo,
            cart.productOption.common.commonCode,
            state - 1
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
    <Paper className="productInCart" sx={{ boxShadow: "none" }}>
      <Grid container spacing={2} sx={{ padding: "10px" }}>
        <Grid item sx={{ width: "23%" }}>
          <ButtonBase className="productInCartImg">
            <ProductImg
              alt="complex"
              src={`http://localhost:8080/upload/${cartImage.productImageName}`}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid id="cartContent" item xs>
              <div>
                <div className="cartNamePriceColumn">
                  <Typography
                    id="productNameInCart"
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                  >
                    {cart.productOption.product.productName}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    component="div"
                    id="productPriceInCart"
                  >
                    ₩{" "}
                    {(cart.productOption.product.productPrice + "").replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </Typography>
                </div>
              </div>
              <Typography id="productOptionInCart">
                {cart.productOption.common.commonCodeName},{" "}
                {cart.productOption.product.productSize}
              </Typography>

              <Typography id="productNum">
                <div className="NumDecreaseIncrease">
                  <div style={{ fontSize: "15px" }}>수량</div>
                  <img
                    className="NumDecrease"
                    src="../images/ArrowDown.png"
                    onClick={onDecrease}
                  />
                  {number}
                  <img
                    className="NumIncrease"
                    src="../images/ArrowUp.png"
                    onClick={onIncrease}
                  />
                </div>
                <button
                  className="deleteProductInCart"
                  onClick={() =>
                    deleteCart(
                      cart.productOption.product.productNo,
                      cart.productOption.common.commonCode
                    )
                  }
                >
                  <Typography>삭제</Typography>
                </button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
      <hr />
    </Paper>
    //수정
  );
};

export default ProductInCart;

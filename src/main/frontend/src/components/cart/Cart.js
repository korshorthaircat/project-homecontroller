import { Typography } from "@mui/material";
import React, { useEffect, useCallback, useState } from "react";
import ProductInCart from "./ProductInCart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../../css/cart.css";

//gg
const Cart = () => {
  //db에서 받아온 장바구니 데이터를 담을 state
  const [cartList, setCartList] = useState([]);
  const [cartImageList, setCartImageList] = useState([]);

  let url = "http://localhost:8080/api/cart";

  //db로부터 장바구니의 데이터 받아오기
  const getCartList = () => {
    // //제품 정보(텍스트) 받아오기
    // axios({
    //   method: "post",
    //   url: url + "/getCartList",
    //   data: { userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId },
    // }).then((response) => {
    //   console.log(response.data.data);
    //   setCartList(response.data.data);

    //   sessionStorage.setItem("cartCount", response.data.data.length);
    // });
    // //제품 이미지 받아오기
    // axios({
    //   method: "post",
    //   url: url + "/getCartImageList",
    //   data: { userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId },
    // })
    //   .then((response) => {
    //     console.log(response);
    //     setCartImageList(response.data.cartImageList);
    //   })
    //   .catch((e) => {
    //     e.window.onload = function () {
    //       if (!window.location.hash) {
    //         window.location = window.location + "#loaded";
    //         window.location.reload();
    //       }
    //     };
    //   });
    axios({
      method: "post",
      url: url + "/getCartMapList",
      data: { userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId },
    }).then((response) => {
      console.log(response.data.cartList);
      console.log(response.data.cartImageList);
      setCartList(response.data.cartList);
      setCartImageList(response.data.cartImageList);

      sessionStorage.setItem("cartCount", response.data.cartList.length);
    });
  };

  //장바구니 아이템 삭제 후 db로부터 장바구니의 데이터 받아오기
  const deleteCart = useCallback((productNo, commonCode) => {
    axios({
      method: "delete",
      url: url + "/deleteCart",
      data: {
        userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId,
        productNo: productNo,
        commonCode: commonCode,
      },
    }).then((response) => {
      //console.log(response.data.data);
      setCartList(response.data.data);
      window.location.reload("/cart");
    });
  }, []);

  //장바구니 아이템 수정(수량 수정) 후 db로부터 장바구니의 데이터 받아오기
  const updateCart = useCallback((productNo, commonCode, productCount) => {
    axios({
      method: "put",
      url: url + "/updateCart",
      data: {
        userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId,
        productNo: productNo,
        commonCode: commonCode,
        productCount: productCount,
      },
    }).then((response) => {
      //console.log(response.data.data);
      setCartList(response.data.data);
    });
  }, []);

  useEffect(() => {
    getCartList();
  }, []);

  //초기 주문금액 지정
  useEffect(() => {
    const result = cartList.reduce((sum, cart) => {
      return (
        sum +
        cart.productOption.product.productPrice * parseInt(cart.productCount)
      );
    }, 0);
    setOrderAmount(result);
  }, [cartList]);

  //주문금액
  const [orderAmount, setOrderAmount] = useState(0);

  //주문금액 - 할인금액
  const [paymentAmount, setPaymentAmount] = useState(0);

  //쿠폰 선택
  const [coupon, setCoupon] = useState("");
  const handleChange = (event) => {
    setCoupon(event.target.value);
  };

  // //초기 주문금액
  // let initialAmount = 0;

  //주문금액 가져오기
  const getOrderAmount = (amount) => {
    setOrderAmount(amount);
  };

  //결제금액 가져오기
  const getPaymentAmount = (payment) => {
    setPaymentAmount(payment);
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        marginTop={"20px"}
      >
        <Grid className="productsInCart">
          <Typography id="cartTitle">장바구니</Typography>

          {/* {cartList.map((cart, index) => (
            <ProductInCart
              cartImage={cartImageList[index]}
              cart={cart}
              orderAmount={orderAmount}
              getOrderAmount={getOrderAmount}
              paymentAmount={paymentAmount}
              getPaymentAmount={getPaymentAmount}
              coupon={coupon}
              deleteCart={deleteCart}
              updateCart={updateCart}
            ></ProductInCart>
          ))} */}

          {cartList.length === 0 ? (
            <>
              <Typography>장바구니에 표시할 제품이 없습니다.</Typography>
            </>
          ) : (
            <>
              {cartList.map((cart, index) => (
                <ProductInCart
                  cartImage={cartImageList[index]}
                  cart={cart}
                  orderAmount={orderAmount}
                  getOrderAmount={getOrderAmount}
                  paymentAmount={paymentAmount}
                  getPaymentAmount={getPaymentAmount}
                  coupon={coupon}
                  deleteCart={deleteCart}
                  updateCart={updateCart}
                ></ProductInCart>
              ))}
            </>
          )}
        </Grid>

        <Grid id="cartInfoPaper">
          <Paper
            className="cartInfo"
            sx={{
              p: 2,
              marginLeft: 20,
              width: 400,
              height: 400,
              backgroundColor: "none",
              boxShadow: "none",
            }}
          >
            <Grid>
              <Grid sx={{ paddingBottom: "30px" }}>
                <Typography sx={{ fontWeight: "800" }}>주문 내역</Typography>
                <hr style={{ color: "#b5c95a", border: "solid 1px" }} />
                <div className="cartNamePriceColumn">
                  <span className="productAllPrice">총 주문금액</span>
                  <span>
                    <Typography id="productAllPriceInput">
                      ₩{" "}
                      {(orderAmount + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                  </span>
                </div>
              </Grid>
              <Grid sx={{ paddingBottom: "30px" }}>
                <div>
                  <img
                    className="saleIcon"
                    src="../images/saleIcon.png"
                    style={{ float: "left", marginLeft: "10px" }}
                  ></img>
                  <Typography id="saleTitle">할인 혜택 적용하기</Typography>
                </div>

                <FormControl
                  className="couponSelect"
                  sx={{ m: 1, marginTop: "20px" }}
                >
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
                    <MenuItem
                      sx={{ width: "365px" }}
                      className="couponSelect"
                      value=""
                    >
                      <em>쿠폰 선택 없음</em>
                    </MenuItem>

                    <MenuItem value={"1"}>첫 구매 회원 10% 할인</MenuItem>
                    <MenuItem value={"2"}>3,000원 할인</MenuItem>
                    <MenuItem value={"3"}>5,000원 할인</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{ paddingBottom: "20px" }}>
                <div className="cartNamePriceColumn">
                  <Typography id="orderCal">할인금액</Typography>
                  <Typography id="resultOrderPay">
                    ₩{" "}
                    {(orderAmount - paymentAmount + "").replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </Typography>
                </div>
                <div className="cartNamePriceColumn">
                  <Typography id="orderCal" sx={{ fontSize: "30px" }}>
                    총 결제금액
                  </Typography>
                  <Typography id="resultOrderPay">
                    ₩{" "}
                    {(paymentAmount + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                </div>
              </Grid>
              <Grid>
                <Link
                  to={"/order"}
                  state={{
                    obj: {
                      orderNo: 1,
                      userId: JSON.parse(sessionStorage.getItem("USER_INFO"))
                        .userId,
                      orderAmount: orderAmount,
                      paymentAmount: paymentAmount,
                      cart: cartList,
                    },
                  }}
                  //pull용
                >
                  <button className="orderButton">
                    주문하기
                    <img
                      src="../images/buttonArrow.png"
                      style={{ width: "14%" }}
                    ></img>
                  </button>
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

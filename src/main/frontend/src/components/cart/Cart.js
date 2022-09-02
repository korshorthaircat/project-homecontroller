import { Typography } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import ProductInCart from "./ProductInCart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  //db에서 받아온 장바구니 데이터를 담을 state
  const [cartList, setCartList] = React.useState([]);

  //db로부터 장바구니의 데이터 받아오기
  let listUrl = "http://localhost:8080/api/cart/getCartList";

  const list = () => {
    // axios
    //   .get(listUrl, { userId: "gogo" })
    //   .then((response) => {
    //     setCartList(response.data);
    //     console.log(cartList);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    axios({
      method: "get",
      url: listUrl,
      data: { userId: "gogo" },
    }).then((response) => {
      console.log(response);
      setCartList(response.data);
    });
  };

  React.useEffect(() => {
    list();
  }, []);

  //장바구니의 제품들
  const products = [
    {
      prooductNo: 1,
      productCategory: "C13",
      productName: "ANNAKAJSA 안나카이사",
      productDetail: "반암막 커튼 한쌍, 베이지",
      productPrice: 5000,
      productDeliveryInfo: "배송 가능",
    },
    {
      prooductNo: 2,
      productCategory: "C01",
      productName: "MALM 말름",
      productDetail: "오토만침대, 화이트, 150x200 cm",
      productPrice: 10000,
      productDeliveryInfo: "배송 가능",
    },
    {
      prooductNo: 3,
      productCategory: "C02",
      productName: "LAMPAN 람판",
      productDetail: "탁상스탠드, 화이트, 29 cm",
      productPrice: 7000,
      productDeliveryInfo: "배송 가능",
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

  //초기 주문금액
  let initialAmount = 0;
  const getInitialAmount = (amount) => {
    initialAmount += amount;
  };

  useEffect(() => {
    console.log(initialAmount);
    setOrderAmount(initialAmount);
  }, [initialAmount]);

  //주문금액 가져오기
  const getOrderAmount = (amount) => {
    setOrderAmount(amount);
  };

  //결제금액 가져오기
  const getPaymentAmount = (payment) => {
    setPaymentAmount(payment);
  };

  //주문하기 버튼 클릭시 실행될 함수
  const onClickHandler = () => {
    window.location.href = "/order";
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
          <Typography variant="h4">장바구니</Typography>
          {products.map((product) => (
            <ProductInCart
              product={product}
              orderAmount={orderAmount}
              getOrderAmount={getOrderAmount}
              paymentAmount={paymentAmount}
              getPaymentAmount={getPaymentAmount}
              coupon={coupon}
              getInitialAmount={getInitialAmount}
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
                <Link
                  to={"/order"}
                  state={{
                    obj: {
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

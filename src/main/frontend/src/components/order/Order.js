import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDaumPostcodePopup } from "react-daum-postcode";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import OrderReview from "./OrderReview";
import Paper from "@mui/material/Paper";
import axios from "axios";

const Order = () => {
  const [payInfo, setPayInfo] = useState({}); //결제정보 - KakaoPayReady.js에 전달해야 할 스테이트
  const [orderName, setOrderName] = useState("");
  const [cartInfo, setCartInfo] = useState([]);

  //Cart.js에서 Link를 통해 보낸 state를 이용
  const location = useLocation();
  React.useEffect(() => {
    console.log(location.state.obj);
    setPayInfo(location.state.obj);
    setCartInfo(location.state.obj.cart);
  }, []);

  //우편번호 및 주소 조회(다음 우편번호 검색 서비스 사용)
  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  let [zipCode, setZipCode] = useState("");
  let [fullAddress, setFullAddress] = useState("");

  const handleComplete = (data) => {
    fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setZipCode(data.zonecode);
      setFullAddress(fullAddress);
    }
  };

  //우편번호 검색 버튼 클릭시
  const handleZipBtnClick = () => {
    open({ onComplete: handleComplete });
  }; //onComplete - 우편번호 검색이 끝났을 때 사용자가 선택한 정보를 받아올 콜백함수. 주소 데이터의 구성은 Daum 가이드를 참고.

  //db에서 받아온 장바구니 데이터를 담을 state
  const [cartList, setCartList] = useState([]);

  let url = "http://localhost:8080/api/cart";

  //db로부터 장바구니의 데이터 받아오기
  const getCartList = () => {
    axios({
      method: "post",
      url: url + "/getCartList",
      data: { userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId },
    }).then((response) => {
      console.log(response.data.data);
      setCartList(response.data.data);
    });
  };

  //결제하기 버튼 클릭시 db에 주문 데이터 저장하기
  const createOrder = () => {
    axios({
      method: "post",
      url: url + "/createOrder",
      data: {
        userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId,
        orderAmount: payInfo.orderAmount,
        orderDiscount:
          parseInt(payInfo.orderAmount) - parseInt(payInfo.paymentAmount),
        orderFee: 5000,
        paymentAmount: payInfo.paymentAmount,
        paymentMean: "카카오페이",
        dlvyInfo: {},
        orderItem: [],
      },
    }).then((response) => {
      // console.log(response.data.data);
      // setCartList(response.data.data);
    });
  };

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        marginTop={"20px"}
      >
        <Grid>
          <Grid className="delivery">
            <Typography variant="h4">
              <LooksOneOutlinedIcon />
              배송 정보 입력
            </Typography>

            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="flex-start"
              width={"600px"}
            >
              <Grid item xs={8} sm={6}>
                <TextField
                  required
                  id="deliveryName"
                  name="deliveryName"
                  label="수령인 이름"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="deliveryTel"
                  name="deliveryTel"
                  label="수령인 연락처"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="deliveryZipcode"
                  name="deliveryZipcode"
                  label="우편번호"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                  value={zipCode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  id="userZipSearch"
                  variant="contained"
                  color="success"
                  style={{ height: "56px" }}
                  onClick={handleZipBtnClick}
                >
                  우편번호 검색
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="deliveryAddress"
                  name="deliveryAddress"
                  label="주소(시, 구, 동)"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                  value={fullAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="deliveryDetailAddress"
                  name="deliveryDetailAddress"
                  label="상세 주소"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="deliveryMessage"
                  name="deliveryMessage"
                  label="배송 메세지"
                  fullWidth
                  helperText="예) 경비실에 맡겨 주세요."
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="success" name="saveAddress" value="yes" />
                  }
                  label="이 주소 정보를 결제를 위해 사용합니다. "
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid className="paymentMethod" marginTop={"50px"}>
            <Typography variant="h4">
              <LooksTwoOutlinedIcon />
              결제 수단 선택
            </Typography>
            <Grid container spacing={3} marginTop={"5px"} marginLeft={"5px"}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="신용카드"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="계좌이체"
                  />
                  <FormControlLabel
                    value="무통장입금"
                    control={<Radio />}
                    label="무통장입금"
                  />
                  <FormControlLabel
                    value="카카오페이"
                    control={<Radio />}
                    label="카카오페이"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="네이버페이"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid className="orderReview" marginTop={"50px"}>
            <Typography variant="h4">
              <Looks3OutlinedIcon />
              주문 확인
            </Typography>
            <Typography>주문자: {payInfo.userId}</Typography>
            <Typography>주문번호: {payInfo.orderNo}</Typography>
            <Typography>주문 금액(+): {payInfo.orderAmount}</Typography>
            <Typography>
              할인 금액(-):{" "}
              {parseInt(payInfo.orderAmount) - parseInt(payInfo.paymentAmount)}
            </Typography>
          </Grid>

          {cartList.map((cart) => (
            <OrderReview cart={cart}></OrderReview>
          ))}
        </Grid>

        <Grid className="orderConfirm">
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
            <Typography>주문 금액(+): ₩ {payInfo.orderAmount}</Typography>
            <Typography>
              할인 금액(-): ₩{" "}
              {parseInt(payInfo.orderAmount) - parseInt(payInfo.paymentAmount)}
            </Typography>
            <Typography>배송료(+): ₩ 5000</Typography>
            <Typography>
              총 결제 금액(주문금액 - 할인금액 + 배송료): ₩{" "}
              {parseInt(payInfo.paymentAmount + 5000)}
            </Typography>
            <Grid>
              <Link
                to={"/kakaopayReady"}
                state={{
                  obj: {
                    orderNo: payInfo.orderNo,
                    userId: payInfo.userId,
                    itemName: orderName,
                    paymentAmount: parseInt(payInfo.paymentAmount + 5000),
                  },
                }}
              >
                <Button variant="contained" color="success" fullWidth>
                  결제하기
                </Button>
              </Link>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;

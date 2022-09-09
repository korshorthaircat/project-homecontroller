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
  const [orderName, setOrderName] = useState(""); //"조명 외 2개"식으로 만들어서 KakaoPayReady.js에 전달하기

  //[1]배송정보 -> db에 저장하기
  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryTel, setDeliveryTel] = useState("");
  const [deliveryZipcode, setDeliveryZipcode] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryDetailAddress, setDeliveryDetailAddress] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  //[2]결제정보 -> KakaoPayReady.js에 전달하기 & db에 저장하기
  const [payInfo, setPayInfo] = useState({});

  //[3]주문아이템 정보 -> db에 저장하기
  const [orderItemInfo, setOrderItemInfo] = useState([]);

  //Cart.js에서 Link를 통해 보낸 state를 이용
  const location = useLocation();
  useEffect(() => {
    // console.log(location.state.obj);
    // console.log(location.state.obj.cart);
    setPayInfo(location.state.obj);
    setOrderItemInfo(location.state.obj.cart); //배열
  }, []);

  useEffect(() => {
    if (orderItemInfo.length !== 0) {
      setOrderName(
        `${orderItemInfo[0].productOption.product.productName} 외 ${
          orderItemInfo.length - 1
        }개`
      );
      console.log(orderItemInfo[0].productOption.product.productName);
    }
  }, [orderItemInfo]);

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

  //db로부터 장바구니의 데이터 받아오기
  const getCartList = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/cart/getCartList",
      data: { userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId },
    }).then((response) => {
      //console.log(response.data.data);
      setCartList(response.data.data);
    });
  };

  //결제하기 버튼 클릭시 db에 주문 데이터 저장하기
  const createOrder = () => {
    const productItems = [];
    for (let i = 0; i < orderItemInfo.length; i++) {
      const productItem = {
        productNo: orderItemInfo[i].productOption.product.productNo,
        productAmount: orderItemInfo[i].productOption.product.productPrice,
        productCount: orderItemInfo[i].productCount,
        commonCode: orderItemInfo[i].productOption.common.commonCode,
      };

      productItems.push(productItem);
    }
    axios({
      method: "post",
      url: "http://localhost:8080/api/order/createOrder",
      data: {
        userId: payInfo.userId,
        orderNo: payInfo.orderNo,

        //배송 정보
        deliveryName: deliveryName,
        deliveryTel: deliveryTel,
        deliveryZipcode: deliveryZipcode,
        deliveryAddress: deliveryAddress,
        deliveryDetailAddress: deliveryDetailAddress,
        deliveryMessage: deliveryMessage,

        //결제 정보
        orderAmount: payInfo.orderAmount, //주문금액
        orderDiscount:
          parseInt(payInfo.orderAmount) - parseInt(payInfo.paymentAmount), //할인금액
        orderFee: 5000, //배송료
        paymentAmount: payInfo.paymentAmount, //결제금액
        paymentWay: "카카오페이", //결제방식
        paymentName: "gogo", //결제자 이름

        //주문아이템 정보
        //productNo, commonCode, productCount, productPrice
        orderItemInfo: productItems,
      },
    }).then((response) => {
      // console.log(response.data.data);
      // setCartList(response.data.data);
    });
  };

  useEffect(() => {
    getCartList();
  }, []);

  const onDlvyNameHandler = (event) => {
    setDeliveryName(event.currentTarget.value);
  };
  const onDlvyTelHandler = (event) => {
    setDeliveryTel(event.currentTarget.value);
  };
  const onDlvyZipcodeHandler = (event) => {
    setDeliveryZipcode(event.currentTarget.value);
  };
  const onDlvyAddressHandler = (event) => {
    setDeliveryAddress(event.currentTarget.value);
  };
  const onDlvyDetailAddressHandler = (event) => {
    setDeliveryDetailAddress(event.currentTarget.value);
  };
  const onDlvyMessageHandler = (event) => {
    setDeliveryMessage(event.currentTarget.value);
  };

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
                  // autoComplete="given-name"
                  variant="standard"
                  onChange={onDlvyNameHandler}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="deliveryTel"
                  name="deliveryTel"
                  label="수령인 연락처"
                  fullWidth
                  // autoComplete="shipping address-line1"
                  variant="standard"
                  onChange={onDlvyTelHandler}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="deliveryZipcode"
                  name="deliveryZipcode"
                  label="우편번호"
                  fullWidth
                  // autoComplete="shipping postal-code"
                  variant="standard"
                  value={zipCode}
                  onChange={onDlvyZipcodeHandler}
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
                  // autoComplete="shipping address-line1"
                  variant="standard"
                  value={fullAddress}
                  onChange={onDlvyAddressHandler}
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
                  onChange={onDlvyDetailAddressHandler}
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
                  onChange={onDlvyMessageHandler}
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
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={createOrder}
                >
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

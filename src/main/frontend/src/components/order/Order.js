import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
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
import "../../css/cart.css";

import {
  CardActionArea,
  CardContent,
  CardMedia,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Card, Row } from "react-bootstrap";

const Order = () => {
  const [orderName, setOrderName] = useState(""); //"조명 외 2개"식으로 만들어서 KakaoPayReady.js에 전달하기

  //[1]배송정보 -> db에 저장하기
  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryTel, setDeliveryTel] = useState("");
  const [deliveryDetailAddress, setDeliveryDetailAddress] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");
  let [zipCode, setZipCode] = useState("");
  let [fullAddress, setFullAddress] = useState("");

  //[2]결제정보 -> KakaoPayReady.js에 전달하기 & db에 저장하기
  const [payInfo, setPayInfo] = useState({});
  const [paymentWay, setPaymentWay] = useState(""); //입금방식
  const [paymentName, setPaymentName] = useState(""); //결제자 성명 or 입금자 성명

  //[3]주문아이템 정보 -> db에 저장하기
  const [orderItemInfo, setOrderItemInfo] = useState([]);

  //Cart.js에서 Link를 통해 보낸 state를 이용
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    setPaymentName(payInfo.userId);
  }, [payInfo]);

  //우편번호 및 주소 조회(다음 우편번호 검색 서비스 사용)
  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

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
  const [cartImageList, setCartImageList] = useState([]);
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
    //제품 이미지 받아오기
    axios({
      method: "post",
      url: "http://localhost:8080/api/cart/getCartMapList",
      data: { userId: JSON.parse(sessionStorage.getItem("USER_INFO")).userId },
    }).then((response) => {
      console.log(response.data.data);
      setCartImageList(response.data.cartImageList);
    });
    // .catch((e)=>{
    //   e.window.onload = function() {
    //     if(!window.location.hash) {
    //       window.location = window.location + '#loaded';
    //       window.location.reload();
    // ㅎㅎ
    //     }
    //   }
    // });
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
        deliveryZipcode: zipCode,
        deliveryAddress: fullAddress,
        deliveryDetailAddress: deliveryDetailAddress,
        deliveryMessage: deliveryMessage,

        //결제 정보
        orderAmount: payInfo.orderAmount, //주문금액
        orderDiscount:
          parseInt(payInfo.orderAmount) - parseInt(payInfo.paymentAmount), //할인금액
        orderFee: 5000, //배송료
        paymentAmount: parseInt(payInfo.paymentAmount + 5000), //결제금액
        paymentWay: paymentWay, //결제방식
        paymentName: paymentName, //입금자명

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
  const onDlvyDetailAddressHandler = (event) => {
    setDeliveryDetailAddress(event.currentTarget.value);
  };
  const onDlvyMessageHandler = (event) => {
    setDeliveryMessage(event.currentTarget.value);
  };
  const onPmtWayHandler = (event) => {
    setPaymentWay(event.currentTarget.value);
  };
  const onPmtNameHandler = (event) => {
    console.log(paymentName);
    setPaymentName(event.currentTarget.value);
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
        <Grid sx={{ width: "36%", margin: "0 8%" }}>
          <Grid className="delivery">
            <div id="deliveryInfo">
              <img
                src="../images/one (1).png"
                style={{
                  width: "80px",
                  height: "auto",
                  margin: "20px 20px 30px -20px",
                }}
              />
              배송 정보 입력
            </div>

            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="flex-start"
              width={"100%"}
              sx={{ margin: "0 5%" }}
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
                  // onChange={onDlvyZipcodeHandler}
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
                  // onChange={onDlvyAddressHandler}
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

          <Grid className="delivery">
            <Typography id="deliveryInfo">
              <img
                src="../images/two (1).png"
                style={{
                  width: "80px",
                  height: "auto",
                  margin: "20px 20px 30px -20px",
                }}
              />
              결제 수단 선택
            </Typography>
            <Grid
              container
              spacing={3}
              marginTop={"5px"}
              width={"100%"}
              sx={{ margin: "1% 15%" }}
            >
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={onPmtWayHandler}
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
                    src="../images/kakaopayLogo.png"
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

            {paymentWay == "무통장입금" ? (
              <Grid
                className="bankTransfer"
                sx={{ width: "100%", margin: "5% 8%" }}
              >
                <TextField
                  name="paymentName"
                  id="paymentName"
                  label="입금자 성명"
                  variant="standard"
                  value={paymentName}
                  onChange={onPmtNameHandler}
                />
                <Grid id="bankTransferInfo">
                  <div>예금주 확인 : (주)홈컨트롤러 </div>
                  <div>입금 계좌 : 비트은행 12345678901234567890 </div>
                  <Grid
                    className="bankTransferWarning"
                    marginTop={"20px"}
                    color={"gray"}
                  >
                    <hr style={{ marginTop: "80px" }} />
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <img
                        src="../images/notice.png"
                        style={{
                          height: "40px",
                          float: "left",
                          display: "flex",
                          margin: "5px 20px 0px 0px",
                        }}
                      ></img>
                      <div>
                        <Typography>
                          송금정보, 결제금액(1원 단위까지)이 정확히 일치할 경우
                          1시간내로 확인됩니다.
                        </Typography>
                        <Typography>
                          '입금확인완료'시점기준, 주문처리 일정이 최종 확정되며,
                          재고상황에 따라 출고지연 또는 취소가능성이 있습니다.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </Grid>

        <Grid id="cartInfoPaper">
          <Paper
            className="cartInfo"
            sx={{
              p: 2,
              width: 500,
              height: 750,
              backgroundColor: "none",
              boxShadow: "none",
            }}
          >
            <Grid>
              <Grid sx={{ paddingBottom: "30px" }}>
                <Typography sx={{ fontWeight: "800", fontSize: "30px" }}>
                  주문 정보
                </Typography>
                <div style={{ width: "100%", display: "flex" }}>
                  {cartList.map((cart, index) => (
                    <OrderReview
                      cart={cart}
                      cartImage={cartImageList[index]}
                    ></OrderReview>
                  ))}
                </div>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "30px",
                    marginTop: "50px",
                  }}
                >
                  주문 내역
                </Typography>
                <div>
                  <hr />
                  <div className="cartNamePriceColumn">
                    <span className="productAllPrice">주문금액</span>
                    <span>
                      <Typography id="productAllPriceInput">
                        ₩{" "}
                        {(payInfo.orderAmount + "").replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        )}
                      </Typography>
                    </span>
                  </div>
                </div>
              </Grid>

              <Grid sx={{ paddingBottom: "20px" }}>
                <div className="cartNamePriceColumn">
                  <Typography id="orderCal" sx={{ marginTop: "10%" }}>
                    할인금액
                  </Typography>
                  <Typography id="resultSalePrice" sx={{ marginTop: "10%" }}>
                    - ₩{" "}
                    {(
                      parseInt(payInfo.orderAmount) -
                      parseInt(payInfo.paymentAmount) +
                      ""
                    ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                </div>

                <div className="cartNamePriceColumn">
                  <Typography id="orderCal">배송비</Typography>
                  <Typography id="resultSalePrice">
                    + ₩ {(5000 + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Typography>
                </div>

                <hr />
                <div className="cartNamePriceColumn">
                  <Typography id="orderCal" sx={{ fontSize: "30px" }}>
                    총 결제금액
                  </Typography>
                  <Typography id="resultOrderPay">
                    ₩{" "}
                    {(payInfo.paymentAmount + 5000 + "").replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </Typography>
                </div>
              </Grid>
              <Grid>
                {paymentWay == "카카오페이" ? (
                  <>
                    <Link
                      className="linkOrder"
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
                      <button className="orderButton" onClick={createOrder}>
                        카카오페이로 결제하기
                        <img
                          src="../images/buttonArrow.png"
                          style={{ width: "14%" }}
                        ></img>
                      </button>
                    </Link>
                  </>
                ) : (
                  <Link
                    className="linkOrder"
                    to={"/orderComplete"}
                    state={{
                      obj: {
                        orderNo: payInfo.orderNo,
                        userId: payInfo.userId,
                        itemName: orderName,
                        paymentAmount: parseInt(payInfo.paymentAmount + 5000),
                      },
                    }}
                  >
                    <button className="orderButton" onClick={createOrder}>
                      결제하기
                      <img
                        src="../images/buttonArrow.png"
                        style={{ width: "14%" }}
                      ></img>
                    </button>
                  </Link>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;

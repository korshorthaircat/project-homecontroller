import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "../../css/orderComplete.css";
import axios from "axios";

const OrderComplete = () => {
  const [orderNo, setOrderNo] = useState(""); //db에서 주문번호 조회
  const [orderDetail, setOrderDetail] = useState({});
  const [orderItemList, setOrderItemList] = useState([]);

  const moveHome = () => {
    window.location.href = "/";
  };

  const getRecentOrderNo = () => {
    axios({
      url: "http://localhost:8080/api/order/getRecentOrderNo",
      method: "post",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
    })
      .then((response) => {
        console.log(response);
        setOrderNo(response.data.recentOrderNo);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRecentOrderNo();
  }, []);

  useEffect(() => {
    if (orderNo !== 0) {
      console.log(orderNo);
      axios({
        url: "http://localhost:8080/api/order/viewOrder",
        method: "get",
        params: { orderNo: orderNo },
      })
        .then((response) => {
          console.log(response);
          setOrderDetail(response.data.orderDetail);
          setOrderItemList(response.data.orderItemList);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [orderNo]);

  return (
    <div className="completeMain">
      <img className="homeLogo" src="../../images/homeControllerLogo.png"></img>
      <div className="orderText1">
        주문이 정상적으로 접수되었습니다.
        <p />
        <div className="orderText2">
          빠른 시일 내에 받아보실 수 있도록 최선을 다하겠습니다. 고객님의
          주문정보를 다시 한번 확인해주세요.
        </div>
      </div>
      <div className="borderTopBottom">
        <table class="tg" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td class="firstColumn">주문일자</td>
              <td class="secondColumn">{orderDetail.orderDate}</td>
            </tr>
            <tr>
              <td class="firstColumn">주문번호</td>
              <td class="secondColumn">{orderNo}</td>
            </tr>
            <tr>
              <td class="firstColumn">주문금액</td>
              <td class="secondColumn">
                {(orderDetail.orderAmount + "").replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
              </td>
            </tr>
            <tr>
              <td class="firstColumn">배송비</td>
              <td class="secondColumn">
                {(orderDetail.orderFee + "").replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
              </td>
            </tr>
            <tr>
              <td class="firstColumn">총 결제금액</td>
              <td class="secondColumn">
                {(orderDetail.paymentAmount + "").replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}
              </td>
            </tr>
            <tr>
              <td class="firstColumn">수령인</td>
              <td class="secondColumn">{orderDetail.deliveryName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" className="homeButton" onClick={moveHome}>
        홈
      </button>
    </div>
  );
};

export default OrderComplete;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "../../css/orderComplete.css";

const OrderComplete = () => {
  const [orderNo, setOrderNo] = useState("");
  //db에서 주문번호 조회

  const moveHome = () => {
    window.location.href = "/";
  };

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
              <td class="secondColumn">{orderNo}</td>
            </tr>
            <tr>
              <td class="firstColumn">주문번호</td>
              <td class="secondColumn">{orderNo}</td>
            </tr>
            <tr>
              <td class="firstColumn">상품금액</td>
              <td class="secondColumn">{orderNo}</td>
            </tr>
            <tr>
              <td class="firstColumn">배송비</td>
              <td class="secondColumn">{orderNo}</td>
            </tr>
            <tr>
              <td class="firstColumn">총 결제금액</td>
              <td class="secondColumn">{orderNo}</td>
            </tr>
            <tr>
              <td class="firstColumn">주문자</td>
              <td class="secondColumn">{orderNo}</td>
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

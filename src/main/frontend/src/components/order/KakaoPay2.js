import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const KakaoPay2 = () => {
  const [params, setParams] = useState({});

  // useState를 썼더니 SetParams가 실행되기도 전에
  // axios 요청이 비어있는 params로 들어가는 것 같음...

  // let params = {
  //   // 응답에서 가져올 값들
  //   next_redirect_pc_url: "",
  //   tid: "",
  //   // 요청에 넘겨줄 매개변수들
  //   params: {
  //     cid: "TC0ONETIME",
  //     partner_order_id: "partner_order_id",
  //     partner_user_id: "partner_user_id",
  //     item_name: "책상",
  //     quantity: 1,
  //     total_amount: 2200,
  //     vat_amount: 200,
  //     tax_free_amount: 0,
  //     approval_url: "http://localhost:3000/",
  //     fail_url: "http://localhost:3000/",
  //     cancel_url: "http://localhost:3000/",
  //   },
  // };

  useEffect(() => {
    setParams({
      // 응답에서 가져올 값들
      next_redirect_pc_url: "",
      tid: "",
      // 요청에 넘겨줄 매개변수들
      params: {
        cid: "TC0ONETIME",
        partner_order_id: "partner_order_id",
        partner_user_id: "partner_user_id",
        item_name: "책상",
        quantity: 1,
        total_amount: 2200,
        vat_amount: 200,
        tax_free_amount: 0,
        approval_url: "http://localhost:3000/",
        fail_url: "http://localhost:3000/",
        cancel_url: "http://localhost:3000/",
      },
    });
    console.log(params);

    axios({
      url: "https://kapi.kakao.com/v1/payment/ready",
      //url: "/v1/payment/ready", //프록시에 카카오 도메인을 설정했으므로 결제준비 url만 설정
      method: "post",
      headers: {
        Authorization: "KakaoAK ad3cffd957a8fbe95dfcde71f91574af", //카카오 developers에 등록한 admin키
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    }).then((response) => {
      console.log(response.data);

      // response에서 필요한 data만 뽑기
      // response의 data로 state 갱신하기
    });
  }, []);

  return (
    <div>
      <Typography>카카오페이 결제</Typography>
      {/* <Link href={params.next_redirect_pc_url}>
        주소: {params.next_redirect_pc_url}
      </Link> */}
    </div>
  );
};

export default KakaoPay2;

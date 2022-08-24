import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const KakaoPayReady = () => {
  const [params, setParams] = useState({});

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
      // //응답에서 필요한 data만 뽑는다.
      // const {
      //   data: { next_redirect_pc_url, tid },
      // } = response;

      // console.log(next_redirect_pc_url);
      // console.log(tid);
      // //응답 data로 state 갱신
      // this.setState({ next_redirect_pc_url, tid });
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

export default KakaoPayReady;

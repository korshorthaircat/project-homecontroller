import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

//요청에 보내줄 파람스를 부모 컴포넌트에서 보내주도록 수정하기
// const KakaoPay2 = ({ params }) => {
//   const [data, setData] = useState(params);
//   const [responseData, setResponseData] = useState(params);
//response데이타는 따로 스테이트 만들어서 관리하기
//next_redirect_pc_url: "", tid: "", 만 갖도록...

const KakaoPay2 = () => {
  const [data, setData] = useState({
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

  useEffect(() => {
    const queryStr = Object.keys(data)
      .map((key) => key + "=" + data[key])
      .join("&");

    axios({
      url: "https://kapi.kakao.com/v1/payment/ready",
      method: "post",
      headers: {
        Authorization: "KakaoAK e9b2a60cdcbf332af5df8ba23399b883",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: queryStr, //요청에 파라미터 보내줄 때 쿼리스트링으로 보내줘야 함
    })
      .then((response) => {
        console.log(response.data);

        // response에서 필요한 data만 뽑기
        // response의 data로 state 갱신하기
      })
      .catch((e) => {
        console.log(e);
      });
  }, [data]);

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

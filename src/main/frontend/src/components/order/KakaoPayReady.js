import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

//요청에 보내줄 파람스를 부모 컴포넌트에서 보내주도록 수정하기
// const KakaoPay2 = ({ params }) => {
//   const [data, setData] = useState(params);
//   const [responseData, setResponseData] = useState(params);
//response데이타는 따로 스테이트 만들어서 관리하기
//next_redirect_pc_url: "", tid: "", 만 갖도록...

const KakaoPayReady = () => {
  const [params, setParams] = useState({
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name: "책상",
    quantity: 1,
    total_amount: 10000,
    vat_amount: 1000,
    tax_free_amount: 0,
    approval_url: "http://localhost:3000/kakaopayResult/",
    fail_url: "http://localhost:3000/kakaopayResult",
    cancel_url: "http://localhost:3000/kakaopayResult",
  });

  const [responseData, setResponseData] = useState({
    // 응답에서 가져올 값들
    next_redirect_pc_url: "",
    tid: "",
  });

  const callKakaoPayReady = useCallback(() => {
    const queryStr = Object.keys(params)
      .map((key) => key + "=" + params[key])
      .join("&");

    console.log(queryStr);

    axios({
      url: "https://kapi.kakao.com/v1/payment/ready",
      method: "post",
      headers: {
        Authorization: "KakaoAK e9b2a60cdcbf332af5df8ba23399b883",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: queryStr, //요청에 파라미터 보내줄 때 쿼리스트링으로 보내줘야 함
    }).then((response) => {
      // response에서 필요한 data만 뽑기
      const next_redirect_pc_url = response.data.next_redirect_pc_url;
      const tid = response.data.tid;
      //세션 스토리지에 tid 저장하기(결제승인 api에 매개변수로 함께 줘야 함)
      sessionStorage.setItem("tid", tid);
      sessionStorage.setItem("params", JSON.stringify(params));

      // response의 data로 state 갱신하기
      setResponseData({
        next_redirect_pc_url: { next_redirect_pc_url },
        tid: { tid },
      });

      window.location.href = next_redirect_pc_url;
    });
    // .catch((e) => {
    //   console.log(e);
    // });
  }, [params]);

  return (
    <div>
      <Button onClick={callKakaoPayReady}>카카오페이로 결제하기</Button>
    </div>
  );
};

export default KakaoPayReady;

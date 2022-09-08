import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const KakaoPayResult = () => {
  const { search } = useLocation(); //location 안에 있는 토큰 정보를 빼내서 사용해야 한다.
  const [params, setParams] = useState({});
  const [rcParams, setRcParams] = useState(
    JSON.parse(sessionStorage.getItem("params"))
  );
  const [tid, setTid] = useState(sessionStorage.getItem("tid"));

  useEffect(() => {
    const pgToken = search.split("=")[1];
    setParams({
      ...rcParams,
      tid: tid,
      pg_token: pgToken,
      approval_url: "http://localhost:3000/",
    });
    console.log(params);
  }, [rcParams, tid]);

  useEffect(() => {
    if (JSON.stringify(params) !== "{}") {
      const queryStr = Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");

      axios({
        url: "https://kapi.kakao.com/v1/payment/approve",
        method: "post",
        headers: {
          Authorization: "KakaoAK e9b2a60cdcbf332af5df8ba23399b883",
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: queryStr, //요청에 파라미터 보내줄 때 쿼리스트링으로 보내줘야 함
      })
        .then((response) => {
          //결제 승인에 대한 응답 출력
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [rcParams, tid, params]);
  //url에 붙어서 온 pg_token을 결제api에 줄 params에 할당
  //params.pg_token = search.split("=")[1];
};

export default KakaoPayResult;

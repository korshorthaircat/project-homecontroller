import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const KakaoPayResult = () => {
  const { search } = useLocation();
  const [params, setParams] = useState({});

  useEffect(() => {
    async function setInitailParams() {
      console.log(1);
      const pgToken = search.split("=")[1];

      const rcParams = sessionStorage.getItem("params");

      const tidParams = {
        ...rcParams,
        tid: sessionStorage.getItem("tid"),
        pg_token: pgToken,
      };

      setParams(tidParams);
    }
    setInitailParams();
  }, []);

  useEffect(() => {
    console.log(2);
    async function callKakaoPayResult() {
      const queryStr = Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&");

      await axios({
        url: "https://kapi.kakao.com/v1/payment/approve",
        method: "post",
        headers: {
          Authorization: "KakaoAK e9b2a60cdcbf332af5df8ba23399b883",
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: queryStr, //요청에 파라미터 보내줄 때 쿼리스트링으로 보내줘야 함
      })
        .then((response) => {
          console.log(3);
          //결제 승인에 대한 응답 출력
          console.log(response);
        })
        .catch((e) => {
          console.log(4);
          console.log(e);
        });
    }
  }, [params]);
  //url에 붙어서 온 pg_token을 결제api에 줄 params에 할당
  //params.pg_token = search.split("=")[1];

  return;
};

export default KakaoPayResult;

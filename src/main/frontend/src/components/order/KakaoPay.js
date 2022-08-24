import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { API_BASE_URL } from "../../app-config";

const KakaoPay = () => {
  const pay = () => {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/order/kakaopay",
      data: "",
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>카카오페이</h1>
      <Button variant="contained" onClick={pay}>
        카카오페이로 결제하기
      </Button>
    </div>
  );
};

export default KakaoPay;

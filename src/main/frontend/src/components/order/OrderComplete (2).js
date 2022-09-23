import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const OrderComplete = () => {
  const [orderNo, setOrderNo] = useState("");
  //db에서 주문번호 조회

  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        marginTop={"20px"}
      >
        <Grid className="orderComplete">
          <Paper
            elevation={24}
            sx={{
              p: 2,
              marginLeft: 20,
              width: 400,
              height: 400,
              backgroundColor: "#F0F0F0",
            }}
          >
            <Typography>주문해주셔서 감사합니다.</Typography>
            <Typography>고객님의 주문번호는 {orderNo}입니다.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderComplete;

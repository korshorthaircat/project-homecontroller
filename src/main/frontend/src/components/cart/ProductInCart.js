import React, { useReducer, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useScrollTrigger } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ProductInCart = ({ product, orderAmount, setOrderAmount }) => {
  //수량 변경
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        setOrderAmount(orderAmount + parseInt(product.productPrice));
        return state + 1;
      case "DECREMENT":
        setOrderAmount(orderAmount - parseInt(product.productPrice));
        return state - 1;
      default:
        return state;
    }
  }

  //제품 이미지
  const ProductImg = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  //컬러 옵션
  const commonTable = [
    { commonCodeName: "빨간색", commonCode: "A01" },
    { commonCodeName: "주황색", commonCode: "A02" },
    { commonCodeName: "노란색", commonCode: "A03" },
    { commonCodeName: "초록색", commonCode: "A04" },
    { commonCodeName: "파란색", commonCode: "A05" },
  ];
  const defaultProps = {
    options: commonTable,
    getOptionLabel: (option) => option.commonCodeName,
  };

  // useEffect(() => {
  //   setOrderAmount(
  //     //orderAmount + parseInt(products.map((product) => product.productPrice))
  //     orderAmount + parseInt(products.map((product) => product.productPrice))
  //   );
  // }, []);

  //useReducer 테스트
  const [number, dispatch] = useReducer(reducer, 0);

  //장바구니 수량 추가
  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  //장바구니 수량 감소
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <Paper
      sx={{
        p: 2,
        alignItems: "left",
        marginLeft: 5,
        marginBottom: 5,
        maxWidth: 500,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Typography>
        <Grid container spacing={2} sx={{ paddingBottom: "40px" }}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <ProductImg alt="complex" src="images/light1.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {product.productName}
                </Typography>
                <Autocomplete
                  {...defaultProps}
                  id="auto-select"
                  autoSelect
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="컬러" variant="standard" />
                  )}
                />

                <Typography>
                  수량:
                  <RemoveCircleOutlineIcon onClick={onDecrease} />
                  {number}
                  <AddCircleOutlineIcon onClick={onIncrease} />
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  삭제하기
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ₩ {product.productPrice}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Typography>
    </Paper>
  );
};

export default ProductInCart;

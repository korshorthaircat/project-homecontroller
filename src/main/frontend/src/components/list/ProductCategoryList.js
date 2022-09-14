import React, { Component, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../main/ProductCard";
import "../../css/productCategory.css";
import { Container } from "react-bootstrap";
import FixedBar from "./FixedBar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ColorChip from "./ColorChip";
import MaterialChip from "./MaterialChip";
import PriceChip from "./PriceChip";
import Categoryinfo from "./Categoryinfo";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const ProductCategoryList = () => {
  const [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:8080/api/main/getMainProductList`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data.productList);
    setProductImageList(data.productImageList);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="cute">
      <Categoryinfo
        title="침대"
        content="많은 침대 제품이 있지만 기분 좋은 아침을 맞이하려면 자신에게 꼭 맞는
        제품을 고르셔야 해요. 몸을 쭉 펴도 될 만큼 크고 폭신하게 몸을 감싸주어
        편안한 디자인을 찾아보세요. HOME CONTROLLER의 침대와 침대프레임은
        오랫동안 사용할 수 있으며 그동안에도 질리지 않을 디자인을 갖추고
        있습니다."
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "lightgray" }}>
            <Button color="inherit">필터</Button>
            <ColorChip></ColorChip>
            <MaterialChip></MaterialChip>
            <PriceChip></PriceChip>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="appbarUnder">
        <div className="header_line">
          <hr />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            {productList ? (
              productList.map((a) => (
                <ProductCard item={a} productImageList={productImageList} />
              ))
            ) : (
              <p>조회된 데이터가 없습니다.</p>
            )}
          </Grid>
        </Box>
      </div>

      <div className="seemore">
        <Button variant="contained" color="success" sx={{ borderRadius: 12.5 }}>
          더 보기
        </Button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProductCategoryList;

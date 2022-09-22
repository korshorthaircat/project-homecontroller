import React, { Component, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCardForList from "./ProductCardForList";
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
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const NotUsedProductCategoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState(""); //검색어. 추후 메인에서 받아온 검색어를 연결해줌
  const [serarchedListLength, setSerarchedListLength] = useState(0); //productList의 길이(검색된 결과물의 개수)

  const [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);
  const [showProductList, setShowProductList] = useState([]); //필터 처리한 제품목록을 담음
  const [query, setQuery] = useSearchParams();

  //제품조회 필터링 조건
  const [commonCode, setCommonCode] = useState("");
  const [productMaterial, setProductMaterial] = useState("");
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(100000000);

  const onCommonCodeHandler = (commonCode) => {
    setCommonCode(commonCode);
  };
  const onProductMaterialHandler = (productMaterial) => {
    setProductMaterial(productMaterial);
  };
  const onLowestPriceHandler = (lowestPrice) => {
    setLowestPrice(lowestPrice);
  };
  const onHighestPriceHandler = (highestPrice) => {
    setHighestPrice(highestPrice);
  };

  const getProducts = async () => {
    let serachQuery = query.get("q");
    console.log("serachQuery", serachQuery);
    let url = `http://localhost:8080/api/product/getAllProductList?q=${serachQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data.productList);
    setProductImageList(data.productImageList);
    setSerarchedListLength(data.productList.length);
  };

  useEffect(() => {
    setShowProductList((prev) => [...prev, ...productList]);
  }, [productList, query]);

  const filterData = () => {
    const filteredList = productList.reduce((acc, cur) => {
      const commonCodeCondition =
        commonCode !== "" && typeof commonCode !== "undefined"
          ? cur.commonCodeName === commonCode
          : true; // 해당 조건이 없으면 그냥 무시하고 지나간다.

      const productMaterialCondition =
        productMaterial !== "" && typeof productMaterial !== "undefined"
          ? cur.productMaterialName === productMaterial
          : true;

      const lowestPriceCondition = lowestPrice
        ? cur.productPrice > lowestPrice
        : true;

      const highestPriceCondition = highestPrice
        ? cur.productPrice <= highestPrice
        : true;

      // 해당 조건이 있다면 그에 부합하는 교집합인 놈만 push 하겠다.
      if (
        commonCodeCondition &&
        productMaterialCondition &&
        lowestPriceCondition &&
        highestPriceCondition
      ) {
        acc.push(cur);
      }

      return acc;
    }, []);

    setShowProductList(filteredList);
  };

  useEffect(() => {
    filterData();
  }, [productList, commonCode, productMaterial, lowestPrice, highestPrice]);

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
      <div>
        <h1 style={{ fontWeight: "bold" }}>
          "{searchKeyword}"을(를) 검색한 결과는 다음과 같습니다.
        </h1>
        <p className="pdetail">
          관련된 항목을 {serarchedListLength}개 찾았습니다.
        </p>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "lightgray" }}>
            <Button color="inherit">필터</Button>
            <ColorChip onCommonCodeHandler={onCommonCodeHandler}></ColorChip>
            <MaterialChip
              onProductMaterialHandler={onProductMaterialHandler}
            ></MaterialChip>
            <PriceChip
              onLowestPriceHandler={onLowestPriceHandler}
              onHighestPriceHandler={onHighestPriceHandler}
            ></PriceChip>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="appbarUnder">
        <div className="header_line">
          <hr />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            {/*             
            {productList ? (
              productList.map((a) => (
                <ProductCard item={a} productImageList={productImageList} />
              ))
            ) : (
              <p>조회된 데이터가 없습니다.</p>
            )} 
            */}

            {showProductList ? (
              showProductList.map((a) => (
                <ProductCardForList
                  item={a}
                  productImageList={productImageList}
                />
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

export default NotUsedProductCategoryList;

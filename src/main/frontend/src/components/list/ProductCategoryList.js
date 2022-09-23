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
import { useParams } from "react-router-dom";
import { param } from "jquery";

const ProductCategoryList = () => {
  const [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);
  const [showProductList, setShowProductList] = useState([]); //필터 처리한 제품목록을 담음
  const [showProductImageList, setShowProductImageList] = useState([]); //필터 처리한 제품이미지목록을 담음
  // const [query, setQuery] = useSearchParams();

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

  const [searchData, setSearchData] = React.useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:8080/api/main/getSearchProducts?word=" + params.word
      );

      console.log(params.word);
      console.log("검색어: ", result.data);
      setProductList(result.data.searchProductList);
      setProductImageList(result.data.searchProductImageList);
    }
    if (params) fetchData();
  }, [params]);

  // const getProducts = async () => {
  //   // let serachQuery = query.get("q");
  //   // console.log("serachQuery", serachQuery);
  //   let url = "http://localhost:8080/api/product/getAllProductList";
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data);
  //   setProductList(data.productList);
  //   setProductImageList(data.productImageList);
  // };

  // useEffect(() => {
  //   if (
  //     (commonCode === "" || typeof commonCode === "undefined") &&
  //     (productMaterial === "" || typeof productMaterial === "undefined")
  //   ) {
  //     setShowProductList((prev) =>
  //       productList.filter(
  //         (p) => p.productPrice > lowestPrice && p.productPrice <= highestPrice
  //       )
  //     );
  //   } else {
  //     setShowProductList((prev) =>
  //       prev.filter(
  //         (p) => p.productPrice > lowestPrice && p.productPrice <= highestPrice
  //       )
  //     );
  //   }
  // }, [lowestPrice, highestPrice]);

  useEffect(() => {
    console.log(productList);
    if (Array.isArray(productList) && productList.length !== 0)
      setShowProductList((prev) => [...prev, ...productList]);
  }, [productList]);

  const filterData = () => {
    if (Array.isArray(productList) && productList.length !== 0) {
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
    }
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

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div className="cute">
      <div>
        <h1 style={{ fontWeight: "bold" }}>
          "{params.word}"을(를) 검색한 결과는 다음과 같습니다.
        </h1>
        <p className="pdetail">
          관련된 항목을 {showProductList.length}개 찾았습니다.
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
            {showProductList.length !== 0 ? (
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

export default ProductCategoryList;

import React, { Component, useEffect, useState } from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../css/carousel.css";
import { Link } from "react-router-dom";
import ProductCard from "../main/ProductCard";
import ThemeProductCarousel from "../main/ThemeProductCarousel";
import axios from "axios";

const SameCategoryList = () => {
  const { productNo } = useParams();
  const { commonCode } = useParams();
  const [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);
  const [productCategoryName, setProductCategoryName] = useState("");

  const getProducts = async () => {
    axios({
      url: `http://localhost:8080/api/product/productDetail`,
      method: "get",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      params: { productNo: productNo, commonCode: commonCode },
    }).then((response) => {
      //console.log(response.data.productInfo.slice(0, 1));
      setProductList((prev) => response.data.productInfo.slice(0, 1));
      //console.log(response.data.productInfo[0].productCategoryName);
      setProductCategoryName(response.data.productInfo[0].productCategoryName);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="carousel_container">
      <div style={{ margin: "100px 50px 20px 15px" }}>
        <h className="sameCategoryTitle">비슷한 제품 추천</h>
      </div>
      <hr />

      {productCategoryName && (
        <ThemeProductCarousel theme={productCategoryName} />
      )}
    </div>
  );
};

export default SameCategoryList;

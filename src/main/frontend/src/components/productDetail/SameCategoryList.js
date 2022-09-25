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
  const [productCategoryName, setProductCategoryName] = useState("아");

  const getProducts = async () => {
    axios({
      url: `http://localhost:8080/api/product/productDetail`,
      method: "get",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      params: { productNo: productNo, commonCode: commonCode },
    }).then((response) => {
      console.log(response.data.productInfo.slice(0, 1));
      setProductList((prev) => response.data.productInfo.slice(0, 1));
      setProductCategoryName(
        response.data.productInfo.slice(0, 1).productCategoryName
      );
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   console.log(productList[0].productCategoryName);
  //   setProductCategoryName(productList[0].productCategoryName);
  // }, [productList]);

  return (
    <div className="carousel_container">
      <div style={{ margin: "100px 50px 20px 15px" }}>
        <h className="sameCategoryTitle">비슷한 제품 추천</h>
      </div>
      <hr />
      {/* <Carousel
        responsive={responsive}
        // showDots={true}
        // dotListClass="custom-dot-list-style"
        // containerClass="carousel-container"
        // itemClass="carousel-item-padding-40-px"
      >
        {productList.map((a) => (
          <ProductCard item={a} productImageList={productImageList} />
        ))}
      </Carousel> */}
      {/* {productCategoryName} */}

      <ThemeProductCarousel theme={productCategoryName} />
    </div>
  );
};

export default SameCategoryList;

import React, { Component, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../css/carousel.css";
import { Link } from "react-router-dom";
import ProductCard from "../main/ProductCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SameCategoryList = () => {
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="carousel_container">
      <div style={{ margin: "50px 50px 20px 15px" }}>
        <h className="sameCategoryTitle">비슷한 제품 추천</h>
      </div>
      <hr />
      <Carousel
        responsive={responsive}
        // showDots={true}
        // dotListClass="custom-dot-list-style"
        // containerClass="carousel-container"
        // itemClass="carousel-item-padding-40-px"
      >
        {productList.map((a) => (
          <ProductCard item={a} productImageList={productImageList} />
        ))}
      </Carousel>
    </div>
  );
};

export default SameCategoryList;

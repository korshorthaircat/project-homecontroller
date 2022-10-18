import React, { Component, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import "../../css/carousel.css";
import { Link } from "react-router-dom";
import axios from "axios";

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

const MainProductCarousel = () => {
  const [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:8080/api/main/getMainProductList`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data/////////", data.productList);
    setProductList(data.productList);
    setProductImageList(data.productImageList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const result = await axios.get(
  //         "http://localhost:8080/api/main/getSearchProducts?word=" + "조화"
  //       );
  //       console.log("검색어: ", result.data);
  //       setProductList(result.data.searchProductList);
  //       setProductImageList(result.data.searchProductImageList);
  //     }
  //     if ("조화") fetchData();
  //   }, []);

  return (
    <div className="carousel_container">
      <Carousel
        responsive={responsive}
        // showDots={true}
        // dotListClass="custom-dot-list-style"
        // containerClass="carousel-container"
        // itemClass="carousel-item-padding-40-px"
      >
        {productList &&
          productList.map((a) => (
            <ProductCard item={a} productImageList={productImageList} />
          ))}
      </Carousel>
    </div>
  );
};

export default MainProductCarousel;

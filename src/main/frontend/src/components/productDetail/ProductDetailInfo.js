import { hover } from "@testing-library/user-event/dist/hover";
import React, { Component } from "react";
import MainInfoNav from "./MainInfoNav";
import SameCategoryList from "./SameCategoryList";
import ProductCarousel from "../main/ProductCarousel";
import { useEffect } from "react";
import { useState } from "react";

const ProductDetailInfo = ({ orderHistory }) => {
  return (
    <div>
      <button
        className="productDetailInfo"
        id="productDetailInfoAll"
        style={{ position: "relative" }}
      >
        <div>
          <MainInfoNav option="info" orderHistory={orderHistory} />
        </div>
        제품설명
      </button>
      <img id="arrowIcon" src="/Product_arrow.png"></img>

      <p>
        <hr className="line1"></hr>
      </p>
      <div>
        <button
          className="productGauge"
          id="productDetailInfoAll"
          style={{ position: "relative" }}
        >
          <div>
            <MainInfoNav option="size" orderHistory={orderHistory} />
          </div>
          치수
        </button>
        <img id="arrowIcon" src="/Product_arrow.png"></img>
      </div>
      <p>
        <hr className="line1"></hr>
        <button
          className="productReview"
          id="productDetailInfoAll"
          style={{ position: "relative" }}
        >
          <div>
            <MainInfoNav option="review" />
          </div>
          상품평
        </button>
        <img id="arrowIcon" src="/Product_arrow.png"></img>
      </p>
      <hr className="line1"></hr>
    </div>
  );
};
export default ProductDetailInfo;

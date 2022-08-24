import React, { Component } from "react";
import MainInfoNav from "./MainInfoNav";
import SameCategoryList from "./SameCategoryList";

const ProductDetailInfo = () => {
  return (
    <div>
      <button
        className="productDetailInfo"
        id="productDetailInfoAll"
        style={{ position: "relative" }}
      >
        <div>
          <MainInfoNav />
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
            <MainInfoNav />
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
            <MainInfoNav />
          </div>
          상품평
        </button>
        <img id="arrowIcon" src="/Product_arrow.png"></img>
      </p>
      <div>
        <SameCategoryList />
      </div>
    </div>
  );
};
export default ProductDetailInfo;

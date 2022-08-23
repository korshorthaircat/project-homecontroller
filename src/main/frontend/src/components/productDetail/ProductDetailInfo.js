import React from "react";
import MainInfoNav from "./MainInfoNav";

const ProductDetailInfo = () => {
  return (
    <div>
      <button 
        className="productDetailInfo"
        id="productDetailInfoAll"
        type="button"
      >
        제품 설명
      </button>
      <img id="arrowIcon" src="/Product_arrow.png"></img>
      <p>
        <hr className="line1"></hr>
      </p>
      <div>
        <button className="productGauge" id="productDetailInfoAll">
          치수
        </button>
        <img id="arrowIcon" src="/Product_arrow.png"></img>
      </div>
      <p>
        <hr className="line1"></hr>
        <button className="productReview" id="productDetailInfoAll">
          상품평
        </button>
        <img id="arrowIcon" src="/Product_arrow.png"></img>
      </p>
    </div>
  );
};

export default ProductDetailInfo;

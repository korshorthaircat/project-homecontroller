import React, { useState } from "react";
import ProductMainImg from "./ProductMainImg";
import data from "../../assets/api/image";
import "../../css/productDetail.css";

const ProductDetail_Img = () => {
  const [datas, setDatas] = useState(data);
  const [currItem, setCurrItem] = useState(datas[0]);

  const onView = (id) => {
    setCurrItem(datas.find((item) => item.id === id));
  };

  return (
    <div className="wrap" id="list">
      <ProductMainImg datas={datas} onView={onView} currItem={currItem} />
    </div>
  );
};

export default ProductDetail_Img;

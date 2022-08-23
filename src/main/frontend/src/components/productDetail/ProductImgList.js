import React from "react";
import "../../css/productDetail.css";

const ProductImgList = ({ item, onView }) => {
  const { image, title, id } = item;
  return (
    <li onClick={() => onView(id)}>
      <img src={image} alt={title} />
    </li>
  );
};

export default ProductImgList;

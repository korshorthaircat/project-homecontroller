import React from "react";
import ProductItem from "./ProductImgList";

const ProductMainImg = ({ datas, currItem, onView }) => {
  const { image, title } = currItem;

  return (
    <article className="left" id="listImg">
      <img src={image} alt={title} />
      <ul>
        {datas.map((item) => (
          <ProductItem key={item.id} item={item} onView={onView} />
        ))}
      </ul>
    </article>
  );
};

export default ProductMainImg;

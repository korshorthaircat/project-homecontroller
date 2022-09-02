import React from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../main/ProductCard";
import "../../css/productCategory.css";
import { Container } from "react-bootstrap";

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

const stateText = [
  {
    title: "JUSTINA 유스티나",
    category: "테이블",
    image:
      "https://www.ikea.com/kr/ko/images/products/karljan-chair-dark-grey-kabusa-dark-grey__1053140_pe846733_s5.jpg?f=s",
    price: "￦99,900",
  },
  {
    title: "JUSTINA 유스티나",
    category: "의자",
    image:
      "https://www.ikea.com/kr/ko/images/products/justina-chair-pad-grey__0891594_pe658492_s5.jpg?f=s",
    price: "￦99,900",
  },
  {
    title: "JUSTINA 유스티나",
    category: "테이블",
    image:
      "https://www.ikea.com/kr/ko/images/products/justina-chair-pad-grey__0891586_pe566913_s5.jpg?f=s",
    price: "￦99,900",
  },
  {
    title: "JUSTINA 유스티나",
    category: "의자",
    image:
      "https://www.ikea.com/kr/ko/images/products/justina-chair-pad-grey__0891588_pe567158_s5.jpg?f=s",
    price: "￦99,900",
  },
];

const ProductCategoryList = () => {
  return (
    <div className="cute">
      <div className="title">
        <h1>침대</h1>
      </div>
      <div className="productcategory_container">
        {stateText.map((data) => (
          <ProductCard
            image={data.image}
            category={data.category}
            title={data.title}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryList;

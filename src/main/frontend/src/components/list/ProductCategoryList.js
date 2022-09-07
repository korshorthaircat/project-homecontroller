import React from "react";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../main/ProductCard";
import "../../css/productCategory.css";
import { Container } from "react-bootstrap";
import FixedBar from "./FixedBar";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ColorChip from "./ColorChip";
import MaterialChip from "./MaterialChip";
import PriceChip from "./PriceChip";
import Categoryinfo from "./Categoryinfo";

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
    category: "의자",
    image:
      "https://www.ikea.com/kr/ko/images/products/odger-swivel-chair-anthracite__0939545_ph171072_s5.jpg?f=s",
    price: "￦99,900",
  },
  {
    title: "JUSTINA 유스티나",
    category: "테이블",
    image:
      "https://www.ikea.com/kr/ko/images/products/odger-swivel-chair-anthracite__0939545_ph171072_s5.jpg?f=s",
    price: "￦99,900",
  },
  {
    title: "JUSTINA 유스티나",
    category: "의자",
    image:
      "https://www.ikea.com/kr/ko/images/products/karljan-chair-dark-grey-kabusa-dark-grey__1053139_pe846732_s5.jpg?f=s",
    price: "￦99,900",
  },
  {
    title: "JUSTINA 유스티나",
    category: "테이블",
    image:
      "https://www.ikea.com/kr/ko/images/products/karljan-chair-dark-grey-kabusa-dark-grey__1053140_pe846733_s5.jpg?f=s",
    price: "￦99,900",
  },
];

const ProductCategoryList = () => {
  return (
    <div className="cute">
      {/* <div className="ptitle"> */}
      {/* <h1 style={{ fontWeight: "bold" }}>침대</h1>
      </div>
      <div className="pdetail">
        많은 침대 제품이 있지만 기분 좋은 아침을 맞이하려면 자신에게 꼭 맞는
        제품을 고르셔야 해요. 몸을 쭉 펴도 될 만큼 크고 폭신하게 몸을 감싸주어
        편안한 디자인을 찾아보세요. HOME CONTROLLER의 침대와 침대프레임은
        오랫동안 사용할 수 있으며 그동안에도 질리지 않을 디자인을 갖추고
        있습니다.
      </div> */}
      <Categoryinfo title="침대" content="라라라랄" />
      <Categoryinfo title="소파" content="라라라랄" />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "lightgray" }}>
            <Button color="inherit">필터</Button>
            <ColorChip></ColorChip>
            <MaterialChip></MaterialChip>
            <PriceChip></PriceChip>
          </Toolbar>
        </AppBar>
      </Box>
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
      <br />
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
      <div className="seemore">
        <Button variant="contained" color="success" sx={{ borderRadius: 12.5 }}>
          더 보기
        </Button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProductCategoryList;

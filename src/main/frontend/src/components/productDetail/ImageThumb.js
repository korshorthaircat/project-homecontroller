import Box from "../Box";
import { useState } from "react";
import "../../css/ProductDetail.css";
import ProductMainInfo from "./ProductMainInfo";
import ProductDetailInfo from "./ProductDetailInfo";
import { useEffect } from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import { Details } from "@mui/icons-material";
import axios from "axios";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
  },
};

function ImageThumb(props) {
  // useEffect(() => {
  //   userSelect({
  //     name: `image0`,
  //     img: `http://localhost:8080/upload/${productImageList[1].productImageName}`,
  //   });
  // }, []);

  const { productNo } = useParams();
  const [userSelect, setUserSelect] = useState();

  const play = (a, index) => {
    console.log(a);
    console.log(index);
    const nameNum = index + 1;
    console.log(nameNum);
    setUserSelect({
      name: `img${nameNum}`,
      img: `http://localhost:8080/upload/${a.productImageName}`,
    });
  };

  let [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);

  const getProducts = async () => {
    axios({
      url: `http://localhost:8080/api/product/productDetail`,
      method: "get",
      params: { productNo: productNo },
    }).then((response) => {
      console.log(response.data);
      setProductList(response.data.productInfo);
      setProductImageList(response.data.productImage);
      //setProductImageData(response.data.slice(0, 4));
    });
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (productImageList.length !== 0)
      setUserSelect({
        name: `img1`,
        img: `http://localhost:8080/upload/${productImageList[0].productImageName}`,
      });
  }, [productImageList]);

  return (
    <>
      <div className="main">
        <div className="imgBox">
          <div style={{ textAlign: "center" }}>
            <Box item={userSelect} />
          </div>
          <div className="thumbImg">
            {productImageList.map((a, index) => (
              <img
                key={index}
                src={`http://localhost:8080/upload/${a.productImageName}`}
                className="btn"
                onClick={() => play(a, index)}
              />
            ))}
          </div>
          <p>
            <hr className="line1"></hr>
          </p>

          <ProductDetailInfo />
        </div>
        <div className="contentBox">
          <ProductMainInfo />
        </div>
      </div>
    </>
  );
}

export default ImageThumb;

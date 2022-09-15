import Box from "../Box";
import { useState } from "react";
import "../../css/ProductDetail.css";
import ProductMainInfo from "./ProductMainInfo";
import ProductDetailInfo from "./ProductDetailInfo";
import { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Details } from "@mui/icons-material";
import axios from "axios";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
  },
  img2: {
    name: "img2",
    img: process.env.PUBLIC_URL + "/images/inter (2).png",
  },
  img3: {
    name: "img3",
    img: process.env.PUBLIC_URL + "/images/inter (3).png",
  },
  img4: {
    name: "img4",
    img: process.env.PUBLIC_URL + "/images/light3.png",
  },
  img5: {
    name: "img5",
    img: process.env.PUBLIC_URL + "/images/light1.png",
  },
};

function ImageThumb(props) {
  const [userSelect, setUserSelect] = useState(choice.img1);
  const { productNo } = useParams();
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

  const [productImageData, setProductImageData] = useState([]);
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

  useEffect(() => {
    getProducts();
  }, []);

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
            {/* <img
                className="btn"
                onClick={() => play("img2")}
                type="image"
                src={`http://localhost:8080/upload/${a.productImageName}`}
                alt="2번째사진"
              ></img>
              <img
                className="btn"
                onClick={() => play("img3")}
                type="image"
                src={`http://localhost:8080/upload/${a.productImageName}`}
                alt="3번째사진"
              ></img>
              <img
                className="btn"
                onClick={() => play("img4")}
                type="image"
                src={`http://localhost:8080/upload/${a.productImageName}`}
                alt="4번째사진"
              ></img>
              <img
                className="btn"
                onClick={() => play("img5")}
                type="image"
                src={`http://localhost:8080/upload/${a.productImageName}`}
                alt="5번째사진"
              ></img> */}
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

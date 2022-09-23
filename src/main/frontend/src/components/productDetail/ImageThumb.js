import Box from "../Box";
import { useState } from "react";
import "../../css/ProductDetail.css";
import ProductMainInfo from "./ProductMainInfo";
import ProductDetailInfo from "./ProductDetailInfo";
import { useEffect } from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import { Details } from "@mui/icons-material";
import axios from "axios";
import SameCategoryList from "./SameCategoryList";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
  },
};

const moveMenu = () => {
  window.location.replace("/list");
};

const moveCategory = () => {
  window.location.replace("/list");
};

const moveInCategory = () => {
  window.location.replace("/list");
};

function ImageThumb(props) {
  // useEffect(() => {
  //   userSelect({
  //     name: `image0`,
  //     img: `http://localhost:8080/upload/${productImageList[1].productImageName}`,
  //   });
  // }, []);

  const { productNo } = useParams();
  const { commonCode } = useParams();
  const [userSelect, setUserSelect] = useState();
  const [orderHistory, setOrderHistory] = useState(0);
  const [orderNoList, setOrderNoList] = useState([]);

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
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      params: { productNo: productNo , commonCode: commonCode },
    }).then((response) => {
      console.log(response.data);
      setProductList((prev) => response.data.productInfo.slice(0, 1));
      setProductImageList((prev) => response.data.productImage);
      setOrderHistory((prev) => response.data.orderHistory);
      setOrderNoList((prev) => response.data.orderNoList);
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

  const changeProductColor = (images) => {
    setProductImageList(images);
  };

  return (
    <>
      <div>
        <div id="categoryMenu">
          <div id="categoryMenu2" onClick={moveMenu}>
            제품
          </div>
          <img id="arrow" src="/Product_arrow.png"></img>
          <div id="categoryMenu2" onClick={moveCategory}>
            카테고리
          </div>
          <img id="arrow" src="/Product_arrow.png"></img>
          {productList.map((r) => (
            <div id="categoryMenu2" onClick={moveInCategory}>
              {r.productCategoryName}
            </div>
          ))}
          <img id="arrow" src="/Product_arrow.png"></img>
          {productList.map((e) => (
            <div id="categoryMenu2"> {e.productName}</div>
          ))}
        </div>
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
                  className="btnThumImg"
                  onClick={() => play(a, index)}
                />
              ))}
            </div>
            <p>
              <hr className="line1"></hr>
            </p>

            <ProductDetailInfo orderHistory={orderHistory} />
          </div>
          <div className="contentBox">
            <ProductMainInfo changeProductColor={changeProductColor}/>
          </div>
        </div>
        <SameCategoryList />
      </div>
    </>
  );
}

export default ImageThumb;

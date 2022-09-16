import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../../css/ProductDetail.css";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Details, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MainInfoNav from "./MainInfoNav";
import { list, productlist } from "./../admin/ProductList";
import axios from "axios";
import { Link, Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import { height, width } from "@mui/system";
import NavContentRev from "./NavContentRev";
import RevStar from "./RevStar";

function MainInfo() {
  let { productNo, commonCode } = useParams();
  console.log(productNo);

  let [productList, setProductList] = useState([]);

  const [productImageList, setProductImageList] = useState([]);

  const getColorCommonCode = async () => {
    axios({
      url: `http://localhost:8080/api/product/productColorDetail`,
      method: "get",
      params: { productNo: productNo },
    }).then((response) => {
      console.log(response.data);
      setProductList(response.data.productInfo.slice(0, 1));
      setProductImageList(response.data.productImage);
      console.log("미미" + response.data.productImage);
    });
  };

  useEffect(() => {
    getColorCommonCode();
  }, []);

  return (
    <>
      <div className="productMainInfo">
        {productList.map((r) => (
          <div>
            <p className="productName">{r.productName}</p>
            <p className="productCategory">{r.productCategoryName}</p>
            <p className="productPrice">￦{r.productPrice}원</p>
            <div id="Review">
              <p className="productGrade">
                <div style={{ width: "100px" }}>
                  <MainInfoNav option="review" />
                </div>
                <RevStar />
              </p>
              <p className="productRevCount"></p>
            </div>
          </div>
        ))}
        <p>
          <hr className="line2"></hr>
        </p>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <p className="selectColorUnder" style={{ fontWeight: "1000" }}>
            색상선택
          </p>
          <img
            style={{
              width: "20px",
              height: "20px",
              align: "right",
              marginRight: "0px",
            }}
            src="/Product_arrow.png"
            alt="색상선택"
          ></img>{" "}
          화이트
        </div>

        <div>
          <div style={{ display: "flex" }}>
            {productImageList.map((a, index) => (
              <img
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "10px",
                  borderRadius: "5%",
                }}
                key={index}
                src={`http://localhost:8080/upload/${a.productImageName}`}
              />
            ))}
          </div>
        </div>

        <div className="sellHeartBtn">
          <button type="button" id="sellBtn">
            구매하기
          </button>

          <FavoriteBorder
            id="productWishBtn"
            type="button"
            sx={{
              color: "black",
              width: "40px",
              height: "40px",
              marginLeft: "40px",
              alignItems: "center",
            }}
          />

          <MainInfoNav />
        </div>
      </div>
      ;
    </>
  );
}
export default MainInfo;

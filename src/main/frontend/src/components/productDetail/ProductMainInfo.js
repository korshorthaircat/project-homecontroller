import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../../css/ProductDetail.css";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MainInfoNav from "./MainInfoNav";
import { list, productlist } from "./../admin/ProductList";
import axios from "axios";

function MainInfo() {
  const [productList, setProductList] = React.useState([]);

  let listUrl = "http://localhost:8080/api/admin/admin2";
  const list = () => {
    axios
      .get(listUrl, {})
      .then((response) => {
        setProductList(response.data.data.slice(0, 1));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
  }, []);

  return (
    <>
      {productList.map((r) => (
        <div className="productMainInfo">
          <p className="productName">{r.productName}</p>
          <p className="productCategory">{r.productCategoryName}</p>
          <p className="productPrice">{r.productPrice}원</p>
          <div id="Review">
            <p className="productGrade">★★★★★</p>
            <p className="productRevCount">(267)</p>
          </div>

          <p>
            <hr className="line2"></hr>
          </p>

          <div>
            <div style={{ display: "flex" }}>
              <img className="selectColorBtn" src="/images/light3.png"></img>

              <img className="selectColorBtn" src="/images/light3.png"></img>

              <img className="selectColorBtn" src="/images/light3.png"></img>
            </div>

            <button className="selectColor">
              <div style={{ display: "flex" }}>
                <p className="selectColorUnder" style={{ fontWeight: "800" }}>
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
                ></img>
              </div>
              <p style={{ fontSize: "13px", marginLeft: "10px" }}>화이트</p>
            </button>
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
      ))}
      ;
    </>
  );
}
export default MainInfo;

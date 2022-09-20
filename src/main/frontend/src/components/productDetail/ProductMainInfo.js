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
import { Button, Modal } from "react-bootstrap";

const MainInfo = ({ item }) => {
  let { productNo, commonCode } = useParams();
  console.log(productNo);

  let [productList, setProductList] = useState([]);

  const [productImageList, setProductImageList] = useState([]);

  const [show, setShow] = useState(false);

  //장바구니 클릭시 장바구니에 담기
  const addCart = () => {
    axios({
      url: "http://localhost:8080/api/cart/addCart",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { productNo: productNo, commonCode: commonCode },
    }).then((response) => {
      // console.log("cart",response.data);
      setShow(true);
    });
  };

  //장바구니 등록 완료시 모달창 띄우기
  const handleClose = () => setShow(false);

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
            <div>
              <div>
                <p className="productName">{r.productName}</p>
                <p className="productCategory">{r.productCategoryName}</p>
                <p className="productPrice">
                  ￦
                  {(r.productPrice + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </p>
              </div>

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
              ></img>
              <span>{r.commonCode}</span>
            </div>
          </div>
        ))}

        <div>
          <div style={{ display: "flex" }}>
            {productImageList.map((a, index) => (
              <img
                className="ColorSelectImg"
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
          <button type="button" id="sellBtn" onClick={addCart}>
            구매하기
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>장바구니 등록</Modal.Title>
            </Modal.Header>
            <Modal.Body>장바구니에 상품이 담겼습니다.</Modal.Body>
            <Modal.Footer>
              <Button variant="contained" color="success" onClick={handleClose}>
                닫기
              </Button>
            </Modal.Footer>
          </Modal>
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
};
export default MainInfo;

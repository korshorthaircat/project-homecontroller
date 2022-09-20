import React, { useEffect, useState } from "react";
import "../../css/productCard.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ProductCard = ({ item, productImageList }) => {
  //대표 이미지
  const [thumbnail, setThumbnail] = useState("");
  //호버 이미지
  const [hoverImage, setHoverImage] = useState("");
  const [isHover, setIsHover] = useState(false);
  //모달창
  const [show, setShow] = useState(false);
  //
  const [cnt, setCnt] = useState(0);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  useEffect(() => {
    if (Object.keys(item).length !== 0 && productImageList.length !== 0) {
      productImageList.map((productImage) => {
        if (
          item.productNo === productImage.productNo &&
          productImage.productImageNo === 1
        )
          setThumbnail(productImage.productImageName);
        else if (
          item.productNo === productImage.productNo &&
          productImage.productImageNo === 2
        )
          setHoverImage(productImage.productImageName);

        return productImage;
      });
    }
  }, [item, productImageList]);

  //하트 아이콘 클릭시 위시리스트에 담기
  const addWishList = () => {
    axios({
      url: "http://localhost:8080/api/wishlist/addWishItem",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { productNo: item.productNo },
    }).then((response) => {
      console.log(response.data);
    });
  };

  //장바구니 클릭시 장바구니에 담기
  const addCart = () => {
    axios({
      url: "http://localhost:8080/api/cart/addCart",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { productNo: item.productNo, commonCode: item.commonCode },
    }).then((response) => {
      // console.log("cart",response.data);
      setShow(true);
    });
  };

  //장바구니 등록 완료시 모달창 띄우기
  const handleClose = () => setShow(false);

  return (
    <div className="card">
      <Link
        to={`/productDetail/${item.productNo}`}
        state={{ productList: item }}
      >
        <img
          className="imageArea"
          src={
            isHover
              ? `http://localhost:8080/upload/${hoverImage}`
              : `http://localhost:8080/upload/${thumbnail}`
          }
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          alt="사진"
          onClick={() => {
            window.location.replace(`/productDetail/${item.productNo}`);
          }}
        />
      </Link>
      <div className="textArea">
        <p className="title_text">{item.productName}</p>
        <p className="category_text">
          {item.productCategoryName}, {item.productSize}
        </p>
        <div className="priceArea">
          <p>PRICE</p>
          <div className="last">
            <p className="price_text">\{item.productPrice}</p>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ padding: "0 6px", left: 140 }}
              onClick={addWishList}
            >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "0 6px", left: 140 }}
              onClick={addCart}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>장바구니 등록</Modal.Title>
              </Modal.Header>
              <Modal.Body>장바구니에 상품이 담겼습니다.</Modal.Body>
              <Modal.Footer>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClose}
                >
                  닫기
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <hr className="product_line" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

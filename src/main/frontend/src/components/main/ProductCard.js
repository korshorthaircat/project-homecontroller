import React, { useEffect, useState } from "react";
import "../../css/productCard.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HeartButton from "./HeartButton";
import Heart from "react-heart";
import { HideImageRounded } from "@mui/icons-material";
import HeartTest from "./HeartTest";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ item, productImageList }) => {
  //대표 이미지
  const [thumbnail, setThumbnail] = useState("");
  //호버 이미지
  const [hoverImage, setHoverImage] = useState("");
  const [isHover, setIsHover] = useState(false);
  //장바구니 모달창
  const [show, setShow] = useState(false);
  //위시리스트 모달창
  const [wishlistShow, setwishlistShow] = useState(false);
  const [wishDeleteShow, setWishDeleteShow] = useState(false);

  const [courseCostChange, setCourseCostChange] = useState("");
  const [wishItemList, setWishItemList] = useState([]);

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
      console.log(productImageList);
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

        // if (
        //   item.productNo === productImage.productNo &&
        //   item.commonCode === productImage.commonCode &&
        //   (productImage.productImageNo === 1 ||
        //     productImage.productImageNo === 3)
        // )
        //   setThumbnail(productImage.productImageName);
        // else if (
        //   item.productNo === productImage.productNo &&
        //   item.commonCode === productImage.commonCode &&
        //   (productImage.productImageNo === 2 ||
        //     productImage.productImageNo === 4)
        // )
        //   setHoverImage(productImage.productImageName);

        return productImage;
      });
    }
  }, [item, productImageList]);

  const [like, setLike] = useState(false);
  const [active, setActive] = useState(false);

  //위시리스트 데이터 조회
  useEffect(() => {
    axios({
      url: "http://localhost:8080/api/wishlist/getWishItemList",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "get",
    })
      .then((response) => {
        console.log(response);
        setWishItemList(wishItemList);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //위시리스트에 담기
  const addWishList = () => {
    axios({
      url: "http://localhost:8080/api/wishlist/addWishItem",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { productNo: item.productNo },
    }).then((response) => {
      // console.log(response.data);
      setwishlistShow(true);
    });
  };

  //위시쇼룸 담기
  const addWishShowroom = () => {
    axios({
      url: "http://localhost:8080/api/wishlist/addWishShowroom",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { showroomNo: item.showroomNo },
    }).then((response) => {
      // setwishshowroomShow(true);
    });
  };

  //위시아이템 삭제하기
  const deleteWishList = (index) => {
    axios({
      url: "http://localhost:8080/api/wishlist/deleteWishItem",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { productNo: item.productNo },
    }).then((response) => {
      // setWishItemList(response.data.wishItemList);
      // window.location.href = "/wishlist";
      // console.log(response.data);
      // setWishDeleteShow(false);
    });
  };

  //위시쇼룸 삭제하기
  const deleteWishShowroom = (index) => {
    axios({
      url: "http://localhost:8080/api/wishlist/deleteWishShowroom",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { showroomNo: item.showroomNo },
    }).then((response) => {});
  };

  const toggleLike = async (e) => {
    // if (like) {
    //   deleteWishList;
    // } else {
    //   addWishList;
    // }
    setLike(!like);
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

  useEffect(() => {
    if (wishItemList.length != 0) {
      wishItemList.map((wishItem) => {
        wishItem.productNo === item.productNo ? setLike(true) : setLike(false);
      });
    }
  }, [wishItemList]);

  //장바구니 등록 완료시 모달창 띄우기
  const handleClose = () => setShow(false);
  const wishlistHandleClose = () => setwishlistShow(false);

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
        ></img>
      </Link>
      <div className="textArea">
        <p className="title_text">{item.productName}</p>
        <p className="category_text">
          {item.productCategoryName}, {item.productSize}
        </p>
        <div className="priceArea">
          <p>PRICE</p>
          <div className="last">
            <p className="price_text">
              {`₩ ${(item.productPrice + "").replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )}`}
            </p>
            {/* 하트아이콘버튼부분  */}
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ padding: "0 6px", left: 140 }}
              // onClick={like ? deleteWishList : addWishList}
              isActive={active}
            >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton> */}

            <Heart
              className="heartIcon"
              style={{ width: "1.5rem" }}
              isActive={active}
              onClick={() => {
                setActive(!active);
                if (!active) {
                  addWishList();
                } else {
                  deleteWishList();
                  alert("취소되었습니다");
                }
              }}
            />

            {/* {like && like ? (
              <FavoriteIcon onClick={addWishList} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={addWishList} />
            )} */}

            {/* <HeartTest like={like} addWishList={addWishList} /> */}

            <Modal show={wishlistShow} onHide={wishlistHandleClose}>
              <Modal.Header closeButton>
                <Modal.Title>위시리스트 등록</Modal.Title>
              </Modal.Header>
              <Modal.Body>위시리스트에 담겼습니다.</Modal.Body>
              <Modal.Footer>
                <Button
                  variant="contained"
                  color="success"
                  onClick={wishlistHandleClose}
                >
                  닫기
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={wishDeleteShow} onHide={wishlistHandleClose}>
              <Modal.Header closeButton>
                <Modal.Title>위시리스트 삭제</Modal.Title>
              </Modal.Header>
              <Modal.Body>위시리스트에서 삭제되었습니다.</Modal.Body>
              <Modal.Footer>
                <Button
                  variant="contained"
                  color="success"
                  onClick={wishlistHandleClose}
                >
                  닫기
                </Button>
              </Modal.Footer>
            </Modal>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{
                padding: "0 6px",
                position: "absolute",
                left: "260px",
              }}
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

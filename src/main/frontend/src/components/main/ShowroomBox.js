import React from "react";
import "../../css/mainShowroom.css";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";
import HoverIcon from "./HoverIcon";
import { Link } from "react-router-dom";
import Heart from "react-heart";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";

const ShowroomBox = ({ item, showroomItem }) => {
  const [showroomItemStyle, setShowroomItemStyle] = useState([]);

  const handleClose = () => setShow(false);
  const wishlistHandleClose = () => setwishlistShow(false);

  useEffect(() => {
    showroomItem &&
      item &&
      setShowroomItemStyle(
        showroomItem.filter((s) => s.showroomNo === item.showroomNo)
      );
  }, [showroomItem, item]);

  useEffect(() => {
    showroomItemStyle && console.log(showroomItemStyle);
  }, [showroomItemStyle]);

  const [like, setLike] = useState(false);
  const [active, setActive] = useState(false);

  //모달창
  const [show, setShow] = useState(false);
  //위시리스트 모달창
  const [wishlistShow, setwishlistShow] = useState(false);
  const [wishDeleteShow, setWishDeleteShow] = useState(false);

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

  return (
    <div className="col">
      <img src={`http://localhost:8080/upload/${item.showroomImgName}`} />

      {/* <button className="showroomBoxHeart" onClick={addWishShowroom}>
        <FavoriteBorderOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
      </button> */}

      <Heart
        className="showroomBoxHeart"
        style={{ width: "2rem" }}
        isActive={active}
        onClick={() => {
          setActive(!active);
          if (!active) {
            addWishShowroom();
          } else {
            deleteWishShowroom();
            alert("취소되었습니다");
          }
        }}
      />
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

      {showroomItemStyle.map((a) => (
        <div
          className="hoverIcon"
          style={{
            left: a.productLocationLeft,
            top: a.productLocationTop,
            position: "absolute",
          }}
        >
          <Link
            to={`/productDetail/${a.productNo}`}
            state={{ productList: item }}
          >
            <HoverIcon
              productItem={a}
              onClick={() => {
                window.location.replace(`/productDetail/${a.productNo}`);
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowroomBox;

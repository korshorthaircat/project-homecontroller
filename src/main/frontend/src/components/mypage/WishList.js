import "../../css/wish.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRef, useState, useCallback, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/mypagesidebar.css";
import {
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Modal,
} from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Heart from "react-heart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";

// import required modules
import { Pagination, Navigation, Mousewheel, Zoom } from "swiper";

function WishList() {
  const [data, setData] = useState();
  //위시아이템
  const [wishItemList, setWishItemList] = useState([]);
  //위시쇼룸
  const [wishShowroomList, setWishShowroomList] = useState([]);
  const [like, setLike] = useState(false);
  const [active, setActive] = useState(false);
  //장바구니 모달창
  const [show, setShow] = useState(false);

  // db에서 회원 데이터 받아오기
  const getWishItem = async () => {
    let url = "http://localhost:8080/api/wishlist/getWishItemList";
    var userInfoStr = sessionStorage.getItem("USER_INFO"); // 로그인한 사용자의 ID 를 가져오기 위한 세션 정보 활용
    var userInfo = JSON.parse(userInfoStr); // 세션에 JSON String 으로 등록된 사용자 정보를 JSON 형태로 변환
    await axios({
      method: "get",
      url: url,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((response) => {
      console.log(response.data);
      //var usrData = response.data.WishList; // DB 조회 결과
      // DB 조회 결과를 화면 input 항목에 반영
      setWishItemList(response.data.wishItemList);
      setWishShowroomList(response.data.wishShowroomList);
    });
  };

  //하트아이콘 클릭시 위시리스트에서 삭제
  //add할때 Map형식으로 담았으므로 삭제할때 Map의 어느 index에서 선택해서 삭제할지 정보를 보내줘야함
  const deleteWishList = (index) => {
    axios({
      url: "http://localhost:8080/api/wishlist/deleteWishItem",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: { productNo: wishItemList[index].productNo },
    }).then((response) => {
      // setWishItemList(response.data.wishItemList);
      window.location.href = "/wishlist";
      // console.log(response.data);
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
      data: { showroomNo: wishShowroomList[index].showroomNo },
    }).then((response) => {});
  };

  const toggleLike = async (e) => {
    setLike(!like);
  };

  //장바구니 클릭시 장바구니에 담기
  const addCart = (index) => {
    axios({
      url: "http://localhost:8080/api/cart/addCart",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      method: "post",
      data: {
        productNo: wishItemList[index].productNo,
        commonCode: "commonCode",
      },
    }).then((response) => {
      // console.log("cart",response.data);
      setShow(true);
    });
  };

  React.useEffect(() => {
    getWishItem();
  }, []);
  return (
    <div>
      <div class="nav_wrapper">
        <nav className="MyNavMenu">
          <ul>
            <li>
              <Link href="/mypage" title="Link">
                MYPAGE
              </Link>
            </li>
            <li>
              <a href="#Link" title="Link">
                나의 정보
              </a>
              <ul>
                <li>
                  <a href="/userupdate" title="Link ">
                    나의정보 수정
                  </a>
                </li>
                <li>
                  <a href="/outmembers" title="Link">
                    멤버십 해지
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/wishlist" title="Link">
                위시리스트
              </a>
            </li>
            <li>
              <a href="#Link" title="Link">
                장바구니
              </a>
            </li>
            <li>
              <a href="#Link" title="Link">
                포인트/쿠폰
              </a>
              <ul>
                <li>
                  <a href="/mypoint" title="Link">
                    포인트
                  </a>
                </li>
                <li>
                  <a href="#Link" title="Link">
                    쿠폰
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#Link" title="Link">
                주문내역
              </a>
              <ul>
                <li>
                  <a href="#Link" title="Link">
                    주문
                  </a>
                </li>
                <li>
                  <a href="#Link" title="Link">
                    반품
                  </a>
                </li>
                <li>
                  <a href="#Link" title="Link">
                    교환
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#Link" title="Link">
                나의 게시글
              </a>
              <ul>
                <li>
                  <a href="#Link" title="Link">
                    자유게시판
                  </a>
                </li>
                <li>
                  <a href="/reviewlist" title="Link">
                    상품후기
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="wishSwiper">
        <h1 className="wishTitle">나의 위시리스트</h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          slidesPerGroup={1}
          // loop={true}
          loopFillGroupWithBlank={false}
          navigation={true}
          Mousewheel={true}
          Zoom={true}
          modules={[Navigation, Mousewheel, Zoom]}
          className="mySwiper"
        >
          {wishItemList &&
            wishItemList.map((wishItem, index) => (
              <div key={index}>
                <SwiperSlide>
                  <div>
                    <img
                      className="wishImg"
                      src={`http://localhost:8080/upload/${wishItem.productImageName}`}
                      onClick={() => {
                        window.location.replace(
                          `/productDetail/${wishItem.productNo}`
                        );
                      }}
                    />
                    <div>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => {
                          deleteWishList(index);
                          alert("삭제되었습니다.");
                        }}
                      >
                        <DeleteOutlinedIcon
                          sx={{ fontSize: 35, fontWeight: "bold" }}
                        />
                      </IconButton>

                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => {
                          addCart(index);
                          alert("장바구니에 추가되었습니다.");
                        }}
                      >
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
      <div className="wishSwiper">
        <h1 className="wishTitle2">나의 위시 쇼룸</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          // loop={true}
          loopFillGroupWithBlank={false}
          navigation={true}
          Mousewheel={true}
          Zoom={true}
          modules={[Navigation, Mousewheel, Zoom]}
          className="mySwiper"
        >
          {wishShowroomList &&
            wishShowroomList.map((wishShowroom, index) => (
              <div key={index}>
                <SwiperSlide>
                  <div>
                    <img
                      className="wishshowroomImg"
                      src={`http://localhost:8080/upload/${wishShowroom.showroomImgName}`}
                      onClick={() => {
                        window.location.replace(
                          `/productDetail/${wishShowroom.ShowroomNo}`
                        );
                      }}
                    />
                    <div>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => {
                          deleteWishList(index);
                          alert("삭제되었습니다.");
                        }}
                      >
                        <DeleteOutlinedIcon
                          sx={{ fontSize: 35, fontWeight: "bold" }}
                        />
                      </IconButton>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        // sx={{ padding: "0 6px", left: 140 }}
                        onClick={"addCart"}
                      >
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
                      </IconButton>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WishList;

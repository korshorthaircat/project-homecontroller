import "../../css/wish.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRef, useState, useCallback, useEffect } from "react";
import Slider from "react-slick";
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

function WishList() {
  const [data, setData] = useState();
  const [wishItemList, setWishItemList] = useState([]);

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
      console.log(response.data.wishItemList);
      //var usrData = response.data.WishList; // DB 조회 결과
      // DB 조회 결과를 화면 input 항목에 반영
      if (
        response.data.wishItemList !== null &&
        typeof response.data.wishItemList !== "undefined" &&
        response.data.wishItemList.length !== 0
      ) {
        setWishItemList(response.data.wishItemList);
      }
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
      console.log(response.data);
    });
  };

  React.useEffect(() => {
    getWishItem();
  }, []);

  //좌우 이동시키는 버튼
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  //좌우 이동시키는 버튼
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrow: true,
    slickNext: true,
  };

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

      <div className="wish">
        <h1 className="wishTitle">나의 위시리스트</h1>
        <Slider {...settings}>
          {wishItemList.map((wishItem, index) => (
            <div key={index}>
              <div className="wItem">
                <img
                  className="wishImg"
                  src={`http://localhost:8080/upload/${wishItem.productImageName}`}
                />
              </div>
              <button
                onClick={() => {
                  deleteWishList(index);
                }}
              >
                삭제
              </button>
              <button>장바구니담기</button>
            </div>
          ))}
        </Slider>

        <h1 className="wishTitle2">나의 위시 쇼룸</h1>
        <Slider {...settings}>
          {wishItemList.map((wishItem, index) => (
            <div key={index}>
              <div className="wShow">
                <img
                  className="wishImg"
                  src={`http://localhost:8080/upload/${wishItem.productImageName}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default WishList;

import "../../css/wish.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useRef, useState, useCallback, useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
      Authorization: 'Bearer ' + sessionStorage.getItem("ACCESS_TOKEN")
    },
   }).then((response) => {
     console.log(response.data.wishItemList);
     //var usrData = response.data.WishList; // DB 조회 결과
     // DB 조회 결과를 화면 input 항목에 반영
     if(
        response.data.wishItemList !== null 
        && typeof response.data.wishItemList !== "undefined" 
        && response.data.wishItemList.length !== 0
      ) {
        setWishItemList(response.data.wishItemList);
      }
   });
 };


//하트아이콘 클릭시 위시리스트에서 삭제 
//add할때 Map형식으로 담았으므로 삭제할때 Map의 어느 index에서 선택해서 삭제할지 정보를 보내줘야함 
const deleteWishList = (index) => {
  axios({
    url: 'http://localhost:8080/api/wishlist/deleteWishItem',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem("ACCESS_TOKEN")
    },
    method: 'post',
    data: {productNo: wishItemList[index].productNo},
  }).then(response => {
    console.log(response.data);
  })
}


 React.useEffect(() => {
  getWishItem();
 }, []);


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
  centerPadding: "400px",
  slidesToShow: 4,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  arrow: true,
  slickNext: true
};
 


    return (
      
      
    <div className="wish">
    <h1 className="wishTitle">나의 위시리스트</h1>
      <Slider {...settings}>

      {wishItemList.map((wishItem, index) => ( 



    <div key={index}>	
		<div className="wItem">
    <img className="wishImg" src={`http://localhost:8080/upload/${wishItem.productImageName}`}/>
    	</div>
      <button onClick={() => {deleteWishList(index)}}>삭제</button><button>장바구니담기</button>

      </div>
      ))}
      
      </Slider>

        

      <h1 className="wishTitle2">나의 위시 쇼룸</h1>
      <Slider {...settings}>

      {wishItemList.map((wishItem, index) => ( 
    <div key={index}>	
		<div className="wShow">
    <img className="wishImg" src={`http://localhost:8080/upload/${wishItem.productImageName}`}/>
    	</div>
      </div>
      ))}
      
      </Slider>
      
    </div>




)
};


export default WishList;
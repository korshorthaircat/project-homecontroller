import React from "react";
import "react-multi-carousel/lib/styles.css";
import "../../css/testt.css";
import Testt from "./Testt";
import Row from "react-bootstrap/Row";

const stateText = [
  {
    title: "가을맞이 패브릭",
    content: "HOME CONTROLLER EXCLUSIVE",
    image: process.env.PUBLIC_URL + "../images/fabric.jpg",
  },
  {
    title: "식탁 & 테이블 인테리어",
    content: "가을 인기 키워드 초특가 쇼핑!",
    image: process.env.PUBLIC_URL + "../images/111.jpg",
  },
  {
    title: "#가을캠핑 & 인테리어",
    content: "가을 인기 키워드 초특가 쇼핑!",
    image:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/exhibitions/cover_image/166261499844986324.jpg?gif=1&w=480&h=320&c=c&webp=1",
  },
  {
    title: "홈카페 BEST 아이템 모아보기",
    content: "레트로 컵부터 SNS대란 와플팬까지!",
    image: process.env.PUBLIC_URL + "../images/homecafe2.jpg",
  },
];

const EventCarousel = () => {
  return (
    <Row>
      {stateText.map((data) => (
        <Testt title={data.title} content={data.content} image={data.image} />
      ))}
    </Row>
  );
};

export default EventCarousel;

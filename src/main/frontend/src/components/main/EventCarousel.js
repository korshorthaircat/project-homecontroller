import React from "react";
import "react-multi-carousel/lib/styles.css";
import "../../css/eventCarousel.css";
import EventCard from "../main/EventCard";
import Row from "react-bootstrap/Row";

const stateText = [
  {
    title: "매트커버/패드&토퍼/베개 BEST",
    content: "사계절 필요한 교체침구!",
    image:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/exhibitions/cover_image/166389952372763333.png?gif=1&w=480&h=320&c=c&webp=1",
    // image: process.env.PUBLIC_URL + "../images/fabric.jpg",
  },
  {
    title: "딩동~ 입점했어요! 이번주 신규 브랜드",
    content: "론칭기념 일주일간 단독 특가",
    image:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/exhibitions/cover_image/166372612549680234.png?gif=1&w=480&h=320&c=c&webp=1",
    // image: process.env.PUBLIC_URL + "../images/111.jpg",
  },
  {
    title: "홈카페 BEST 아이템 모아보기",
    content: "레트로 컵부터 SNS대란 와플팬까지!",
    image:
      "https://image.ohou.se/i/bucketplace-v2-development/uploads/exhibitions/cover_image/166392204867996860.png?gif=1&w=480&h=320&c=c&webp=1",
    // image: process.env.PUBLIC_URL + "../images/homecafe2.jpg",
  },
];

const EventCarousel = () => {
  return (
    <Row>
      {stateText.map((data) => (
        <EventCard
          title={data.title}
          content={data.content}
          image={data.image}
        />
      ))}
    </Row>
  );
};

export default EventCarousel;

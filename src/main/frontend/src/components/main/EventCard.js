import React from "react";
import "../../css/eventCarousel.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const testt = ({ title, content, image }) => {
  return (
    <Col className="cardBox">
      <div className="eventCardImg">
        <img src={image} alt="사진" />
      </div>

      <div className="cardText">
        <p className="cardMainText">{title}</p>
        <p className="cardSubText">{content}</p>
      </div>
    </Col>
  );
};

export default testt;

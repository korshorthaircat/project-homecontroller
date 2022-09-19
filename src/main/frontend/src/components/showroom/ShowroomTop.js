import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/system";
import "../../css/showroom.css";
import ShowroomColor from "./ShowroomColor";

function ShowroomTop() {
  return (
    <Container component="main" maxWidth="xl" style={{ marginTop: "3%" }}>
      <h1 style={{ fontWeight: "bold" }}>인테리어 쇼룸</h1>
      <p style={{ marginBottom: "5%" }}>나만의 색상으로 내 공간을 꾸며보자!</p>
      <div className="showroomMain">
        <ShowroomColor
          imgChange="../../images/showroom_images/pink2.jpg"
          colorChange="red"
          colorname="red"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/yellowshowroom.jpg"
          colorChange="yellow"
          colorname="yellow"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/green1.png"
          colorChange="green"
          colorname="green"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/navy1.jpg"
          colorChange="blue"
          colorname="blue"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/purple.jpg"
          colorChange="purple"
          colorname="purple"
        />
      </div>
      <div className="showroomMain">
        <ShowroomColor
          imgChange="../../images/showroom_images/white2.jpg"
          colorChange="white"
          colorname="white"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/black.jpg"
          colorChange="black"
          colorname="black"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/pink2.jpg"
          colorChange="pink"
          colorname="pink"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/beige.jpg"
          colorChange="beige"
          colorname="beige"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/gray1.png"
          colorChange="gray"
          colorname="gray"
        />
      </div>
      <div className="header_line">
        <hr />
      </div>
    </Container>
  );
}

export default ShowroomTop;

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import React from "react";
import { Container } from "@mui/system";
import "../../css/showroom.css";
import ShowroomColor from "./ShowroomColor";
import axios from "axios";
import { useState } from "react";
import MainShowroomColor from "../../components/main/MainShowroomColor";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const ShowroomTop = () => {
  const [showroomImg, setShowroomImg] = React.useState([]);
  const [showroomItem, setShowroomItem] = useState([]);
  const [showroomImgData, setShowroomImgData] = useState([]);
  const colorArr = [
    "red",
    "yellow",
    "green",
    "blue",
    "purple",
    "white",
    "beige",
    "black",
    "gray",
    "pink",
  ];

  const getColorShowroomList = (color) => {
    console.log(color);
    axios({
      url: "http://localhost:8080/api/main/getColorShowroomList",
      method: "get",
      params: { showroomColor: color },
    })
      .then((response) => {
        console.log(response.data.colorShowroomList);
        setShowroomImg(response.data.colorShowroomList);
        setShowroomItem(response.data.colorShowroomItemList);
        if (response.data.colorShowroomList.length > 4)
          setShowroomImgData(response.data.colorShowroomList.slice(0, 4));
        else setShowroomImgData(response.data.colorShowroomList);
      })
      .catch((e) => {});
  };

  return (
    <Container component="main" maxWidth="xl" style={{ marginTop: "3%" }}>
      <h1 style={{ fontWeight: "bold" }}>인테리어 쇼룸</h1>
      <p style={{ marginBottom: "5%" }}>나만의 색상으로 내 공간을 꾸며보자!</p>
      <div className="showroomMain">
        {colorArr.map((color, index) => (
          <ShowroomColor
            key={index}
            color={color}
            getColorShowroomList={getColorShowroomList}
          />
        ))}
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar sx={{ backgroundColor: "white" }}>
                <Button color="success">color</Button>
                <div className="mainShowroomColor">
                  {colorArr.map((color, index) => (
                    <MainShowroomColor
                      key={index}
                      color={color}
                      getColorShowroomList={getColorShowroomList}
                    />
                  ))}
                </div>
              </Toolbar>
            </AppBar>
          </Box>
        </div>

        {/* <ShowroomColor
          imgChange="../../images/showroom_images/yellow.png"
          colorChange="yellow"
          colorname="yellow"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/green.png"
          colorChange="green"
          colorname="green"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/PantoneBlue.png"
          colorChange="blue"
          colorname="blue"
        />
        <ShowroomColor
          imgChange="../../images/showroom_images/purple.png"
          colorChange="purple"
          colorname="purple"
        />
      </div>
      <div className="showroomMain">
        <ShowroomColor
          imgChange="../../images/showroom_images/PantoneWhite.png"
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
        /> */}
      </div>
      <div className="header_line">
        <hr />
      </div>
    </Container>
  );
};

export default ShowroomTop;

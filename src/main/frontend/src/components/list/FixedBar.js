import { useState } from "react";
import { useEffect } from "react";
import "../../css/FixedBar.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ShowroomBox from "../main/ShowroomBox";
import React from "react";
import axios from "axios";
import MainShowroomColor from "../main/MainShowroomColor";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const FixedBar = () => {
  const [showroomImg, setShowroomImg] = React.useState([]);
  const [showroomImgData, setShowroomImgData] = useState([]);
  const [showroomItem, setShowroomItem] = useState([]);
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

  let showroomListUrl = "http://localhost:8080/api/main/getShowroomList";

  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 1100) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <div className="App">
      <div className={ScrollActive ? "fixedBox fixed" : "fixedBox"}>
        <div className="showroomMain">
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
        </div>
      </div>
    </div>
  );
};

export default FixedBar;

import React from "react";
import ShowroomTop from "./ShowroomTop";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ShowroomBox from "../main/ShowroomBox";
import "../../css/showroom.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { width } from "@mui/system";
import Typography from "@mui/material/Typography";
import FixedBar from "../list/FixedBar";
import MainShowroomColor from "../main/MainShowroomColor";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const InteriorShowroomFixedBartest = () => {
  const [showroomImg, setShowroomImg] = React.useState([]);
  const [showroomImgData, setShowroomImgData] = useState([]);
  const [showroomItem, setShowroomItem] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);

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
  //const [showroomProductItem, setShowroomProductItem] = useState([]);

  let showroomListUrl = "http://localhost:8080/api/main/getShowroomList";
  // let showroomProductItemUrl =
  //   "http://localhost:8080/api/product/getShowroomProductItem";

  const list = () => {
    axios
      .get(showroomListUrl)
      .then((response) => {
        console.log(response.data);
        setShowroomImg(response.data.showroomList);
        setShowroomItem(response.data.showroomItemList);
        setShowroomImgData(response.data.showroomList.slice(0, 4));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
  }, []);

  useEffect(() => {
    console.log("sss", showroomImg);
    console.log("ssss", showroomImg.slice(4 * cnt, 4 * (cnt + 1)));

    let copy = showroomImgData.concat(
      showroomImg.slice(4 * cnt, 4 * (cnt + 1))
    );

    console.log(copy);
    setShowroomImgData(copy);
    //getShowroomProductItem();
  }, [cnt]);

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

  //Fixedbar
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
    <div>
      <ShowroomTop></ShowroomTop>
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

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {showroomImgData.map((a) => (
              <ShowroomBox item={a} showroomItem={showroomItem} />
            ))}
          </Grid>
        </Box>
      </div>

      <div className="mainShowroom_MoreBtn">
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: 12.5 }}
          onClick={() => {
            setCnt(cnt + 1);
            console.log("cnt", cnt);
            console.log("data", showroomImgData);
          }}
        >
          쇼룸 더 보기
        </Button>
      </div>
    </div>
  );
};

export default InteriorShowroomFixedBartest;

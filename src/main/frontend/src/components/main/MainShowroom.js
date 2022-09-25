import React, { useState } from "react";
import MainShowroomColor from "../../components/main/MainShowroomColor";
import "../../css/mainShowroom.css";
import Button from "@mui/material/Button";
import axios from "axios";
import ShowroomBox from "./ShowroomBox";
import { useEffect } from "react";

const MainShowroom = () => {
  const [showroomImg, setShowroomImg] = React.useState([]);

  const [showroomImgData, setShowroomImgData] = useState([]);

  const [showroomItem, setShowroomItem] = useState([]);

  const [cnt, setCnt] = useState(0);

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

  let showroomListUrl = "http://localhost:8080/api/main/getShowroomList";

  const list = () => {
    axios
      .get(showroomListUrl, {})
      .then((response) => {
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
    console.log("showroomImg", showroomImg);
    console.log("slice", showroomImg.slice(4 * cnt, 4 * (cnt + 1)));

    let copy = showroomImgData.concat(
      showroomImg.slice(4 * cnt, 4 * (cnt + 1))
    );
    console.log(copy);
    setShowroomImgData(copy);
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

  return (
    <div>
      <div className="mainShowroomColor">
        {colorArr.map((color, index) => (
          <MainShowroomColor
            key={index}
            color={color}
            getColorShowroomList={getColorShowroomList}
          />
        ))}
      </div>

      {/* <div className='showroomBox'> */}
      {/* <div className='container'>
          <div className='row'>
        {showroomImg.map((test, i) => {
          return <Testt
          box={ShowroomBox[i]} i={i} key={i}
          />
        })}
        </div>
        </div> */}
      {/* </div> */}

      <div class="showroomcontainer text-center">
        <div class="row row-cols-2">
          {showroomImgData.map((a) => (
            <ShowroomBox item={a} showroomItem={showroomItem} />
          ))}
        </div>
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
          더 보기
        </Button>
      </div>
    </div>
  );
};

export default MainShowroom;

import React from "react";
import ShowroomTop from "../showroom/ShowroomTop";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ShowroomBox from "../main/ShowroomBox";
import "../../css/showroom.css";

const InteriorShowroom = () => {
  const [showroomImg, setShowroomImg] = React.useState([]);

  const [showroomImgData, setShowroomImgData] = useState([]);

  const [cnt, setCnt] = useState(0);

  let showroomListUrl = "http://localhost:8080/api/main/getShowroomList";

  const list = () => {
    axios
      .get(showroomListUrl, {})
      .then((response) => {
        setShowroomImg(response.data.data);
        setShowroomImgData(response.data.data.slice(0, 4));
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
  }, [cnt]);

  const getColorShowroomList = (color) => {
    console.log(color);
    axios({
      url: "http://localhost:8080/api/main/getColorShowroomList",
      method: "get",
      params: { showroomColor: color },
    })
      .then((response) => {
        console.log(response.data.data);
        setShowroomImg(response.data.data);
        if (response.data.data.length > 4)
          setShowroomImgData(response.data.data.slice(0, 4));
        else setShowroomImgData(response.data.data);
      })
      .catch((e) => {});
  };

  return (
    <div>
      <div>
        <ShowroomTop></ShowroomTop>
        {showroomImgData.map((a) => (
          <ShowroomBox item={a} />
        ))}
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

export default InteriorShowroom;

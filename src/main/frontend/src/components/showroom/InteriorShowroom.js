import React from "react";
import ShowroomTop from "../showroom/ShowroomTop";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ShowroomBox from "../main/ShowroomBox";
import "../../css/showroom.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { width } from "@mui/system";

const InteriorShowroom = () => {
  const [showroomImg, setShowroomImg] = React.useState([]);

  const [showroomImgData, setShowroomImgData] = useState([]);

  const [showroomItem, setShowroomItem] = useState([]);

  const [cnt, setCnt] = useState(0);

  let showroomListUrl = "http://localhost:8080/api/main/getShowroomList";

  const list = () => {
    axios
      .get(showroomListUrl, {})
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
      <div>
        <ShowroomTop></ShowroomTop>
        <Box sx={{ flexGrow: 4 }}>
          <Grid container spacing={2} columns={16}>
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
          더 보기
        </Button>
      </div>
    </div>
  );
};

export default InteriorShowroom;

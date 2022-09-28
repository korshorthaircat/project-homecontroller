import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import HoverIcon from "./HoverIcon";
import axios from "axios";
import ShowroomBox from "./ShowroomBox";

const showRoomObjlocation = [
  { showroomNo: 1, productNo: 50, stlye: { left: "30%", top: "45%" } },
  { showroomNo: 1, productNo: 51, left: 50, top: "45%" },
  { showroomNo: 1, productNo: 56, left: 30, top: "45%" },
  { showroomNo: 1, productNo: 51, left: 50, top: "45%" },
];

const MainInteriorImage = () => {
  //const [showroomImg, setShowroomImg] = React.useState([]);
  const [showroomItem, setShowroomItem] = React.useState([]);
  const [showroomImgData, setShowroomImgData] = React.useState([]);

  let showroomListUrl = "http://localhost:8080/api/main/getShowroomList";

  const list = () => {
    axios
      .get(showroomListUrl, {})
      .then((response) => {
        setShowroomItem(response.data.showroomItemList);
        setShowroomImgData(
          response.data.showroomList.filter(
            (showroom) => showroom.showroomNo == 35 || showroom.showroomNo == 36
          )
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
  }, []);

  return (
    <div>
      <div class="showroomcontainer text-center">
        <div class="row row-cols-2">
          {showroomImgData.map((a) => (
            <ShowroomBox item={a} showroomItem={showroomItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainInteriorImage;

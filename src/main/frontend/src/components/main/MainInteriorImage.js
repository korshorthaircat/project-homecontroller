import React from "react";
import "../../css/mainInteriorImage.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { BsRecordCircle } from "react-icons/bs";
import HoverIcon from "./HoverIcon";

const MainInteriorImage = () => {
  const showRoomObjlocation = [
    { showroomNo: 1, productNo: 50, left: "30%", top: "45%" },
    { showroomNo: 1, productNo: 51, left: "50%", top: "45%" },
    { showroomNo: 2, productNo: 56, left: "30%", top: "45%" },
    { showroomNo: 2, productNo: 51, left: "50%", top: "45%" },
  ];

  return (
    <div>
      <div className="ttt">
        <div className="aaa"></div>
        <div className="bbb"></div>
        {/* <div className='ccc'></div> */}
      </div>
      <div className="hoverIcon">
        <HoverIcon />
      </div>
    </div>
  );
};

export default MainInteriorImage;

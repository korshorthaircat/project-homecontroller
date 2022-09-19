import React from "react";
import "../../css/mainInteriorImage.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import HoverIcon from "./HoverIcon";

const MainInteriorImage = () => {
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

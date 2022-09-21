import React from "react";
import "../../css/mainShowroom.css";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect } from "react";
import { useState } from "react";
import HoverIcon from "./HoverIcon";

const ShowroomBox = ({ item, showroomItem }) => {
  const [showroomItemStyle, setShowroomItemStyle] = useState([]);

  useEffect(() => {
    showroomItem &&
      item &&
      setShowroomItemStyle(
        showroomItem.filter((s) => s.showroomNo === item.showroomNo)
      );
  }, [showroomItem, item]);

  useEffect(() => {
    showroomItemStyle && console.log(showroomItemStyle);
  }, [showroomItemStyle]);

  return (
    <div className="col">
      <img src={`http://localhost:8080/upload/${item.showroomImgName}`} />

      <button className="showroomBoxHeart">
        <FavoriteBorderOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
      </button>

      {showroomItemStyle.map((a) => (
        <div
          className="hoverIcon"
          style={{
            left: a.productLocationLeft,
            top: a.productLocationTop,
            position: "absolute",
          }}
        >
          <HoverIcon />
        </div>
      ))}
    </div>
  );
};

export default ShowroomBox;

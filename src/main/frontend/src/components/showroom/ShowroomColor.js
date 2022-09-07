import React from "react";
import "../../css/mainShowroom.css";

const ShowroomColor = (props) => {
  return (
    <div>
      <div className={`showroomColor ${props.color}`}></div>
    </div>
  );
};

export default ShowroomColor;

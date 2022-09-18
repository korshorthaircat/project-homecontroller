import React from "react";
import "../../css/showroomColorThumbnail.css";

const ShowroomColor = (props) => {
  return (
    <div>
      <img
        className={"showroomColorThumbnail"}
        src={props.imgChange}
        alt=""
        onClick={() => props.getColorShowroomList(props.color)}
      />
      <div className="showroombuttonbox">
        <button
          className={`showroomColor1 ${props.colorChange}`}
          onClick={() => props.getColorShowroomList(props.color)}
        />
        <p>{props.colorname}</p>
      </div>
    </div>
  );
};

export default ShowroomColor;

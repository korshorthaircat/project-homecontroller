import React from "react";
import "../../css/productCategory.css";

const Categoryinfo = (props) => {
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>{props.title}</h1>
      <p className="pdetail">{props.content}</p>
    </div>
  );
};

export default Categoryinfo;

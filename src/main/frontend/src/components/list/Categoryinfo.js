import React from "react";
import "../../css/productCategory.css";

const Categoryinfo = ({ item }) => {
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>{item.title}</h1>
      <p className="pdetail">{item.content}</p>
    </div>
  );
};

export default Categoryinfo;

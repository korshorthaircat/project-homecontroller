import React, { useState, useEffect } from "react";
import "../../css/heartButton.css";
import styled from "styled-components";

// const HeartImg = "/images/heartFull2.png";
// const EmptyHeartImg = "/images/heartEmpty.png";

const HeartButton = (like, { onClick }) => {
  // return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;

  return (
    <div>
      <img
        className="a01"
        src={
          like
            ? "https://cdn-icons-png.flaticon.com/128/138/138533.png"
            : "https://cdn-icons-png.flaticon.com/128/3717/3717486.png"
        }
        View
        style={{
          width: "20px",
          flex: 1,
          flexDirection: "row",
        }}
      />
    </div>
  );
};

export default HeartButton;

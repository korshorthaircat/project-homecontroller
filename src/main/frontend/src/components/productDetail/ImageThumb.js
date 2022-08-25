import Box from "../Box";
import { useState } from "react";
import "../../css/ProductDetail.css";
import ProductMainInfo from "./ProductMainInfo";
import ProductDetailInfo from "./ProductDetailInfo";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
  },
  img2: {
    name: "img2",
    img: process.env.PUBLIC_URL + "/images/inter (2).png",
  },
  img3: {
    name: "img3",
    img: process.env.PUBLIC_URL + "/images/inter (3).png",
  },
  img4: {
    name: "img4",
    img: process.env.PUBLIC_URL + "/images/inter (2).png",
  },
};

function ImageThumb() {
  const [userSelect, setUserSelect] = useState(choice.img1);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <>
      <div className="main">
        <div className="imgBox">
          <div style={{ textAlign: "center" }}>
            <Box item={userSelect} />
          </div>
          <div className="thumbImg">
            <input
              className="btn"
              onClick={() => play("img1")}
              type="image"
              src="/images/inter (1).png"
              alt="1번째사진"
            ></input>
            <input
              className="btn"
              onClick={() => play("img2")}
              type="image"
              src="/images/inter (2).png"
              alt="2번째사진"
            ></input>
            <input
              className="btn"
              onClick={() => play("img3")}
              type="image"
              src="/images/inter (3).png"
              alt="3번째사진"
            ></input>
            <input
              className="btn"
              onClick={() => play("img4")}
              type="image"
              src="/images/inter (2).png"
              alt="4번째사진"
            ></input>
          </div>
          <p>
            <hr className="line1"></hr>
          </p>

          <ProductDetailInfo />
        </div>
        <div className="contentBox">
          <ProductMainInfo />
        </div>
      </div>
    </>
  );
}

export default ImageThumb;

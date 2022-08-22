import Box from "../Box";
import { useState } from "react";
import "../../css/ProductDetail.css";
import ProductMainInfo from "./ProductMainInfo";

const choice = {
  img1: {
    name: "img1",
    img: "https://thumbs.dreamstime.com/b/image-polygonal-rock-icon-low-poly-stone-vector-illustration-225914518.jpg",
  },
  img2: {
    name: "img2",
    img: "https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU=",
  },
  img3: {
    name: "img3",
    img: "https://t1.daumcdn.net/cfile/blog/1233814650FE193E27",
  },
  img4: {
    name: "img4",
    img: "https://t1.daumcdn.net/cfile/blog/1233814650FE193E27",
  },
};

function ImageThumb() {
  const [userSelect, setUserSelect] = useState(choice.img1);

  const play = (userChoice) => {
    console.log("선택됨!", userChoice);
    setUserSelect(choice[userChoice]);
  };

  return (
    <div className="imgBox">
      <div className="mainImg">
        <Box item={userSelect} />
      </div>
      <div className="thumbImg">
        <input
          className="btn"
          onClick={() => play("img1")}
          type="image"
          src="https://thumbs.dreamstime.com/b/image-polygonal-rock-icon-low-poly-stone-vector-illustration-225914518.jpg"
          alt="1번째사진"
        ></input>
        <input
          className="btn"
          onClick={() => play("img2")}
          type="image"
          src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="
          alt="2번째사진"
        ></input>
        <input
          className="btn"
          onClick={() => play("img3")}
          type="image"
          src="https://t1.daumcdn.net/cfile/blog/1233814650FE193E27"
          alt="3번째사진"
        ></input>
        <input
          className="btn"
          onClick={() => play("img4")}
          type="image"
          src="https://t1.daumcdn.net/cfile/blog/1233814650FE193E27"
          alt="4번째사진"
        ></input>
      </div>

      <ProductMainInfo />
      
      <div>
        <img src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="></img>
        <img src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="></img>
        <img src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="></img>
        <img src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="></img>
        <img src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="></img>
        <img src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="></img>
        <img src="https://media.istockphoto.com/vectors/colorful-scissors-vector-illustration-vector-id1174376519?b=1&k=20&m=1174376519&s=170667a&w=0&h=OnVbdeZSIHJivuzecd31E60OqbBF6rtlqg1ooD5q4yU="></img>
        
      </div>
    </div>
  );
}

export default ImageThumb;

import { useState, useEffect } from "react";
import { UseParams } from "react-router-dom";

function Detail(props) {
  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      console.log(1);
    }
  });

  let [count, setCount] = useState(0);

  let { id } = UseParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
    </div>
  );
}

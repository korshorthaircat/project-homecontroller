import * as React from "react";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";

export default function NavRevInsert() {
  return (
    <div>
      <div className="reviewPage">
        <p style={{ fontSize: "23px", fontWeight: "700" }}>
          상품평을 작성해주세요
        </p>

        <p style={{ fontSize: "15px" }}>
          최근 구매한 제품이 마음에 드시나요?
          <br />
          다른 사람들과 구매경험을 공유해보세요!
        </p>

        <p
          className="reviewGrade"
          style={{ fontSize: "20px", marginTop: "50px" }}
        >
          ★★★★★
        </p>
        <p style={{ fontSize: "17px", fontWeight: "700", marginTop: "50px" }}>
          {" "}
          상품평 제목
        </p>
        <input id="reviewInputTitle"></input>

        <p style={{ fontSize: "17px", fontWeight: "700", marginTop: "50px" }}>
          상품평
        </p>
        <textarea id="reviewInputContent"></textarea>
        <button type="button" id="RevInsert">
          상품평 제출
        </button>
      </div>
    </div>
  );
}

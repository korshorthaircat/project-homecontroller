import * as React from "react";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";
import RevInserNav from "./RevInsertNav";
import RevStar from "./RevStar";

export default function NavContentRev() {
  return (
    <>
      <div className="ReviewPage">
        <p id="acodianProductName">상품평</p>

        <p className="gradeNo">4.3</p>
        <div id="Review">
          <RevStar />
          <p className="RevproductRevCount" style={{ fontSize: "20px" }}>
            (267)
          </p>
        </div>

        <button type="button" id="RevInsert">
          <div>
            <RevInserNav />
          </div>
          상품평 작성
        </button>

        <hr />

        <div className="revContents">
          <hr />
          <p className="revTitle">안녕하세요.</p>
          <div className="revRow">
            <p className="revGrade">★★★★☆</p>
            <p className="revDate" style={{ float: "right" }}>
              2022/08/25
            </p>
            <p style={{ float: "right" }}>·</p>
            <p className="revUserName" style={{ float: "right" }}>
              비트캠프
            </p>
          </div>
          <textarea rows="5" className="revContent" disabled>
            서랍장은 좋다 아주좋다 서랍높이도 다르고 크기도달라정리하기좋다 다만
            이서랍장과 어울리는 거울이 있었으면 하는 아쉬움에 별하나를 뺏어요
            어울리는 거울사러 다니기가 좀 그랬어요
          </textarea>
        </div>
      </div>
    </>
  );
}

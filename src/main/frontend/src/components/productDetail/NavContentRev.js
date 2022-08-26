import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";

export default function NavContentRev() {
  return (
    <>
      <div className="ReviewPage">
        <p id="acodianProductName">상품평</p>

        <p className="gradeNo">4.3</p>
        <div id="Review">
          <p className="RevproductGrade" style={{ fontSize: "20px" }}>
            ★★★★★
          </p>
          <p className="RevproductRevCount" style={{ fontSize: "20px" }}>
            (267)
          </p>
        </div>

        <button type="button" id="RevInsert">
          상품평 작성
        </button>

        <hr />
        <p style={{ fontSize: "17px", fontWeight: "700" }}>평가 필터링</p>
        <div>
          <div class="circle">
            <p className="circleNo">
              1<img className="star" src="/images/fullstar.png"></img>
            </p>
          </div>
          <div class="circle">
            <p className="circleNo">
              2<img className="star" src="/images/fullstar.png"></img>
            </p>
          </div>
          <div class="circle">
            <p className="circleNo">
              3<img className="star" src="/images/fullstar.png"></img>
            </p>
          </div>
          <div class="circle">
            <p className="circleNo">
              4<img className="star" src="/images/fullstar.png"></img>
            </p>
          </div>
          <div class="circle">
            <p className="circleNo">
              5<img className="star" src="/images/fullstar.png"></img>
            </p>
          </div>
        </div>
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

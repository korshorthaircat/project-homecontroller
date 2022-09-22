import axios from "axios";
import * as React from "react";
import { API_BASE_URL } from "../../app-config";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";
import RevStar from "./RevStar";

export default function NavRevInsert() {
  const [reviewList, setReviewList] = React.useState([]); //전체 게시글 목록

  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewContent, setReviewContent] = React.useState("");
  const [reviewGrade, setReviewGrade] = React.useState();

  const [reviewNo, setReviewNo] = React.useState({}); //조회하고자 하는 게시글의 정보

  const onRevTitleHandler = (event) => {
    setReviewTitle(event.currentTarget.value);
  };

  const onRevContentHandler = (event) => {
    setReviewContent(event.currentTarget.value);
  };



  //상품평등록하는 함수
  const insertReview = () => {
    axios({
      url: API_BASE_URL + "/api/review/insertReview",
      method: "post",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      data: {
        reviewTitle: reviewTitle,
        reviewContent: reviewContent,
        reviewGrade: reviewGrade,
      },
    }).then((response) => {
      //회원가입 성공시 로그인 페이지로 이동
      alert("상품평 작성이 완료되었습니다.");
      window.location.href = "/productDetail";
    });
  };



  React.useEffect(() => {
    insertReview();
  }, []);

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
          <RevStar sx={{ width: "200px" }} />
        </p>
        <p style={{ fontSize: "17px", fontWeight: "700", marginTop: "50px" }}>
          {" "}
          상품평 제목
        </p>
        <input id="reviewInputTitle" onChange={onRevTitleHandler}></input>

        <p style={{ fontSize: "17px", fontWeight: "700", marginTop: "50px" }}>
          상품평
        </p>
        <textarea
          id="reviewInputContent"
          onChange={onRevContentHandler}
        ></textarea>
        <button type="button" id="RevInsert" onClick={insertReview}>
          상품평 제출
        </button>
      </div>
    </div>
  );
}

import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";
import RevInsertNav from "./RevInsertNav";
import RevStar from "./RevStar";

export default function NavContentRev() {
  const { productNo } = useParams();
  const [reviewList, setReviewList] = React.useState([]); //전체 게시글 목록

  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewContent, setReviewContent] = React.useState("");
  const [reviewGrade, setReviewGrade] = React.useState();

  const [reviewNo, setReviewNo] = React.useState({}); //조회하고자 하는 게시글의 정보

  //다시 불러온 상품정보 저장
  const [orderHistory, setOrderHistory] = React.useState(0);
  const [orderNoList, setOrderNoList] = React.useState([]);

  //게시글을 수정하는 함수(admin이 답변을 등록할 때 사용)
  const updateReview = () => {
    axios({
      url: "http://localhost:8080/api/inquiry/updateReview",
      method: "post",
      data: {
        ReviewNo: reviewNo,
      },
    })
      .then((response) => {
        setReviewList(response.data);
        window.location.href = "/productDetail";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // useEffect(() => {
  //   console.log(orderHistory);
  // }, [orderHistory]);

  useEffect(() => {
    getProducts();
  }, []);

  //게시글을 삭제하는 함수(admin이 답변을 등록할 때 사용)
  const deleteReview = () => {
    axios({
      url: "http://localhost:8080/api/inquiry/deleteReview",
      method: "delete",
      data: {
        reviewNo: reviewNo,
      },
    })
      .then((response) => {
        setReviewList(response.data);
        window.location.href = "/productDetail";
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //상품 정보 조회하는 함수
  const getProducts = async () => {
    axios({
      url: `http://localhost:8080/api/product/productDetail`,
      method: "get",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      params: { productNo: productNo },
    }).then((response) => {
      console.log(response.data);
      setOrderHistory((prev) => response.data.orderHistory);
      setOrderNoList((prev) => response.data.orderNoList);
    });
  };

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

        {orderNoList.length > 0 ? (
          <button type="button" id="RevInsert">
            <div>
              <RevInsertNav />
            </div>
            상품평 작성
          </button>
        ) : (
          <></>
        )}
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

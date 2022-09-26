import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";
import RevInsertNav from "./RevInsertNav";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function NavContentRev() {
  const { productNo } = useParams();

  const [reviewList, setReviewList] = React.useState([]); //전체 리뷰 목록

  const [avgRevGrade, setAvgRevGrade] = React.useState(0);
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewContent, setReviewContent] = React.useState("");
  const [reviewGrade, setReviewGrade] = React.useState();

  const [reviewNo, setReviewNo] = React.useState({}); //조회하고자 하는 게시글의 정보

  //다시 불러온 상품정보 저장
  const [orderHistory, setOrderHistory] = React.useState(0);
  const [orderNoList, setOrderNoList] = React.useState([]);

  //상품 정보 조회
  const getProducts = async () => {
    axios({
      url: `http://localhost:8080/api/product/productDetail`,
      method: "get",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      params: { productNo: productNo },
    }).then((response) => {
      // console.log(response.data);
      setOrderHistory((prev) => response.data.orderHistory);
      setOrderNoList((prev) => response.data.orderNoList);
    });
  };

  // 상품 별점 평균 조회
  const getAvgRevGradeByProductNo = () => {
    axios({
      url: `http://localhost:8080/api/review/getAvgRevGradeByProductNo`,
      method: "get",
      params: { productNo: productNo },
    }).then((response) => {
      // console.log(response.data);
      setAvgRevGrade(response.data.avgRevGrade);
    });
  };

  //상품리뷰 리스트 조회(전체 상품평을 다 불러옴)
  //상세페이지 화면단에서는 제품번호를 기준으로 잘라서 쓰고,
  //마이페이지 화면단에서는 유저아이디를 기준으로 잘라서 써야 함
  const getReviewList = () => {
    axios({
      url: "http://localhost:8080/api/review/getReviewList",
      method: "post",
      // params: { productNo: productNo },
    })
      .then((response) => {
        // console.log(response.data.data);
        setReviewList(response.data.data);
      })
      .catch((e) => {});
  };

  useEffect(() => {
    getProducts();
    getAvgRevGradeByProductNo();
    getReviewList();
  }, []);

  return (
    <>
      <div className="ReviewPage">
        <p id="acodianProductName">상품평</p>

        <p>평균 별점 </p>
        <p className="gradeNo">{avgRevGrade}</p>
        <div id="Review">
          <Rating name="read-only" value={avgRevGrade} readOnly />
          <p className="RevproductRevCount" style={{ fontSize: "20px" }}>
            ({reviewList.filter((r) => r.productNo == productNo).length})
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

        {reviewList ? (
          reviewList.map((r, index) =>
            r.productNo == productNo ? (
              <>
                <hr />
                <p className="revTitle">{r.reviewTitle}</p>
                <div className="revRow">
                  <p className="revGrade">
                    <Rating name="read-only" value={r.reviewGrade} readOnly />
                    {r.reviewGrade}
                  </p>
                  <p className="revDate" style={{ float: "right" }}>
                    {r.reviewRegdate.replace("T", " ")}
                  </p>
                  <p style={{ float: "right" }}>·</p>
                  <p className="revUserName" style={{ float: "right" }}>

                    {r.userId.replaceAll(/(?<=.{2})./gi,"*")}

                  </p>
                </div>
                <textarea
                  rows="5"
                  className="revContent"
                  value={r.reviewContent}
                  disabled
                ></textarea>
              </>
            ) : (
              <></>
            )
          )
        ) : (
          <></>
        )}

        <div className="revContents"></div>
      </div>
    </>
  );
}

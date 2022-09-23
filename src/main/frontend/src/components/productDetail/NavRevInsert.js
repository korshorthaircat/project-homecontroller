import { display } from "@mui/system";
import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";
import "../../css/ProductDetail.css";
import RevStar from "./RevStar";

export default function NavRevInsert() {
  const { productNo } = useParams();
  const [reviewList, setReviewList] = React.useState([]); //전체 게시글 목록

  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewContent, setReviewContent] = React.useState("");
  const [reviewGrade, setReviewGrade] = React.useState(5);
  const [reviewOrderNo, setReviewOrderNo] = React.useState(0);
  const [reviewCommonCode, setReviewCommonCode] = React.useState("");

  const [reviewNo, setReviewNo] = React.useState({}); //조회하고자 하는 게시글의 정보

  const onRevTitleHandler = (event) => {
    setReviewTitle(event.currentTarget.value);
  };

  const onRevContentHandler = (event) => {
    setReviewContent(event.currentTarget.value);
  };

  //다시 불러온 상품정보 저장
  const [orderHistory, setOrderHistory] = React.useState(0);
  const [orderNoList, setOrderNoList] = React.useState([]);
  const [commonCodeList, setCommonCodeList] = React.useState([]);

  //상품평 등록
  const insertReview = () => {
    axios({
      url: `http://localhost:8080/api/review/insertReview`,
      method: "post",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      data: {
        productNo: productNo,
        reviewTitle: reviewTitle,
        reviewContent: reviewContent,
        reviewGrade: reviewGrade,
        orderNo: reviewOrderNo,
        commonCode: reviewCommonCode,
      },
    }).then((response) => {
      alert("상품평 작성이 완료되었습니다.");
      window.location.href = "/productDetail/" + productNo;
    });
  };

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
      console.log(response.data);
      setOrderHistory((prev) => response.data.orderHistory);
      setOrderNoList((prev) => response.data.orderNoList);
      setCommonCodeList((prev) => response.data.commonCodeList);
    });
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  React.useEffect(() => {
    setReviewOrderNo(orderNoList[0]);
    setReviewCommonCode(commonCodeList[0]);
  }, [orderNoList, commonCodeList]);

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

        <p style={{ fontSize: "17px", fontWeight: "700", marginTop: "50px" }}>
          나의 주문번호
        </p>
        <input id="orderNo" value={orderNoList.slice(0, 1)} readonly></input>
        <input id="productNo" value={productNo} type="hidden"></input>
        <input
          id="commonCode"
          value={commonCodeList.slice(0, 1)}
          type="hidden"
        ></input>

        <button type="button" id="RevInsert" onClick={insertReview}>
          상품평 제출
        </button>
      </div>
    </div>
  );
}

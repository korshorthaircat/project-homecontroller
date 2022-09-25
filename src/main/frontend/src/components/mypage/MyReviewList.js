import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../css/MyInquiry.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Paging from "./Paging";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import React, { useState, useCallback, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 0,
  padding: 0,
};

const modalstyle = {
  backgroundColor: "lightgray",
  width: "30%",
};

const MyReviewList = () => {
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

  const [inquiryTitle, setInquiryTitle] = React.useState("");
  // const [inquiryContent, setInquiryContent] = React.useState("");
  // const [inquiryAnswer, setInquiryAnswer] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [inquiryList, setInquiryList] = React.useState([]); //전체 게시글 목록
  // const [pagingInquiryList, setPagingInquiryList] = React.useState([]); //페이징 처리한 게시글 모곩

  const [inquiryInfo, setInquiryInfo] = React.useState({}); //조회하고자 하는 게시글의 정보

  const handleOpenForWriting = () => {
    setOpen(true);
  };

  const handleOpen = (index) => {
    setOpen(true);
    // setInquiryInfo(pagingInquiryList[index]);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //페이지에 따라 데이터 5개씩 잘라넣는 userList
  // React.useEffect(() => {
  //   setPagingInquiryList(inquiryList.slice(offset, offset + limit));
  // }, [inquiryList]);

  //페이지네이션
  // const [limit, setLimit] = React.useState(5);
  // const [page, setPage] = React.useState(1);
  // const offset = (page - 1) * limit;
  // const handlePaging = (currentPage) => {
  //   setPage((prev) => currentPage);
  // };

  //페이지 바뀔 때마다 잘라넣는 inquiryList 변경
  // React.useEffect(() => {
  //   setPagingInquiryList((prev) => inquiryList.slice(offset, offset + limit));
  // }, [page, offset, limit]);

  // const changeLimit = (e) => {
  //   setLimit((prev) => e.target.value);
  //   setPage(1);
  // };

  //상품 정보 조회
  // const getProducts = async () => {
  //   axios({
  //     url: `http://localhost:8080/api/product/productDetail`,
  //     method: "get",
  //     headers: {
  //       Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
  //     },
  //     params: { productNo: productNo },
  //   }).then((response) => {
  //     // console.log(response.data);
  //     setOrderHistory((prev) => response.data.orderHistory);
  //     setOrderNoList((prev) => response.data.orderNoList);
  //   });
  // };

  // 상품 별점 평균 조회
  // const getAvgRevGradeByProductNo = () => {
  //   axios({
  //     url: `http://localhost:8080/api/review/getAvgRevGradeByProductNo`,
  //     method: "get",
  //     params: { productNo: productNo },
  //   }).then((response) => {
  //     // console.log(response.data);
  //     setAvgRevGrade(response.data.avgRevGrade);
  //   });
  // };

  //상품리뷰 리스트 조회(전체 상품평을 다 불러옴)
  //상세페이지 화면단에서는 제품번호를 기준으로 잘라서 쓰고,
  //마이페이지 화면단에서는 유저아이디를 기준으로 잘라서 써야 함

  const [userInfoStr, setUserInfoStr] = useState("");
  const getMyReviewList = () => {
    // 로그인한 사용자의 ID 를 가져오기 위한 세션 정보 활용
    axios({
      url: "http://localhost:8080/api/review/getReviewList",
      method: "post",
      // data: { userId: userInfo.userId },
      // params: { productNo: productNo },
    })
      .then((response) => {
        setReviewList(response.data.data);
      })
      .catch((e) => {});
  };

  useEffect(() => {
    // getProducts();
    // getAvgRevGradeByProductNo();
    getMyReviewList();
    setUserInfoStr(JSON.parse(sessionStorage.getItem("USER_INFO")));
  }, []);

  // const onInquiryTitleHandler = (e) => {
  //   setInquiryTitle(e.curretTarget.value);
  // };

  //제목 셀렉트
  // const [option, setOption] = React.useState(" ");
  // const onOptionHandler = (e) => {
  //   setOption(e.target.value);
  //   setInquiryTitle(e.target.value);
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   const updateInquiry = {
  //     ...inquiryInfo,
  //     [e.target.name]: e.target.value,
  //   };
  //   setInquiryInfo(updateInquiry);
  // };

  return (
    <div className="wrap">
      <h1>고객 지원</h1>
      <h5>문의 게시판</h5>

      {/*페이지네이션 표출할 데이터양*/}
      {/* <label className="orderOption">
        페이지 당 표시할 게시물 수:&nbsp;
        <select type="number" value={limit} onChange={changeLimit}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label> */}

      {/* 게시글 검색바 */}
      {/*
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          float: "right",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="게시글 검색"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "150px" }}>
                번호
              </TableCell>
              <TableCell align="center">제목</TableCell>
              <TableCell align="center" sx={{ width: "200px" }}>
                작성자
              </TableCell>
              <TableCell align="center" sx={{ width: "200px" }}>
                작성일
              </TableCell>
              <TableCell align="center" sx={{ width: "200px" }}>
                처리현황
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewList ? (
              reviewList.map((r, index) =>
                userInfoStr.userId == r.userId ? (
                  <>
                    <TableRow
                      key={r.reviewNo}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {r.reviewNo}
                      </TableCell>
                      <TableCell
                        align="center"
                        id={`detailTitle${index}`}
                        onClick={() => handleOpen(index)}
                      >
                        {r.reviewTitle}
                      </TableCell>
                      <TableCell align="center">{r.userId}</TableCell>
                      <TableCell align="center">{r.reviewRegdate}</TableCell>
                      {/* <TableCell align="center">{r.reviewState}</TableCell> */}
                    </TableRow>
                  </>
                ) : (
                  <>
                    {/* <TableRow>
                      <TableCell>조회된 데이터가 없습니다.</TableCell>
                    </TableRow> */}
                  </>
                )
              )
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Paging
        total={reviewList.length}
        limit={limit}
        page={page}
        handlePaging={handlePaging}
      /> */}

      {/* <Button
        variant="contained"
        color="success"
        onClick={() => handleOpenForWriting(true)}
        sx={{ float: "right" }}
      >
        글쓰기
      </Button> */}

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <form>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "25px",
                fontWeight: "5rem",
                backgroundColor: "rgb(178, 204, 90)",
              }}
            >
              문의 게시글
            </Typography>

            <TableContainer>
              <Table>
                <TableRow>
                  <TableCell component={"th"} sx={modalstyle}>
                    제목
                  </TableCell>
                  <TableCell>
                    <select
                      name="inquiryTitle"
                      onChange={onOptionHandler}
                      value={option}
                    >
                      <option selected="selected">제목을 선택하세요.</option>
                      <option value="상품 문의">상품 문의</option>
                      <option value="배송 문의">배송 문의</option>
                      <option value="교환/반품/취소 문의">
                        교환/반품/취소 문의
                      </option>
                      <option value="주문/입금확인 문의">
                        주문/입금확인 문의
                      </option>
                      <option value="기타 문의">기타 문의</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <input type="hidden" value={option} name="reviewTitle" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component={"th"} sx={modalstyle}>
                    내용
                  </TableCell>
                  <TableCell>
                    <textarea
                      type="text"
                      style={{
                        border: "none",
                        width: "400px",
                        height: "300px",
                      }}
                      name="reviewContent"
                      onChange={handleChange}
                      value={r.reviewContent}
                    ></textarea>
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer> */}

      {/* <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "25px",
                fontWeight: "5rem",
                backgroundColor: "rgb(178, 204, 90)",
              }}
            >
              답변
            </Typography> */}

      {/* <TableRow>
              <TableCell component={"th"} sx={modalstyle}>
                답변 내용
              </TableCell>
              <TableCell>
                <textarea
                  type="text"
                  style={{ border: "none", width: "400px", height: "150px" }}
                  name="inquiryAnswer"
                  onChange={handleChange}
                  value={inquiryInfo.inquiryAnswer}
                />
              </TableCell>
            </TableRow> */}

      {/* <span class="buttonSpan">
              <Button
                type="button"
                variant="contained"
                color="success"
                onClick={insertInquiryBoard}
              >
                등록
              </Button>

              {JSON.parse(sessionStorage.getItem("USER_INFO")).userId ===
              "admin" ? (
                <>
                  <Button
                    type="button"
                    variant="contained"
                    color="success"
                    onClick={updateInquiryBoard}
                  >
                    수정
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    color="success"
                    onClick={deleteInquiryBoard}
                  >
                    삭제
                  </Button>
                </>
              ) : (
                <div className="noButton">.</div>
              )}
            </span> */}
      {/* </Box>
        </form>
      </Modal> */}
    </div>
  );
};

export default MyReviewList;

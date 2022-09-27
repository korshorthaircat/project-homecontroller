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
import {
  TextField,
  Link,
  Grid,
  Container,
  autocompleteClasses,
} from "@mui/material";
import "../../css/mypagesidebar.css";
import { NoEncryption } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: 0,
  padding: 0,
};

const modalstyle = {
  backgroundColor: "rgb(231, 225, 225)",
  width: "30%",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "large",
};

const MyReviewList = () => {
  const { productNo } = useParams();

  const [reviewList, setReviewList] = React.useState([]); //전체 리뷰 목록
  const [myReviewImg, setMyReviewImg] = React.useState([]);

  const [avgRevGrade, setAvgRevGrade] = React.useState(0);
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewContent, setReviewContent] = React.useState("");
  const [reviewGrade, setReviewGrade] = React.useState();
  const [reviewNo, setReviewNo] = React.useState({}); //조회하고자 하는 게시글의 정보

  const [open, setOpen] = React.useState(false);
  const [pagingReviewList, setPagingReviewList] = React.useState([]); //페이징 처리한 게시글 모곩
  const [reviewInfo, setReviewInfo] = React.useState({}); //조회하고자 하는 게시글의 정보
  const [reviewItemList, setReviewItemList] = React.useState({});

  const handleOpenForWriting = () => {
    setOpen(true);
  };

  const handleOpen = (index) => {
    setOpen(true);
    setReviewInfo(pagingReviewList[index]);
    console.log(reviewList[index]);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //페이지에 따라 데이터 5개씩 잘라넣는 userList
  React.useEffect(() => {
    setPagingReviewList(reviewList.slice(offset, offset + limit));
  }, [reviewList]);

  //페이지네이션
  const [limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * limit;
  const handlePaging = (currentPage) => {
    setPage((prev) => currentPage);
  };

  //페이지 바뀔 때마다 잘라넣는 inquiryList 변경
  React.useEffect(() => {
    setPagingReviewList((prev) => reviewList.slice(offset, offset + limit));
  }, [page, offset, limit]);

  const changeLimit = (e) => {
    setLimit((prev) => e.target.value);
    setPage(1);
  };

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
  const [myReviewMap, setMyReviewMap] = React.useState([]);
  const getMyReviewList = () => {
    // 로그인한 사용자의 ID 를 가져오기 위한 세션 정보 활용
    axios({
      url: "http://localhost:8080/api/review/getReviewList",
      method: "post",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      // data: { userId: userInfo.userId },
      // params: { productNo: productNo },
    })
      .then((response) => {
        setReviewList(response.data.data);
        console.log(response.data.reviewList);
      })
      .catch((e) => {});

    axios({
      method: "get",
      url: "http://localhost:8080/api/review/myReviewImg",
      // data: { productImageName },
    }).then((response) => {
      console.log(response.data.reviewItemList);
      setMyReviewImg(response.data.reviewItemList);
      setMyReviewMap(response.data.reviewItemList);
    });
  };

  useEffect(() => {
    // getProducts();
    // getAvgRevGradeByProductNo();
    getMyReviewList();
    setUserInfoStr(JSON.parse(sessionStorage.getItem("USER_INFO")));
  }, []);

  //제목 셀렉트
  const [option, setOption] = React.useState(" ");
  const onOptionHandler = (e) => {
    setOption(e.target.value);
    setReviewTitle(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const updateReview = {
      ...reviewInfo,
      [e.target.name]: e.target.value,
    };
    setReviewInfo(updateReview);
  };

  return (
    <div>
      <div class="nav_wrapper">
        <nav className="MyNavMenu">
          <ul>
            <li>
              <Link href="/mypage" title="Link">
                MYPAGE
              </Link>
            </li>
            <li>
              <a href="#Link" title="Link">
                나의 정보
              </a>
              <ul>
                <li>
                  <a href="/userupdate" title="Link ">
                    나의정보 수정
                  </a>
                </li>
                <li>
                  <a href="/outmembers" title="Link">
                    멤버십 해지
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/wishlist" title="Link">
                위시리스트
              </a>
            </li>
            <li>
              <a href="/cart" title="Link">
                장바구니
              </a>
            </li>
            <li>
              <a href="#Link" title="Link">
                포인트/쿠폰
              </a>
              <ul>
                <li>
                  <a href="/mypoint" title="Link">
                    포인트
                  </a>
                </li>
                <li>
                  <a href="#Link" title="Link">
                    쿠폰
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/orderlist" title="Link">
                주문내역
              </a>
              {/* <ul>
                <li>
                  <a href="/orderlist" title="Link">
                    주문
                  </a>
                </li>
                <li>
                  <a href="#Link" title="Link">
                    반품
                  </a>
                </li>
                <li>
                  <a href="#Link" title="Link">
                    교환
                  </a>
                </li>
              </ul> */}
            </li>

            <li>
              <a href="#Link" title="Link">
                나의 게시글
              </a>
              <ul>
                <li>
                  <a href="/myinquiry" title="Link">
                    자유게시판
                  </a>
                </li>
                <li>
                  <a href="/myreviewlist" title="Link">
                    상품후기
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrap">
        <h2>나의 상품후기</h2>

        {/*페이지네이션 표출할 데이터양*/}
        <label className="orderOption">
          페이지 당 표시할 게시물 수:&nbsp;
          <select type="number" value={limit} onChange={changeLimit}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>

        {/* 게시글 검색바 */}

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

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: "150px" }}>
                  <h5>No.</h5>
                </TableCell>
                <TableCell align="center" sx={{ width: "150px" }}></TableCell>
                <TableCell align="center">
                  <h5>제품명</h5>
                </TableCell>
                <TableCell align="center" sx={{ width: "200px" }}>
                  <h5>제목</h5>
                </TableCell>
                <TableCell align="center" sx={{ width: "200px" }}>
                  <h5>작성자</h5>
                </TableCell>
                <TableCell align="center" sx={{ width: "200px" }}>
                  <h5>작성일</h5>
                </TableCell>
                <TableCell align="center" sx={{ width: "200px" }}>
                  <h5>평점</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviewItemList ? (
                pagingReviewList &&
                pagingReviewList.map((r, index) =>
                  userInfoStr.userId == r.userId ? (
                    <>
                      <TableRow
                        key={r.reviewNo}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          <h6>{r.reviewNo}</h6>
                        </TableCell>
                        <TableCell align="center">
                          {myReviewImg ? (
                            <>
                              <img
                                src={`http://localhost:8080/upload/${myReviewImg[index].productImageName}`}
                                alt="제품사진"
                                id="ImgThum"
                              />
                            </>
                          ) : (
                            <></>
                          )}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          <h6>{`${myReviewImg[index].productName}`}</h6>
                        </TableCell>
                        <TableCell
                          align="center"
                          id={`myReviewImg${index}`}
                          onClick={() => handleOpen(index)}
                        >
                          <h6>{r.reviewTitle}</h6>
                        </TableCell>
                        <TableCell align="center">
                          <h6>{r.userId}</h6>
                        </TableCell>
                        <TableCell align="center">{r.reviewRegdate}</TableCell>
                        <TableCell align="center">
                          <h6>{r.reviewGrade}</h6>
                        </TableCell>
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

        <Paging
          total={reviewList.length}
          limit={limit}
          page={page}
          handlePaging={handlePaging}
        />

        <Button
          variant="contained"
          color="success"
          onClick={() => handleOpenForWriting(true)}
          sx={{ float: "right" }}
        >
          글쓰기
        </Button>
        {/* 모달 */}
        <Modal
          className="REVIEWmodal"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <form>
            {myReviewImg.map((n, reviewNo) => {
              console.log(n.reviewNo);
              return (
                <Box className="reviewModal" key={n.reviewNo} sx={style}>
                  <Typography
                    id="modal-modal-title"
                    sx={{
                      borderTopLeftRadius: "18px",
                      borderTopRightRadius: "18px",
                    }}
                  >
                    <h3>상품 후기</h3>
                    {/* <img
                      src={`http://localhost:8080/upload/${n.productImageName}`}
                      alt="제품사진"
                      id={n.productImageName}
                      // image={n.productImageName}
                    /> */}
                  </Typography>

                  <TableContainer>
                    <Table>
                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          제품명
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{
                              border: "none",
                            }}
                            onChange={handleChange}
                            value={reviewInfo.productName}
                            name="productName"
                          />
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell component={"th"} sx={modalstyle}>
                          제목
                        </TableCell>
                        <TableCell>
                          <input
                            type="text"
                            style={{
                              border: "none",
                            }}
                            name="reviewContent"
                            onChange={handleChange}
                            value={reviewInfo.reviewTitle}
                          ></input>
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableContainer>

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

                  <TableRow>
                    <TableCell component={"th"} sx={modalstyle}>
                      내용
                    </TableCell>
                    <TableCell>
                      <textarea
                        type="text"
                        style={{
                          border: "none",
                          width: "560px",
                          height: "150px",
                        }}
                        name="inquiryAnswer"
                        onChange={handleChange}
                        value={reviewInfo.reviewContent}
                      />
                    </TableCell>
                  </TableRow>
                </Box>
              );
            })}
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default MyReviewList;

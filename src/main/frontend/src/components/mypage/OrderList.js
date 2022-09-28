import "../../css/reviewlist.css";
import "../../css/paging.css";
import "../../css/mypagesidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import { Link } from "react-router-dom";
//동일한 이름이 겹칠때 사용하는 방법 (mui.Link)
import * as mui from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paging from "../admin/Paging";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import React, { useCallback, useEffect, useState } from "react";

const mdTheme = createTheme();

function Orderlist() {
  const [orderList, setOrderList] = React.useState([]);

  const ordList = () => {
    axios({
      url: "http://localhost:8080/api/mypage/getMyOrderList",
      method: "get",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
    })
      .then((response) => {
        setOrderList(response.data.data);
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    ordList();
  }, []);

  //페이지네이션
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * limit;
  const handlePaging = (currentPage) => {
    setPage((prev) => currentPage);
  };

  const changeLimit = (e) => {
    setLimit((prev) => e.target.value);
    setPage(1);
  };

  return (
    <div>
      <div>
        <div class="nav_wrapper">
          <nav className="MyNavMenu">
            <ul>
              <li>
                <mui.Link href="/mypage" title="Link">
                  MYPAGE
                </mui.Link>
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
              </li>

              <li>
                <a href="#Link" title="Link">
                  나의 게시글
                </a>
                <ul>
                  <li>
                    <a href="/myinquiry" title="Link">
                      고객지원 게시판
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

        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: "flex" }}>
            <Container style={{ marginTop: "5%" }}>
              <Box>
                {/* <div
                className="Date"
                style={{ maxWidth: "600px", height: "auto" }}
              >
                <p className="DataP" style={{ width: "200px" }}>
                  조회기간 선택
                </p>
                <Form.Control type="date"></Form.Control>
                <Form.Control type="date"></Form.Control>
              </div> */}

                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "self-end",
                    width: 400,
                    marginLeft: 90,
                    marginBottom: 5,
                  }}
                >
                  {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                          <MenuIcon />
                        </IconButton> */}
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="주문내역 검색"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                          <DirectionsIcon />
                        </IconButton> */}
                </Paper>
              </Box>
              <Container style={{ marginTop: "5%" }}>
                <h1>나의 주문내역</h1>
                {/*페이지네이션 표출할 데이터양*/}
                <label className="orderOption" style={{ marginLeft: "850px" }}>
                  페이지 당 표시할 게시물 수:&nbsp;
                  <select type="number" value={limit} onChange={changeLimit}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>
                </label>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "30ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>주문 번호</TableCell>
                          <TableCell align="center">주문 상태</TableCell>
                          <TableCell align="center">주문 날짜</TableCell>
                          <TableCell align="center">주문 금액</TableCell>
                          <TableCell align="center">관리</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {orderList ? (
                          orderList
                            .slice(offset, offset + limit)
                            .map((o, index) => (
                              <TableRow
                                key={o.orderNo}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {o.orderNo}
                                </TableCell>
                                <TableCell align="center">
                                  {o.orderStatus}
                                </TableCell>
                                <TableCell align="center">
                                  {o.orderDate}
                                </TableCell>

                                <TableCell align="center">
                                  {o.orderAmount}
                                </TableCell>
                                <TableCell align="center">
                                  <Button
                                    id={`detailBtn${index}`}
                                    sx={{
                                      border: "1px solid lightgray",
                                      backgroundColor: "#fff",
                                      borderRadius: "5px",
                                      width: "70px",
                                      height: "45px",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Link
                                      to={"/MyOrderDetail"}
                                      state={o.orderNo}
                                    >
                                      <img
                                        className="AdminEdit"
                                        src="images/edit.png"
                                      />
                                      조회
                                    </Link>
                                  </Button>
                                  <Button
                                    id={`detailBtn${index}`}
                                    sx={{
                                      border: "1px solid lightgray",
                                      backgroundColor: "#fff",
                                      borderRadius: "5px",
                                      width: "110px",
                                      height: "45px",
                                      marginLeft: "10px",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Link
                                      to={"/MyOrderstatus"}
                                      state={o.orderNo}
                                    >
                                      <img
                                        className="AdminEdit"
                                        src="images/edit.png"
                                      />
                                      반품/취소
                                    </Link>
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))
                        ) : (
                          <TableRow>
                            <TableCell>조회된 데이터가 없습니다.</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Container>
            </Container>
          </Box>
          <Paging
            total={orderList.length}
            limit={limit}
            page={page}
            handlePaging={handlePaging}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Orderlist;

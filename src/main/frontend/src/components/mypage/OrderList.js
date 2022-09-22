import { useState } from "react";
import "../../css/userupdate.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Paging from "../admin/Paging";
import "../../css/paging.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const handlePaging =(currentPage) =>{
    setPage(prev => currentPage);
  };

  const changeLimit = (e) => {
    setLimit(prev => e.target.value);
    setPage(1);
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }} >
       <Container style={{ marginTop: "5%" }}>  
          <Box>
              <div className="Date" style={{maxWidth: "600px", height: "auto"}}>
                <p className="DataP" style={{width: "200px"}}>조회기간 선택</p>
                <Form.Control type="date"></Form.Control>
                <Form.Control type="date"></Form.Control>
              </div>
          
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
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
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
            <label className="orderOption" style={{marginLeft: "850px"}}>
              페이지 당 표시할 게시물 수:&nbsp;
              <select
                type="number"
                value={limit}
                onChange={changeLimit}
              >
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
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {o.orderNo}
                            </TableCell>
                            <TableCell align="center">
                              {o.orderStatus}
                            </TableCell>
                            <TableCell align="center">{o.orderDate}</TableCell>
                        
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
                                  marginLeft:"10px",
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
                        <TableCell >조회된 데이터가 없습니다.</TableCell>
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
  );
}

export default Orderlist;

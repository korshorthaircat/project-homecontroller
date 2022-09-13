import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdminItemList from "./AdminItemList";
import List from "@mui/material/List";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';
import { Link } from "react-router-dom";
import Paging from "./Paging"

const mdTheme = createTheme();

function OrderManage() {
  const [orderList, setOrderList] = React.useState([]);
  
  let listUrl = 'http://localhost:8080/api/order/getOrderList';

  const ordList = () => {
     axios.get(listUrl).then(response => {
        setOrderList( response.data.data);
        console.log(response.data.data)
        //오류나면 오류메세지
        
    }).catch(e => {
        console.log(e);
    });
  };

  React.useEffect(() => {
    ordList();
  },[]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }} style={{ maxWidth: "1750px" }}>
        <Box>
          <List>
            <AdminItemList />
          </List>
        </Box>
        <Container style={{ marginTop: "5%" }}>
          <h1>주문 관리폼</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell>주문 번호</TableCell>
                                <TableCell align="center">주문 상태</TableCell>
                                <TableCell align="center">주문 날짜</TableCell>
                                <TableCell align="center">주문자</TableCell>
                                <TableCell align="center">주문 금액</TableCell>
                                <TableCell align="center">비고</TableCell>
                                <TableCell align="center">관리</TableCell>
                            </TableRow>
                        </TableHead>
                       
                        <TableBody>
                        {orderList ? (
                            orderList.map((o, index) => (
                            <TableRow
                            key={o.orderNo}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {o.orderNo}
                                </TableCell>
                                <TableCell align="center">{o.orderStatus}</TableCell>
                                <TableCell align="center">{o.orderDate}</TableCell>
                                <TableCell align="center">{o.user.userId}</TableCell>
                                <TableCell align="center">{o.orderAmount}</TableCell>
                                <TableCell align="center">{o.orderMemo}</TableCell>
                                <TableCell align="center">  
                                  <Button
                                          id={`detailBtn${index}`}
                                          sx={{ border: "1px solid lightgray",
                                            backgroundColor: "#fff",
                                            borderRadius: "5px",
                                            width: "70px",
                                            height: "45px",                                           
                                            alignItems:"center",}}>
                                      <Link to ={"/AdminOrderDetail"}
                                            state={o.orderNo}
                                        >
                                        <img className="AdminEdit" src="images/edit.png"/>
                                          수정
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
            <Paging/>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default OrderManage;

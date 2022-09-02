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
import Link from "@mui/material/Link";
import axios from 'axios';
import { unstable_generateUtilityClass } from "@mui/utils";

const mdTheme = createTheme();

function createData(orderNo, orderStatus, orderDate, productName,
       userName, orderAmount, orderMemo, orderDiscount, orderFee,
    ) {
    return { orderNo, orderStatus, orderDate, productName,
      userName, orderAmount, orderMemo, orderDiscount, orderFee,
   };
}

const rows = [
    createData('1', '입금 대기', '2022-08-24', "제품1", '홍길동1', '12,500', '부재시 경비실에.. ', ''),
    createData('2', '입금 완료', '2022-08-24', '제품 2', '홍길동2', '25,000', '부재시... ', ''),
    createData('3', '입금 대기', '2022-08-24', '제품 3', '홍길동3', '50,000', '부재시... ', ''),
    ];

function OrderManage() {
  const [orderList, setOrderList] = React.useState([]);
  
  let listUrl = 'http://localhost:8080/api/order/getOrderList';

  const list = () => {
     axios.get(listUrl).then(response => {
        setOrderList(response.data);
        //오류나면 오류메세지
        
    }).catch(e => {
        console.log(e);
    });
  };

  React.useEffect(() => {
    list();
    console.log(orderList);
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
                                <TableCell align="center">상품명</TableCell>
                                <TableCell align="center">주문자</TableCell>
                                <TableCell align="center">주문 금액</TableCell>
                                <TableCell align="center">비고</TableCell>
                                <TableCell align="center">관리</TableCell>
                            </TableRow>
                        </TableHead>
                       
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.orderNo}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {row.orderNo}
                                </TableCell>
                                <TableCell align="center">{row.orderStatus}</TableCell>
                                <TableCell align="center">{row.orderDate}</TableCell>
                                <TableCell align="center">{row.productName}</TableCell>
                                <TableCell align="center">{row.userName}</TableCell>
                                <TableCell align="center">{row.orderAmount}</TableCell>
                                <TableCell align="center">{row.orderMemo}</TableCell>
                                <TableCell align="center">
                                  <Link href="/AdminOrderDetail">
                                    <Button sx={{ border: "1px solid lightgray",
                                            backgroundColor: "#fff",
                                            borderRadius: "5px",
                                            width: "70px",
                                            height: "45px",                                           
                                            alignItems:"center",}}>
                                        <img className="AdminEdit" src="images/edit.png"/>
                                         수정
                                    </Button>
                                  </Link>
                                </TableCell>
                            </TableRow>
                         ))}
                        </TableBody>
                    </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default OrderManage;

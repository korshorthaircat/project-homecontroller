import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "../../css/admin.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react";


const mdTheme = createTheme();

const MyOrderDetail = () => {
    const navigate = useNavigate();
    const location = useLocation({});
    const [orderNo, setOrderNo] = useState(location.state);
    const [orderDetail, setOrderDetail] = useState({});
    const [orderItemList, setOrderItemList] = useState([]);

    React.useEffect(() => {
        if(orderNo !== 0) {
            console.log(orderNo);
            axios({
                url: "http://localhost:8080/api/order/viewOrder",
                method: 'get',
                params: {orderNo: orderNo}
            }).then(response => {
                console.log(response);
                setOrderDetail(response.data.orderDetail);
                setOrderItemList(response.data.orderItemList);
            }).catch(e => {
                console.log(e);
            })
        }
    }, [orderNo]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (document.activeElement.value === "update") {
        axios({
            url: "http://localhost:8080/api/order/updateOrder",
            method: "put",
            data: {orderNo: orderNo,
                     orderStatus: orderDetail.orderStatus,
                     deliveryAddress: orderDetail.deliveryAddress,
                     deliveryDetailAddress: orderDetail.deliveryDetailAddress,
                     deliveryMessage: orderDetail.deliveryMessage,
                     deliveryName: orderDetail.deliveryName,
                     deliveryTel: orderDetail.deliveryTel,
                     deliveryTrackingNo: orderDetail.deliveryTrackingNo,
                     paymentName: orderDetail.paymentName,}
            })
            .then((response) => {
            //   setOrderNo(response.data);
              console.log(response.data);
              navigate("/OrderList");
              //location(response);             
              //window.location.href = "/";
            })
            .catch((e) => {
              console.log("update오류" + e);
            });
        }
    }

    const handleChange = (e) => {
        const updateOrder = {
          ...orderDetail,
          [e.target.name]: e.target.value,
        };
        setOrderDetail(updateOrder);
      };

    return (
        <ThemeProvider theme={mdTheme} >
            <Box sx={{ display: "flex" }}>
                
                
                <Container style={{ marginTop: "5%" }}>              
                    <Box
                        component="form"
                        sx={{
                        "& .MuiTextField-root": { m: 1, width: "30ch" },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                       <Box sx={{display: "flex", justifyContent:"space-between"}}>
                            <Typography variant="h6">
                              주문 정보
                            </Typography>

                            <Typography>
                              주문자 : {orderDetail.userName}("{orderDetail.userId}")
                            </Typography>
                        </Box>
                        
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        
                        <Box sx={{display: "flex", justifyContent:"space-between"}}>
                            <Typography>
                              주문 번호 : {orderDetail.orderNo}
                            </Typography>

                            <Typography>
                              주문날짜 : {orderDetail.orderDate}
                            </Typography>
                        </Box>
                        <Box>
                            <Table sx={{ minWidth: 650, marginTop: "50px"}} aria-label="simple table">
                            <TableHead>
                                    <TableRow sx={{backgroundColor: "#DCDCDC"}}>
                                        <TableCell>주문 상품</TableCell>
                                        <TableCell align="center">판매가</TableCell>
                                        <TableCell align="center">수량</TableCell>
                                        <TableCell align="center">주문 금액</TableCell>
                                        <TableCell align="center">상태</TableCell>
                                        <TableCell align="center">송장번호</TableCell>
                                    </TableRow>
                            </TableHead>
                            <TableBody>
                                        {orderItemList.map((orderItem, index) => (
                                            <TableRow>
                                                <TableCell>주문 상품 이미지</TableCell>
                                                <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                <TableCell align="center">{orderItem.productCount}</TableCell>
                                                <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                {index === 0 ? (
                                                <>
                                                    <TableCell  rowSpan={orderItemList.length + 1} align="center" sx={{textAlign:"center"}}>
                                                        <input
                                                            type="text"
                                                            style={{ border: "none", outline: "none"}}
                                                            value={orderDetail.orderStatus}
                                                            readOnly
                                                        />
                                                    </TableCell>
                                                    <TableCell  rowSpan={orderItemList.length + 1} align="center">
                                                        <input
                                                            type="text"
                                                            style={{ border: "none", outline: "none"}}
                                                            value={orderDetail.deliveryTrackingNo}
                                                            readOnly
                                                        />
                                                    </TableCell>
                                                </>
                                                 ) : null }
                                            </TableRow>
                                        ))}
                            </TableBody>
                           </Table>
                         
                        </Box>

                        <Typography variant="h6" sx={{marginTop: "50px"}}>결제 정보</Typography>
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        <Box>
                            <Table>
                                <TableRow>                                 
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        주문금액 (①)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none"}}
                                        value={orderDetail.orderAmount}
                                        readOnly
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        할인금액 (②)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none"}}
                                        value={orderDetail.orderDiscount}
                                        readOnly
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        배송료  (③)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none"}}
                                        value={orderDetail.orderFee}
                                        readOnly
                                    />
                                    </TableCell>                                   
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                       총 결제 금액 (① - ② + ③)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none"}}
                                        value={orderDetail.paymentAmount}
                                        readOnly
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}} >
                                        결제방식
                                    </TableCell>
                                    <TableCell  colSpan={3}>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none" }}
                                        value={orderDetail.paymentWay}
                                        readOnly
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}  >
                                        입금자
                                    </TableCell>
                                    <TableCell colSpan={3}>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none"}}
                                        value={orderDetail.paymentName}
                                        readOnly                                       
                                    />
                                    </TableCell>
                                     
                                </TableRow>
                            </Table>
                        </Box>
                        
                        <Typography variant="h6" sx={{marginTop: "50px"}}>배송 정보</Typography>
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        <Box>
                            <Table>
                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white", width: "200px"}}>
                                        수령인
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none"}}
                                        value={orderDetail.deliveryName}
                                        readOnly
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", width: "200px", borderBottom: "1px solid white"}}>
                                        전화번호
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", outline: "none" }}
                                        value={orderDetail.deliveryTel}
                                        readOnly
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        주소
                                    </TableCell>
                                    <TableCell>
                                        <input
                                            type="text"                      
                                            style={{ border: "none", width:" 400px", outline: "none"}}
                                            value = {orderDetail.deliveryAddress}
                                            readOnly
                                        />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", width: "200px"}}>
                                        상세 주소
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", width:" 400px" , outline: "none"}}
                                        value={orderDetail.deliveryDetailAddress}
                                        readOnly
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC"}}>
                                        배송 메모
                                    </TableCell>
                                    <TableCell colSpan={3}>
                                        <input
                                            type="text"
                                            style={{ border: "none", width:" 400px", outline: "none" }}
                                            value={orderDetail.deliveryMessage}
                                            readOnly
                                        />
                                    </TableCell>
                                </TableRow>

                            </Table>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default MyOrderDetail;
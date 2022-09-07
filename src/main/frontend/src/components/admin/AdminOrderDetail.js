import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AdminItemList from "./AdminItemList";
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
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react";


const mdTheme = createTheme();

const AdminOrderDetail = () => {
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

    return (
        <ThemeProvider theme={mdTheme} >
            <Box sx={{ display: "flex" }} style={{ maxWidth: "1750px" }}>
                <Box>
                    <List>
                        <AdminItemList />
                    </List>
                </Box>
                
                <Container style={{ marginTop: "5%" }}>
                    <form>                  
                    <Box
                        component="form"
                        sx={{
                        "& .MuiTextField-root": { m: 1, width: "30ch" },
                        }}
                        noValidate
                        autoComplete="off"
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
                                        <TableCell align="center">배송료</TableCell>
                                        <TableCell align="center">송장번호</TableCell>
                                    </TableRow>
                            </TableHead>
                            <TableBody>
                                        {orderItemList.map((orderItem, index) => (
                                            <TableRow>
                                                <TableCell>주문 상품 이미지</TableCell>
                                                <TableCell align="center">{parseInt(orderItem.productAmount) / parseInt(orderItem.productCount)}</TableCell>
                                                <TableCell align="center">{orderItem.productCount}</TableCell>
                                                <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                {index === 0 ? (
                                                <>
                                                    <TableCell  rowSpan={orderItemList.length + 1} align="center">{orderDetail.orderStatus}</TableCell>
                                                    <TableCell  rowSpan={orderItemList.length + 1} align="center">{orderDetail.orderFee}</TableCell>
                                                    <TableCell  rowSpan={orderItemList.length + 1} align="center">{orderDetail.deliveryTrackingNo}</TableCell>
                                                </>
                                                 ) : null }
                                            </TableRow>
                                        ))}
                            </TableBody>
                           </Table>
                           <Typography variant="h6" sx={{marginTop: "50px", marginLeft: "900px"}}>총 금액 : {orderDetail.paymentAmount}</Typography>
                        </Box>

                        <Typography variant="h6" sx={{marginTop: "50px"}}>결제 정보</Typography>
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        <Box>
                            <Table>
                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        결제 방식
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        value={orderDetail.paymentWay}
                                        placeholder="결제 방식"
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        결제 금액
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        value={orderDetail.paymentAmount}
                                        placeholder="결제 금액"
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        입금자명
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        value={orderDetail.paymentName}
                                        placeholder="입금자명"
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        환불 계좌
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        placeholder="환불 계좌"
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
                                        style={{ border: "none" }}
                                        value={orderDetail.deliveryName}
                                        placeholder="수령인"
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", width: "200px"}}>
                                        전화번호
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        value={orderDetail.deliveryTel}
                                        placeholder="전화번호"
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        주소
                                    </TableCell>
                                    <TableCell colSpan={3}>
                                        <input
                                            type="text"                      
                                            style={{ border: "none", width: "700px"}}
                                            value = {(orderDetail.deliveryAddress) + (orderDetail.deliveryDetailAddress)}
                                            placeholder="주소rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr123"
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
                                            style={{ border: "none" }}
                                            value={orderDetail.deliveryMessage}
                                            placeholder="배송 메모"
                                        />
                                    </TableCell>
                                </TableRow>

                            </Table>
                        </Box>
                        
                        <Typography variant="h6" sx={{marginTop: "50px"}}>관리자 메모</Typography>
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        <TextareaAutosize style={{minWidth: "1150px", minHeight: "500px", resize: "none"}}
                                          value={orderDetail.orderMemo}/>
                        <Box sx={{marginLeft:"400px", marginTop: "30px"}}>
                            <Button
                                type="submit"
                                sx={{ marginTop: "20px", width:"150px" }}
                                value="update"
                                >
                                <img className="OrderEdit" src="images/edit.png" />
                                    수정
                            </Button>

                        </Box>

                    </Box>
                    </form>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default AdminOrderDetail;
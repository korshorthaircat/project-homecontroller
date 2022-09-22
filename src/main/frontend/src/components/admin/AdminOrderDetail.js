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
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "../../css/admin.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react";


const mdTheme = createTheme();

const AdminOrderDetail = () => {
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
                     orderMemo: orderDetail.orderMemo,
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
              navigate("/OrderManage");
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
            <Box sx={{ display: "flex" }} style={{ maxWidth: "1750px" }}>
                <Box>
                    <List>
                        <AdminItemList />
                    </List>
                </Box>
                
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
                                        <TableCell>제품 이름</TableCell>
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
                                                <TableCell>
                                                    <img 
                                                        src={`http://localhost:8080/upload/${orderItem.productImageName}`} 
                                                        alt="제품사진"
                                                        id="ImgThum"/>
                                                </TableCell>
                                                <TableCell>{orderItem.productName}</TableCell>
                                                <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                <TableCell align="center">{orderItem.productCount}</TableCell>
                                                <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                {index === 0 ? (
                                                <>
                                                    <TableCell  rowSpan={orderItemList.length + 1} align="center" sx={{textAlign:"center"}}>
                                                        <input
                                                            type="text"
                                                            style={{ border: "none"}}
                                                            value={orderDetail.orderStatus}
                                                            name = "orderStatus"
                                                            onChange={handleChange}
                                                        />
                                                    </TableCell>
                                                    <TableCell  rowSpan={orderItemList.length + 1} align="center">
                                                        <input
                                                                type="text"
                                                                style={{ border: "none", }}
                                                                value={orderDetail.deliveryTrackingNo}
                                                                name = "deliveryTrackingNo"
                                                                onChange={handleChange}
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
                                        결제방식
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
                                        입금자명
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name= "paymentName"
                                        value={orderDetail.paymentName}
                                        onChange={handleChange}                                        
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                        환불 계좌
                                    </TableCell>
                                    <TableCell colSpan={3}>
                                    <input
                                        type="text"
                                        style={{ border: "none", width:"350px" }}
                                        name="userNickname"
                                        placeholder="환불 계좌"
                                    />
                                    </TableCell>   
                                </TableRow>

                                <TableRow>
                                    
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        주문금액 (①)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        value={orderDetail.orderAmount}
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        할인금액 (②)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        value={orderDetail.orderDiscount}
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        배송료  (③)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        value={orderDetail.orderFee}
                                    />
                                    </TableCell>

                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                       총 결제 금액 (① - ② + ③)
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        value={orderDetail.paymentAmount}
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
                                        name="deliveryName"
                                        onChange={handleChange} 
                                        placeholder="수령인"
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", width: "200px", borderBottom: "1px solid white"}}>
                                        전화번호
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        value={orderDetail.deliveryTel}
                                        onChange={handleChange} 
                                        name="deliveryTel"
                                        placeholder="전화번호"
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
                                            style={{ border: "none", width:" 400px"}}
                                            value = {orderDetail.deliveryAddress}
                                            onChange={handleChange} 
                                            name="deliveryAddress"
                                            placeholder="주소"
                                        />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", width: "200px"}}>
                                        상세 주소
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none", width:" 400px" }}
                                        value={orderDetail.deliveryDetailAddress}
                                        onChange={handleChange} 
                                        name="deliveryDetailAddress"
                                        placeholder="상세 주소"
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
                                            style={{ border: "none", width:" 400px" }}
                                            value={orderDetail.deliveryMessage}
                                            onChange={handleChange}
                                            name="deliveryMessage"
                                            placeholder="배송 메모"
                                        />
                                    </TableCell>
                                </TableRow>

                            </Table>
                        </Box>
                        
                        <Typography variant="h6" sx={{marginTop: "50px"}}>관리자 메모</Typography>
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        <TextareaAutosize style={{minWidth: "1150px", minHeight: "500px", resize: "none"}}
                                          value={orderDetail.orderMemo}
                                          onChange={handleChange}
                                          name="orderMemo"/>
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
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default AdminOrderDetail;
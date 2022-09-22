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
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "../../css/admin.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useEffect } from "react";
import "../../css/reviewlist.css";

const mdTheme = createTheme();

const MyOrderstatus = () => {
    //주문 목록 부분
    const location = useLocation({});
    const navigate = useNavigate();
    const [orderNo, setOrderNo] = useState(location.state);
    const [orderDetail, setOrderDetail] = useState({});
    const [orderItemList, setOrderItemList] = useState([]);

     //토글 부분
     const [toggleState, setToggleState] = useState(1);

     const toggleTab = (index) => {
         setToggleState(index);
     };
     
     //서브밋할 내용(Cancel주문취소, Refund환불)
     const [cancelReason, setCancelReason] = React.useState(" ");
     const [cancelAmount, setCancelAmount] = React.useState(0);
     const onCRHandler = (e) =>{
         setCancelReason(e.target.value);
     }
 
     useEffect(() => {
       setCancelAmount(prev => orderDetail.paymentAmount);//취소시 환불 받을 금액
       setRetunAmount(prev => orderDetail.paymentAmount);//반품시 환불 받을 금액
       setRefundAmount(prev => orderDetail.paymentAmount);//환불테이블에 들어갈 금액(cancel타는 refund)
       setRefundAmount2(prev => orderDetail.paymentAmount);//환불테이블에 들어갈 금액(retun타는 refund)   
     }, [orderDetail]);
 
     const [refundAmount, setRefundAmount] = React.useState(0);
     const [refundBank, setRefundBank] = React.useState(" ");
     const [refundAccount, setRefundAccount] = React.useState(" ");
     const [refundName, setRefundName] = React.useState(" ");
 
     const RFBHandler = (e) =>{
         setRefundBank(e.target.value);
     };
 
     const RFAHandler = (e) =>{
         setRefundAccount(e.target.value);
     };
 
     const RFNHandler = (e) =>{
         setRefundName(e.target.value);
     };

     //서브밋할 내용(Return반품, Refund환불)
     const [retunReason, setRetunReason] = React.useState(" ");
     const [retunAmount, setRetunAmount] = React.useState(0);
     const onRRHandler = (e) => {
         setRetunReason(e.target.value);
       };
    
    const [refundAmount2, setRefundAmount2] = React.useState(0);
    const [refundBank2, setRefundBank2] = React.useState(" ");
    const [refundAccount2, setRefundAccount2] = React.useState(" ");
    const [refundName2, setRefundName2] = React.useState(" ");

    const RFBHandler2 = (e) =>{
        setRefundBank2(e.target.value);
    };

    const RFAHandler2 = (e) =>{
        setRefundAccount2(e.target.value);
    };

    const RFNHandler2 = (e) =>{
        setRefundName2(e.target.value);
    };

     //서브밋할 내용(Exchange교환) 
     const [exchangeReason, setExchangeReason] = React.useState(" "); 
     const onECHandler = (e) => {
        setExchangeReason(e.target.value);
     };
 
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
   
    //document.activeElement.value 값에 따라 다른 서브밋
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(document.activeElement.value );
        if (document.activeElement.value === "cancel") {
        axios({
            url: "http://localhost:8080/api/refund/createCancel",
            method: "post",
            data: {orderNo : orderNo,
                   cancelAmount : cancelAmount,
                   cancelReason: cancelReason,
                   refundAccount: refundAccount,
                   refundAmount : refundAmount,
                   refundBank : refundBank,
                   refundName : refundName}
            })
            .then((response) => {
              navigate("/orderlist");
            })
            .catch((e) => {
              console.log("cancel오류" + e);
            });
        }else if(document.activeElement.value === "retun") {
        axios({
            url: "http://localhost:8080/api/refund/createRetun",
            method: "post",
            data: {orderNo : orderNo,
                   retunAmount : retunAmount,
                   retunReason: retunReason,
                   refundAccount2: refundAccount2,
                   refundAmount2 : refundAmount2,
                   refundBank2 : refundBank2,
                   refundName2 : refundName2}
            })
            .then((response) => {
                navigate("/orderlist");
            })
            .catch((e) => {
                console.log("retun오류" + e);
            });   
        }else{
        axios({
            url: "http://localhost:8080/api/refund/createExchange",
            method: "post",
            data: {orderNo : orderNo,
                  exchangeReason: exchangeReason,}
            })
            .then((response) => {
                navigate("/orderlist");
            })
            .catch((e) => {
                console.log("exchange오류" + e);
            });      
        }
    };
    
    return (
       
        <ThemeProvider theme={mdTheme} >
            <Box sx={{ display: "flex" }} > 
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
                       
                        <Box sx={{marginTop: "50px"}}>
                            <div className="bloc-tabs">
                                <div
                                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(1)}
                                >
                                반품
                                </div>
                                <div
                                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(2)}
                                >
                                주문 취소
                                </div>
                                <div
                                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                onClick={() => toggleTab(3)}
                                >
                                교환
                                </div>
                            </div>
                        </Box>     
                        <div
                            className={toggleState === 1 ? "content active-content" : "content"}
                            >
                            <Box>                       
                                <Table sx={{ minWidth: 650, marginTop: "50px"}} aria-label="simple table">
                                <TableHead>
                                        <TableRow sx={{backgroundColor: "#DCDCDC"}}>
                                            <TableCell>주문 상품</TableCell>
                                            <TableCell align="center">제품 이름</TableCell>
                                            <TableCell align="center">판매가</TableCell>
                                            <TableCell align="center">수량</TableCell>
                                            <TableCell align="center">주문 금액</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                            {orderItemList.map((orderItem) => (
                                                <TableRow>
                                                    <TableCell>
                                                    <img 
                                                        src={`http://localhost:8080/upload/${orderItem.productImageName}`} 
                                                        alt="제품사진"
                                                        id="ImgThum"/>
                                                    </TableCell>
                                                    <TableCell align="center">{orderItem.productName}</TableCell>
                                                    <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                    <TableCell align="center">{orderItem.productCount}</TableCell>
                                                    <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                </TableRow>
                                            ))}
                                </TableBody>
                            </Table>                       
                            </Box>

                            <Typography variant="h6" sx={{marginTop: "50px"}}>반품 사유</Typography>
                            <Typography variant="h6">
                                <input  value={"반품 대기"}
                                        name="refundStatus"
                                        type="hidden"/>
                            </Typography>
                            <Divider sx={{my: 2, borderBottom: "2px solid gray"}} style={{width:"100%"}}/>
                            <FormControl sx={{ m: 1, minWidth: 20 }}
                                    style={{marginTop: "20px"}}>
                                <InputLabel id="demo-simple-select-autowidth-label">반품 사유를 선택해 주세요</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={retunReason}
                                    onChange={onRRHandler}
                                    label="반품 사유를 선택해 주세요"               
                                    >
                                    <MenuItem value={"단순 변심"}>단순 변심</MenuItem>
                                    <MenuItem value={" "}>기타 사유</MenuItem>
                                    <MenuItem value={"실수로 주문함"}>실수로 주문함</MenuItem>
                                    <MenuItem value={"타 사이트의 가격이 더 저렴함"}>타 사이트의 가격이 더 저렴함</MenuItem>
                                    <MenuItem value={"제품 정보와 상이"}>제품 정보와 상이</MenuItem>
                                </Select>
                                <TextareaAutosize style={{width: "500px", minHeight: "50px", resize: "none", marginTop:"20px"}}
                                            value={retunReason}
                                            onChange={onRRHandler}
                                            name="retunReason"/>
                            </FormControl>                                               
                            <Typography variant="h6" sx={{marginTop: "50px"}}>결제 정보</Typography>
                            <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}style={{width:"100%"}}/>
                            <Box sx={{marginTop:"20px"}}>
                                <Table>
                                <TableRow>
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            환불 계좌
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none" }}
                                            name="refundAccount2"
                                            value={refundAccount2}
                                            onChange={RFAHandler2}
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            환불 은행
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            name="refundBank2"
                                            value={refundBank2}
                                            onChange={RFBHandler2}
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            예금주명
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            name="refundName2"
                                            value={refundName2}
                                            onChange={RFNHandler2}
                                        />
                                        </TableCell> 
                                        
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                         환불 예정 금액
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none" , outline:"none"}}
                                            value={retunAmount}
                                            name= "retunAmount"
                                            readOnly
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
                                            style={{ border: "none" , outline:"none"}}
                                            value={refundAmount2}
                                            name="refundAmount2"
                                            readOnly
                                        />
                                        </TableCell>
                                    </TableRow>
                                </Table>
                            </Box>

                            <Box sx={{marginLeft: "40%", marginTop: "30px"}}>
                                <Button
                                    type="submit"
                                    sx={{ marginTop: "20px", width:"150px" }}
                                    value="retun"
                                    >
                                    <img className="OrderEdit" src="images/edit.png" />
                                        반품 
                                </Button>
                            </Box>
                        </div>

                        <div
                            className={toggleState === 2 ? "content active-content" : "content"}
                            >
                            <Box>                       
                                <Table sx={{ minWidth: 650, marginTop: "50px"}} aria-label="simple table">
                                <TableHead>
                                        <TableRow sx={{backgroundColor: "#DCDCDC"}}>
                                            <TableCell>주문 상품</TableCell>
                                            <TableCell align="center">제품 이름</TableCell>
                                            <TableCell align="center">판매가</TableCell>
                                            <TableCell align="center">수량</TableCell>
                                            <TableCell align="center">주문 금액</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                            {orderItemList.map((orderItem) => (
                                                <TableRow>
                                                    <TableCell>
                                                    <img 
                                                        src={`http://localhost:8080/upload/${orderItem.productImageName}`} 
                                                        alt="제품사진"
                                                        id="ImgThum"/>
                                                    </TableCell>
                                                    <TableCell align="center">{orderItem.productName}</TableCell>
                                                    <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                    <TableCell align="center">{orderItem.productCount}</TableCell>
                                                    <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                </TableRow>
                                            ))}
                                </TableBody>
                            </Table>                       
                            </Box>

                            <Typography variant="h6" sx={{marginTop: "50px"}}>취소 사유</Typography>
                                <Typography variant="h6">
                                    <input value={"취소 대기"}
                                           name="cancelStatus"
                                           type="hidden"/>
                                </Typography>
                            <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}style={{width:"100%"}}/>
                            <FormControl sx={{ m: 1, minWidth: 20 }}
                                    style={{marginTop: "20px"}}>
                                <InputLabel id="demo-simple-select-autowidth-label2">취소 사유를 선택해 주세요</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label2"
                                    id="demo-simple-select-autowidth"
                                    value={cancelReason}
                                    onChange={onCRHandler}
                                    label="취소 사유를 선택해 주세요"   
                                    >
                                    <MenuItem value={"단순 변심"}>단순 변심</MenuItem>
                                    <MenuItem value={" "}>기타 사유</MenuItem>
                                    <MenuItem value={"실수로 주문함"}>실수로 주문함</MenuItem>
                                    <MenuItem value={"타 사이트의 가격이 더 저렴함"}>타 사이트의 가격이 더 저렴함</MenuItem>
                                    <MenuItem value={"제품 정보와 상이"}>제품 정보와 상이</MenuItem>
                                </Select>
                                <TextareaAutosize style={{width: "500px", minHeight: "50px", resize: "none", marginTop:"20px"}}
                                            value={cancelReason}
                                            onChange={onCRHandler}
                                            name="cancelReason"/>
                            </FormControl>           
                            <Typography variant="h6" sx={{marginTop: "50px"}}>결제 정보</Typography>
                            <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}style={{width:"100%"}}/>
                            <Box sx={{marginTop:"20px"}}>
                                <Table>
                                    <TableRow>
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            환불 계좌
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none" }}
                                            name="refundAccount"
                                            value={refundAccount}
                                            onChange={RFAHandler}
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            환불 은행
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            name="refundBank"
                                            value={refundBank}
                                            onChange={RFBHandler}
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            예금주명
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            name="refundName"
                                            value={refundName}
                                            onChange={RFNHandler}
                                        />
                                        </TableCell> 
                                        
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                         환불 예정 금액
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none" , outline:"none"}}
                                            value={cancelAmount}
                                            name= "cancelAmount"
                                            readOnly
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
                                            style={{ border: "none", outline:"none" }}
                                            name="userNickname"
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
                                            style={{ border: "none", outline:"none" }}
                                            name="userNickname"
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
                                            style={{ border: "none" , outline:"none"}}
                                            name="userNickname"
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
                                            style={{ border: "none" , outline:"none"}}
                                            value={refundAmount}
                                            name="refundAmount"
                                            readOnly
                                        />
                                        </TableCell>
                                    </TableRow>
                                </Table>
                            </Box>

                            <Box sx={{marginLeft: "40%", marginTop: "30px"}}>
                                <Button
                                    type="submit"
                                    sx={{ marginTop: "20px", width:"150px" }}
                                    value="cancel"
                                    >
                                    <img className="OrderEdit" src="images/edit.png" />
                                        취소 
                                </Button>
                            </Box>
                        </div>           
                        
                        <div
                            className={toggleState === 3 ? "content active-content" : "content"}
                            >
                            <Box>                       
                                <Table sx={{ minWidth: 650, marginTop: "50px"}} aria-label="simple table">
                                <TableHead>
                                        <TableRow sx={{backgroundColor: "#DCDCDC"}}>
                                            <TableCell>주문 상품</TableCell>
                                            <TableCell align="center">제품 이름</TableCell>
                                            <TableCell align="center">판매가</TableCell>
                                            <TableCell align="center">수량</TableCell>
                                            <TableCell align="center">주문 금액</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                            {orderItemList.map((orderItem) => (
                                                <TableRow>
                                                    <TableCell>
                                                    <img 
                                                        src={`http://localhost:8080/upload/${orderItem.productImageName}`} 
                                                        alt="제품사진"
                                                        id="ImgThum"/>
                                                    </TableCell>
                                                    <TableCell align="center">{orderItem.productName}</TableCell>
                                                    <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                    <TableCell align="center">{orderItem.productCount}</TableCell>
                                                    <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                </TableRow>
                                            ))}
                                </TableBody>
                            </Table>                       
                            </Box>

                            <Typography variant="h6" sx={{marginTop: "50px"}}>교환 사유</Typography>
                            <Typography variant="h6">
                                <input value={"교환 대기"}
                                        name="exchangeStatus"
                                        type="hidden"/>
                            </Typography>
                            <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}style={{width:"100%"}}/>
                            <FormControl sx={{ m: 1, minWidth: 20 }}
                                    style={{marginTop: "20px"}}>
                                <InputLabel id="demo-simple-select-autowidth-label3">교환 사유를 선택해 주세요</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label3"
                                    id="demo-simple-select-autowidth"
                                    value={exchangeReason}
                                    onChange={onECHandler}
                                    label="반품 사유를 선택해 주세요"       
                                    >
                                    <MenuItem value={" "}>기타 사유</MenuItem>
                                    <MenuItem value={"제품 결함 : "}>제품 결함</MenuItem>
                                </Select>
                                <TextareaAutosize style={{width: "500px", minHeight: "50px", resize: "none", marginTop:"20px"}}
                                            value={exchangeReason}
                                            onChange={onECHandler}
                                            name="orderMemo"/>
                            </FormControl>           
                            <Box sx={{marginLeft: "40%", marginTop: "30px"}}>
                                <Button
                                    type="submit"
                                    sx={{ marginTop: "20px", width:"150px" }}
                                    value="exchange"
                                    >
                                    <img className="OrderEdit" src="images/edit.png" />
                                        교환
                                </Button>
                            </Box>
                        </div>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>   
    
    );
};

export default MyOrderstatus;
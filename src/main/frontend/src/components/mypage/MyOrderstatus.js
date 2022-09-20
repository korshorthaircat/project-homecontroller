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

const mdTheme = createTheme();

const MyOrderstatus = () => {
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
            url: "http://localhost:8080/api/refund/createCancel",
            method: "post",
            data: {orderNo : orderNo}
            })
            .then((response) => {
            //   setOrderNo(response.data);
              console.log(response);
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

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
    const [reason, setReason] = React.useState(" ");
    const [reason2, setReason2] = React.useState(" ");
    const [reason3, setReason3] = React.useState(" ");
    const handleChange2 = (e) => {
      setReason(e.target.value);
    };
    const handleChange3 = (e) => {
        setReason2(e.target.value);
      }; 
    const handleChange4 = (e) => {
    setReason3(e.target.value);
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
                                            <TableCell align="center">판매가</TableCell>
                                            <TableCell align="center">수량</TableCell>
                                            <TableCell align="center">주문 금액</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                            {orderItemList.map((orderItem) => (
                                                <TableRow>
                                                    <TableCell>주문 상품 이미지</TableCell>
                                                    <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                    <TableCell align="center">{orderItem.productCount}</TableCell>
                                                    <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                </TableRow>
                                            ))}
                                </TableBody>
                            </Table>                       
                            </Box>

                            <Typography variant="h6" sx={{marginTop: "50px"}}>반품 사유</Typography>
                            <Divider sx={{my: 2, borderBottom: "2px solid gray"}} style={{width:"100%"}}/>
                            <FormControl sx={{ m: 1, minWidth: 20 }}
                                    style={{marginTop: "20px"}}>
                                <InputLabel id="demo-simple-select-autowidth-label">반품 사유를 선택해 주세요</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={reason}
                                    onChange={handleChange2}
                                    label="반품 사유를 선택해 주세요"
                                    
                                    >
                                    <MenuItem value={"단순 변심"}>단순 변심</MenuItem>
                                    <MenuItem value={" "}>기타 사유</MenuItem>
                                    <MenuItem value={"실수로 주문함"}>실수로 주문함</MenuItem>
                                    <MenuItem value={"타 사이트의 가격이 더 저렴함"}>타 사이트의 가격이 더 저렴함</MenuItem>
                                    <MenuItem value={"제품 정보와 상이"}>제품 정보와 상이</MenuItem>
                                </Select>
                                <TextareaAutosize style={{width: "500px", minHeight: "50px", resize: "none", marginTop:"20px"}}
                                            value={reason}
                                            onChange={handleChange2}
                                            name="orderMemo"/>
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
                                            
                                            placeholder="환불 계좌를 적어주세요"
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            환불 은행
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            
                                            placeholder="환불 은행을 적어주세요"
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            예금주명
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            
                                            placeholder="예금주 명을 적어주세요"
                                        />
                                        </TableCell> 
                                        
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                         환불 예정 금액
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none" }}
                                            value={orderDetail.paymentAmount}
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

                            <Box sx={{marginLeft: "40%", marginTop: "30px"}}>
                                <Button
                                    type="submit"
                                    sx={{ marginTop: "20px", width:"150px" }}
                                    value=" "
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
                                            <TableCell align="center">판매가</TableCell>
                                            <TableCell align="center">수량</TableCell>
                                            <TableCell align="center">주문 금액</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                            {orderItemList.map((orderItem) => (
                                                <TableRow>
                                                    <TableCell>주문 상품 이미지</TableCell>
                                                    <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                    <TableCell align="center">{orderItem.productCount}</TableCell>
                                                    <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                </TableRow>
                                            ))}
                                </TableBody>
                            </Table>                       
                            </Box>

                            <Typography variant="h6" sx={{marginTop: "50px"}}>취소 사유</Typography>
                            <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}style={{width:"100%"}}/>
                            <FormControl sx={{ m: 1, minWidth: 20 }}
                                    style={{marginTop: "20px"}}>
                                <InputLabel id="demo-simple-select-autowidth-label2">취소 사유를 선택해 주세요</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label2"
                                    id="demo-simple-select-autowidth"
                                    value={reason2}
                                    onChange={handleChange3}
                                    label="취소 사유를 선택해 주세요"
                                    
                                    >
                                    <MenuItem value={"단순 변심"}>단순 변심</MenuItem>
                                    <MenuItem value={" "}>기타 사유</MenuItem>
                                    <MenuItem value={"실수로 주문함"}>실수로 주문함</MenuItem>
                                    <MenuItem value={"타 사이트의 가격이 더 저렴함"}>타 사이트의 가격이 더 저렴함</MenuItem>
                                    <MenuItem value={"제품 정보와 상이"}>제품 정보와 상이</MenuItem>
                                </Select>
                                <TextareaAutosize style={{width: "500px", minHeight: "50px", resize: "none", marginTop:"20px"}}
                                            value={reason2}
                                            onChange={handleChange3}
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
                                            
                                            placeholder="환불 계좌를 적어주세요"
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            환불 은행
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            
                                            placeholder="환불 은행을 적어주세요"
                                        />
                                        </TableCell> 
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white" , padding:"0" , textAlign:"center"}}>
                                            예금주명
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none"}}
                                            
                                            placeholder="예금주 명을 적어주세요"
                                        />
                                        </TableCell> 
                                        
                                        <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                         환불 예정 금액
                                        </TableCell>
                                        <TableCell >
                                        <input
                                            type="text"
                                            style={{ border: "none" }}
                                            value={orderDetail.paymentAmount}
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

                            <Box sx={{marginLeft: "40%", marginTop: "30px"}}>
                                <Button
                                    type="submit"
                                    sx={{ marginTop: "20px", width:"150px" }}
                                    value="update"
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
                                            <TableCell align="center">판매가</TableCell>
                                            <TableCell align="center">수량</TableCell>
                                            <TableCell align="center">주문 금액</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                            {orderItemList.map((orderItem) => (
                                                <TableRow>
                                                    <TableCell>주문 상품 이미지</TableCell>
                                                    <TableCell align="center">{orderItem.productAmount}</TableCell>
                                                    <TableCell align="center">{orderItem.productCount}</TableCell>
                                                    <TableCell align="center">{parseInt(orderItem.productAmount) * parseInt(orderItem.productCount)}</TableCell>
                                                </TableRow>
                                            ))}
                                </TableBody>
                            </Table>                       
                            </Box>

                            <Typography variant="h6" sx={{marginTop: "50px"}}>교환 사유</Typography>
                            <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}style={{width:"100%"}}/>
                            <FormControl sx={{ m: 1, minWidth: 20 }}
                                    style={{marginTop: "20px"}}>
                                <InputLabel id="demo-simple-select-autowidth-label3">교환 사유를 선택해 주세요</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label3"
                                    id="demo-simple-select-autowidth"
                                    value={reason3}
                                    onChange={handleChange4}
                                    label="반품 사유를 선택해 주세요"
                                    
                                    >
                                    <MenuItem value={"단순 변심"}>단순 변심</MenuItem>
                                    <MenuItem value={" "}>기타 사유</MenuItem>
                                    <MenuItem value={"실수로 주문함"}>실수로 주문함</MenuItem>
                                    <MenuItem value={"제품 정보와 상이"}>제품 정보와 상이</MenuItem>
                                </Select>
                                <TextareaAutosize style={{width: "500px", minHeight: "50px", resize: "none", marginTop:"20px"}}
                                            value={reason3}
                                            onChange={handleChange4}
                                            name="orderMemo"/>
                            </FormControl>           
                            <Box sx={{marginLeft: "40%", marginTop: "30px"}}>
                                <Button
                                    type="submit"
                                    sx={{ marginTop: "20px", width:"150px" }}
                                    value=" "
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
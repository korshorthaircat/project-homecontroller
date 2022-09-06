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


const mdTheme = createTheme();

const AdminOrderDetail = () => {
  
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
                    >
                       <Box sx={{display: "flex", justifyContent:"space-between"}}>
                            <Typography variant="h6">
                              주문 정보
                            </Typography>

                            <Typography>
                              주문자 : 김비트("bitkim12")
                            </Typography>
                        </Box>
                        
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        
                        <Box sx={{display: "flex", justifyContent:"space-between"}}>
                            <Typography>
                              주문 번호 : 12345
                            </Typography>

                            <Typography>
                              주문날짜 : 2022-09-01
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
                                    <TableRow >
                                        <TableCell>주문 상품 이미지</TableCell>
                                        <TableCell align="center">판매가</TableCell>
                                        <TableCell align="center">수량</TableCell>
                                        <TableCell align="center">주문 금액</TableCell>
                                        <TableCell align="center">상태</TableCell>
                                        <TableCell align="center">배송료</TableCell>
                                        <TableCell align="center">송장번호</TableCell>
                                    </TableRow>
                            </TableBody>
                            </Table>
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
                                        name="userNickname"
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
                                        name="userNickname"
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
                                        name="userNickname"
                                        placeholder="입금자명"
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        입금 계좌
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        placeholder="입금 계좌"
                                    />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC"}}>
                                        현금 영수증 방식
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        placeholder="현금 영수증"
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC"}}>
                                        연락처
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        placeholder="연락처"
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
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC", borderBottom: "1px solid white"}}>
                                        수령인
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
                                        placeholder="수령인"
                                    />
                                    </TableCell>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC",}}>
                                        전화번호
                                    </TableCell>
                                    <TableCell>
                                    <input
                                        type="text"
                                        style={{ border: "none" }}
                                        name="userNickname"
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
                                            style={{ border: "none" }}
                                            name="userId"
                                            placeholder="주소"
                                        />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component={"th"} sx={{backgroundColor: "#DCDCDC"}}>
                                        배송 메모
                                    </TableCell>
                                    <TableCell>
                                        <input
                                            type="text"
                                            style={{ border: "none" }}
                                            name="userId"
                                            placeholder="배송 메모"
                                        />
                                    </TableCell>
                                </TableRow>

                            </Table>
                        </Box>
                        
                        <Typography variant="h6" sx={{marginTop: "50px"}}>관리자 메모</Typography>
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                        <TextareaAutosize style={{minWidth: "1150px", minHeight: "500px", resize: "none"}}/>
                        <Box sx={{marginLeft:"400px", marginTop: "30px"}}>
                            <Button
                                type="submit"
                                sx={{ marginTop: "20px", width:"150px" }}
                                value="update"
                                >
                                <img className="OrderEdit" src="images/edit.png" />
                                    수정
                            </Button>
                            
                            <Button
                                type="submit"
                                sx={{ marginTop: "20px", width:"150px"  }}
                                value="delete"
                                >
                                <img className="OrderEdit" src="images/delete.png" />
                                    삭제
                            </Button>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default AdminOrderDetail;
import * as React from "react";
import {createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import  AdminItemList  from "./AdminItemList";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import "../../css/admin.css";
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { API_BASE_URL } from "../../app-config";
import { getUserList } from "../../service/ApiService";

function createData(userId, userName, userNickname, userTel,
                    userMail, userPoint, userJoinYmd, userMarketing,
                    userAddr, userAddrDetail, userZipcode,userUpdate,
                    updateAdminUser, deleteAdminUser) {
   
    return { userId, userName, userNickname, userTel,
             userMail, userPoint, userJoinYmd, userMarketing,
             userAddr, userAddrDetail, userZipcode,userUpdate, 
             updateAdminUser, deleteAdminUser};
  }


const rows = [
createData("AuserId", 'A홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('BuserId', 'B홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('CuserId', 'C홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('DuserId', 'D홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('EuserId', 'E홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('FuserId', 'F홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('GuserId', 'G홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('HuserId', 'H홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('IuserId', 'I홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
createData('JuserId', 'J홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
];

const mdTheme = createTheme();

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    height:"75%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    margin: 0,
    padding: 0,
};

const modalstyle = {
    backgroundColor: "lightgray",
    width:"30%",
};

function UserManage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userList, setUserList] = React.useState([]);
    
    let listUrl = 'http://localhost:8080/api/user/getUserList';

    const list = () => {
        axios.get(listUrl, {}).then(response => {
            setUserList(response.data);
        }).catch(e => {
            console.log(e);
        });
      };

    React.useEffect(() => {
        list();
    },[]);
    
    return (
        <ThemeProvider theme={mdTheme} >
            <Box sx={{ display: "flex"}} style={{maxWidth:"1750px"}}>
                <Box>
                    <List>
                        <AdminItemList/>
                    </List>
                </Box>
               
                <Container style={{ marginTop: "5%" }}>
                    <h1>회원 관리폼</h1>
                    <Box
                        component="form"
                        sx={{
                        "& .MuiTextField-root": { m: 1, width: "30ch" },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >이름</TableCell>
                                    <TableCell align="center">아이디</TableCell>
                                    <TableCell align="center">닉네임</TableCell>
                                    <TableCell align="center">전화번호</TableCell>
                                    <TableCell align="center">가입일</TableCell>
                                    <TableCell align="center">수정</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {userList.data ? userList.data.map((r) => (
                                <TableRow
                                key={r.userName}
                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {r.userName}
                                    </TableCell>
                                    <TableCell align="center">{r.userId}</TableCell>
                                    <TableCell align="center">{r.userNickname}</TableCell>
                                    <TableCell align="center">{r.userTel}</TableCell>
                                    <TableCell align="center">{r.userJoinYmd}</TableCell>
                                    <TableCell align="center">   
                                        <Button onClick={handleOpen}
                                            sx={{ border: "1px solid lightgray",
                                                backgroundColor: "#fff",
                                                borderRadius: "5px",
                                                width: "70px",
                                                height: "45px",                                           
                                                alignItems:"center",}}>
                                            <img className="AdminEdit" src="images/edit.png"/>
                                            수정
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) : <TableRow>조회된 데이터가 없습니다.</TableRow>}
                            </TableBody>
                        </Table>
                    </TableContainer>
  
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                     >
                        <form>
                        <Box sx={style}>
                            <Typography id="modal-modal-title" 
                            sx={{
                            fontSize:"25px",
                            fontWeight: "5rem",
                            backgroundColor: "rgb(178, 204, 90)",
                            }}>
                                회원 정보
                            </Typography>
                            
                            <TableContainer>
                               <Table>
                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        이름
                                    </TableCell>
                                    <TableCell>
                                        <input type="text" style={{border: "none"}} placeholder="userName"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        아이디
                                    </TableCell>
                                    <TableCell>
                                        <input type="text" style={{border: "none"}} placeholder="userId"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        닉네임
                                    </TableCell>
                                    <TableCell>
                                        <input type="text" style={{border: "none"}} placeholder="usernickname"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        주소
                                    </TableCell>
                                    <TableCell>
                                        <input type="text" style={{border: "none"}} placeholder="useraddr"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        상세주소
                                    </TableCell>
                                    <TableCell>
                                        <input type="text" style={{border: "none"}} placeholder="user_addr_detail"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        우편번호
                                    </TableCell>
                                    <TableCell>
                                        <input type="text" style={{border: "none"}} placeholder="userzipcode"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        메일
                                    </TableCell>
                                    <TableCell>
                                        <input type="email" style={{border: "none"}} placeholder="usermail"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        전화번호
                                    </TableCell>
                                    <TableCell>
                                        <input type="tel" style={{border: "none"}} placeholder="usertel"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        가입일자
                                    </TableCell>
                                    <TableCell>
                                        <input type="datetime" style={{border: "none"}} placeholder="userjoinymd"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        포인트
                                    </TableCell>
                                    <TableCell>
                                        <input type="number" style={{border: "none"}} placeholder="userpoint"/>
                                    </TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell component={"th"} 
                                               sx={modalstyle}>
                                        마케팅 수신여부
                                    </TableCell>
                                    <TableCell>
                                        <input type="text" style={{border: "none"}} placeholder="y"/>
                                    </TableCell>
                                 </TableRow>                                  
                               </Table>
                            </TableContainer>
                            <span class="buttonSpan">
                                <Button sx={{marginTop: "20px"}}>
                                    <img className="AdminEdit" src="images/edit.png"/>
                                        수정
                                </Button>
                                <Button sx={{marginTop: "20px"}}>
                                    <img className="AdminEdit" src="images/delete.png"/>
                                        삭제
                                </Button>
                            </span>
                        </Box>
                        </form>
                    </Modal>
                  </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default UserManage;
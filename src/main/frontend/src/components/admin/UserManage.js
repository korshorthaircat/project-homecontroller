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

function createData(userId, userName, userNickname, userTel, userJoinYmd, userUpdate) {
    return { userId, userName, userNickname, userTel, userJoinYmd, userUpdate };
  }


const rows = [
createData('AuserId', 'A홍길동', 'exnick', '010-0000-0001', '2022-08-24', ''),
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
    height:"50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    margin: 0,
    padding: 0,
};

function UserManage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ThemeProvider theme={mdTheme} >
            <Box sx={{ display: "flex"}} style={{maxWidth:"1750px"}}>
                <Box>
                    <List>
                        <AdminItemList/>
                    </List>
                </Box>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        flexGrow: 1,
                        minHeight: "100vh",
                        overflow: "auto",
                        }}
                >
                <Toolbar/>
                 <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>아이디</TableCell>
                                <TableCell align="center">이름</TableCell>
                                <TableCell align="center">닉네임</TableCell>
                                <TableCell align="center">전화번호</TableCell>
                                <TableCell align="center">가입일</TableCell>
                                <TableCell align="center">수정</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.userId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.userId}
                                </TableCell>
                                <TableCell align="center">{row.userName}</TableCell>
                                <TableCell align="center">{row.userNickname}</TableCell>
                                <TableCell align="center">{row.userTel}</TableCell>
                                <TableCell align="center">{row.userJoinYmd}</TableCell>
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
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                     >
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
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                 </TableRow>

                                 <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                 </TableRow>
                               </Table>
                            </TableContainer>
                        </Box>
                    </Modal>
                
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default UserManage;
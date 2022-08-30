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
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { borderBottom } from "@mui/system";

const mdTheme = createTheme();

const AdminOrderDetail = () => {
    return (
        <ThemeProvider theme={mdTheme}>
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
                            <Typography sx>
                              주문 정보
                            </Typography>

                            <Typography>
                              주문자 : 김비트("bitkim12")
                            </Typography>
                       </Box>
                        <Divider sx={{my: 2 , borderBottom: "2px solid gray"}}/>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default AdminOrderDetail;
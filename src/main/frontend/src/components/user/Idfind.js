import React, { useCallback, useState, useEffect  } from "react";
import { Button, TextField, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import axios from "axios";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Idfind = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const [userDetail, setUserDetail] = useState({});
  const [userName, setUserName] = useState("");
  const [userMail ,setUserMail] = useState("");
  const nameChange = (e) =>{
    setUserName(e.target.value)
    console.log(userName);
  };
  const mailChange = (e) =>{
    setUserMail(e.target.value)
  };

  const findId = (e) => {
    // console.log(userDetail.userDetail.userId);
      axios({
        method: "post",
        url:"http://localhost:8080/api/user/Idfind" ,
        params: { userName: userName,
                userMail : userMail},
      }).then((response) => {
        console.log(response.data.userDetail);
        setUserDetail(response.data.userDetail);
      }).catch(e => {
        console.log(e);
    })
  };
 

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" sx={{marginBottom: "15px"}}>
            아이디 찾기
          </Typography>
        </Grid>
      </Grid>  
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField            
              fullWidth
              label="가입시 작성하신 이름을 적어주세요"
              name="userName"
              value={userName}
              onChange={nameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="가입시 작성하신 메일을 적어주세요"
              name="userMail"
              value={userMail}
              onChange={mailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="button"  variant="contained"
                    onClick={() => {findId(); handleOpen();}}
                    color="success">
              찾기
            </Button>      
          </Grid>     
        </Grid>
        <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  아이디 찾기
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 , marginBottom:"15px"}}>
                  {userDetail ? (<>{userDetail.userId}</>) : (<></>)}
                </Typography>
                <Button type="button"  variant="contained" color="success">
                  <Link href="/login" sx={{color: "white"}}>
                            로그인
                  </Link>
                </Button>
              </Box>
          </Modal>
    </Container>
  );
};

export default Idfind;

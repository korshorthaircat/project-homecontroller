import React, { useCallback, useState, useEffect } from "react";
import { Button, TextField, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const PwFind = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
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
  const [userId, setUserId] = useState("");
  const [userMail, setUserMail] = useState("");
  const idChange = (e) => {
    setUserId(e.target.value);
  };
  const mailChange = (e) => {
    setUserMail(e.target.value);
  };

  const sendTemporaryPwMessage = (e) => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/user/Pwfind",
      params: { userId: userId, userMail: userMail },
    })
      .then((response) => {
        console.log(response.data.userDetail);
        // setUserDetail(response.data.userDetail);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" sx={{ marginBottom: "15px" }}>
            비밀번호 찾기
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="아이디를 적어주세요"
              name="userId"
              value={userId}
              onChange={idChange}
            />
          </Grid>
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
          <Button
            type="button"
            variant="contained"
            fullWidth
            onClick={() => {
              sendTemporaryPwMessage();
              handleOpen();
            }}
            color="success"
          >
            메일로 임시 비밀번호 발급하기
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
            메일로 임시 비밀번호 발급하기
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: "15px" }}
          >
            {userDetail ? <>{userDetail.userId}</> : <></>}
          </Typography>
          <Button type="button" variant="contained" color="success">
            <Link href="/login" sx={{ color: "white" }}>
              로그인
            </Link>
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default PwFind;

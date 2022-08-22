import React from "react";
import { Button, TextField, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const Login = () => {
  const login = (user) => {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/login",
      data: user,
    }).then((response) => {
      if (response.data.token) {
        //우리는 어디엔가 액세스토큰을 저장하고, 백엔드 서비스에 접근할 때 이 토큰을 요청에 동봉해야한다.
        //우리는 이를 로컬 스토리지를 이용해 구현할 것이다.
        //웹 스토리지를 이용하면 사용자의 브라우저에 데이터를 key-value 형태로 저장할 수 있다. (쿠키와 비슷)
        //웹 스토리지에는 두 종류가 있다. 세션 스토리지와 로컬 스토리지.
        //세션 스토리지는 브라우저를 닫으면 사라지고, 로컬스토리지는 브라우저를 닫아도 사라지지 않는다.
        //사용자가 브라우저를 재시작할때마다 로그인하게 하고 싶다면 세션 스토리지를, 브라우저를 재시작해도 로그인 상태를 유지하고 싶으면 로컬스토리지를 사용하면 된다.
        localStorage.setItem("ACCESS_TOKEN", response.data.token); //로컬 스토리지에 토큰 저장
        window.location.href = "/";
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userId = data.get("userId");
    const userPw = data.get("userPw");
    const userName = data.get("userName");
    const userNickname = data.get("userNickname");
    const userTel = data.get("userTel");
    const userMail = data.get("userMail");
    const userZip = data.get("userZip");
    const userAddr = data.get("userAddr");
    const userAddrDetail = data.get("userAddrDetail");
    const userMarketing = data.get("userMarketing");

    login({
      userId: userId,
      userPw: userPw,
      userName: userName,
      userNickname: userNickname,
      userTel: userTel,
      userMail: userMail,
      userZip: userZip,
      userAddr: userAddr,
      userAddrDetail: userAddrDetail,
      userMarketing: userMarketing,
    });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {" "}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="userId"
              label="아이디"
              name="userId"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="userPw"
              label="비밀번호"
              name="userPw"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="success">
              로그인
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/join" variant="body2">
              계정이 없으시면 여기서 회원가입하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;

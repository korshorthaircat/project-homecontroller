import React, { useCallback, useState } from "react";
import { Button, TextField, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const label = { inputProps: { "아이디 저장": "Checkbox demo" } };

const Login = () => {
  const login = (user) => {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/login",
      data: user,
    }).then((response) => {
      if (response.data.token) {
        //웹 스토리지를 이용하면 사용자의 브라우저에 데이터를 key-value 형태로 저장할 수 있다. (쿠키와 비슷)
        //웹 스토리지에는 두 종류가 있다. 세션 스토리지와 로컬 스토리지.
        //세션 스토리지는 브라우저를 닫으면 사라지고, 로컬스토리지는 브라우저를 닫아도 사라지지 않는다.
        //사용자가 브라우저를 재시작할때마다 로그인하게 하고 싶다면 세션 스토리지를, 브라우저를 재시작해도 로그인 상태를 유지하고 싶으면 로컬스토리지를 사용하면 된다.
        sessionStorage.setItem("ACCESS_TOKEN", response.data.token);
        //setUserInfo(response.data);
        sessionStorage.setItem("USER_INFO", JSON.stringify(response.data));
        window.location.href = "/";
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userId = data.get("userId");
    const userPw = data.get("userPw");
    login({
      userId: userId,
      userPw: userPw,
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
              autoComplete="userId"
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
              autoComplete="current-password"
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <FormGroup
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="아이디 저장하기"
              />
            </FormGroup>
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

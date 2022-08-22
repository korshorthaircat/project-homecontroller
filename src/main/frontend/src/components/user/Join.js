import React from "react";
import useState from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { join } from "../../service/ApiService";
import $ from "jquery";

const Join = () => {
  //id 중복체크가 됐는지 확인하는 변수
  let checkId = true;
  let pwValidation = true;
  let pwCheck = true;

  $("#pwValidation").hide();
  $("#pwCheckResult").hide();

  //아이디 중복 체크
  $("#btnIdCheck").on("click", function () {
    if ($("#userId").val() == null || $("#userId").val() == "") {
      alert("아이디를 입력하세요.");
      return;
    }
  });

  $("#userId").on("change", function () {
    checkId = false;
    $("#btnIdCheck").attr("disabled", false);
  });

  //비밀번호 유효성 검사
  function validatePassword(character) {
    return /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,}$/.test(character);
  }

  $("#userPw").on("change", function () {
    if (!validatePassword($("#userPw").val())) {
      pwValidation = false;
      $("#pwValidation").show();
      $("#userPw").focus();
    } else {
      pwValidation = true;
      $("#pwValidation").hide();
    }

    if ($("#userPw").val() == $("#userPwCheck").val()) {
      pwCheck = true;
      $("#pwCheckResult").css("color", "green");
      $("#pwCheckResult").text("비밀번호가 일치합니다.");
    } else {
      pwCheck = false;
      $("#pwCheckResult").css("color", "red");
      $("#pwCheckResult").text("비밀번호가 일치하지 않습니다.");
    }
  });

  //비밀번호 확인
  $("#userPwCheck").on("change", function () {
    $("#pwCheckResult").show();

    if ($("#userPw").val() == $("#userPwCheck").val()) {
      pwCheck = true;
      $("#pwCheckResult").css("color", "green");
      $("#pwCheckResult").text("비밀번호가 일치합니다.");
    } else {
      pwCheck = false;
      $("#pwCheckResult").css("color", "red");
      $("#pwCheckResult").text("비밀번호가 일치하지 않습니다.");
    }
  });

  //회원가입할(회원가입 폼 서브밋될) 때 마지막 유효성 검사
  $("#joinForm").on("submit", function (e) {
    if (!checkId) {
      alert("아이디 중복체크를 진행해주세요.");
      $("#userId").focus();
      e.preventDefault();
      return;
    }

    if (!pwValidation) {
      alert(
        "비밀번호는 영문자, 숫자, 특수문자 조합의 9자리 이상으로 설정해주세요."
      );
      $("#userPw").focus();
      e.preventDefault();
      return;
    }

    if (!pwCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      $("#userPwCheck").focus();
      e.preventDefault();
      return;
    }
  });

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

    join({
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
    }).then((response) => {
      //회원가입 성공시 로그인 페이지로 이동
      window.location.href = "/login";
    });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <form noValidate onSubmit={handleSubmit} id="joinForm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              className="logo"
              src="images/logo.png"
              style={{ width: "400px" }}
            />
            <Typography component="h1" variant="h5">
              회원가입
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              name="userId"
              variant="outlined"
              required
              fullWidth
              id="userId"
              label="아이디"
              autoFocus
            />
            <Button id="btnIdCheck" variant="outlined" color="success">
              중복체크
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userPw"
              variant="outlined"
              required
              fullWidth
              id="userPw"
              label="비밀번호"
              type="password"
            />
            <Typography
              id="pwValidation"
              style={{ color: "red", fontSize: "0.8rem" }}
            >
              비밀번호는 영문자, 숫자, 특수문자 조합의 9자리 이상으로
              설정해주세요.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userPwCheck"
              variant="outlined"
              required
              fullWidth
              id="userPwCheck"
              label="비밀번호 확인"
              type="password"
            />
            <Typography
              id="pwCheckResult"
              style={{ fontSize: "0.8rem" }}
            ></Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="userName"
              variant="outlined"
              required
              fullWidth
              id="userName"
              label="이름"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userNickname"
              variant="outlined"
              required
              fullWidth
              id="userNickname"
              label="닉네임"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userTel"
              variant="outlined"
              required
              fullWidth
              id="userTel"
              label="전화번호"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userMail"
              variant="outlined"
              required
              fullWidth
              id="userMail"
              label="이메일"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userZip"
              variant="outlined"
              required
              fullWidth
              id="userZip"
              label="우편번호"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userAddr"
              variant="outlined"
              required
              fullWidth
              id="userAddr"
              label="주소"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="userAddrDetail"
              variant="outlined"
              required
              fullWidth
              id="userAddrDetail"
              label="세부 주소"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  value="y"
                  name="userMarketing"
                  id="userMarketing"
                  color="success"
                />
              }
              label="나의 프로필, 관심사, 그리고 구매 이력에 따라 맞춰진 HomeController의 홈퍼니싱 아이디어와 신상품 소식, 그리고 할인 혜택 정보를 받고 싶어요!"
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="success">
              회원가입
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              이미 계정이 있습니까? 로그인하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Join;

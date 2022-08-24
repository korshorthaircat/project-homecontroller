import React, { useRef, useState, useCallback, useEffect } from "react";
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
import { useDaumPostcodePopup } from "react-daum-postcode";

const Join = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userMail, setUserMail] = useState("");

  const [isPassword, setIsPassword] = useState(false);
  const [isCheckedPassword, setIsCheckedPassword] = useState(false);

  useEffect(() => {
    //userPw 텍스트필드의 헬퍼텍스트 컬러 변경
    if (isPassword) {
      document.getElementById("userPw-helper-text").style.color = "green";
    } else {
      document.getElementById("userPw-helper-text").style.color = "red";
    }
  }, [userPw]);

  const onIdHandler = (event) => {
    setUserId(event.currentTarget.value);
  };

  const onChangePassword = useCallback(
    (event) => {
      const passwordRegex = new RegExp(
        "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$"
      );
      setUserPw(event.currentTarget.value);

      if (!passwordRegex.test(userPw)) {
        setIsPassword(false);
      } else {
        setIsPassword(true);
      }
    },
    [userPw]
  );

  const onPwCheckHandler = (event) => {
    setUserPwCheck(event.currentTarget.value);
  };

  useEffect(() => {
    setUserPwCheck((currentValue) => currentValue);

    console.log(userPw);
    console.log(userPwCheck);

    if (userPw !== userPwCheck) {
      setIsCheckedPassword(false);
    } else {
      setIsCheckedPassword(true);
    }

    if (userPw !== userPwCheck) {
      setIsCheckedPassword(false);
    } else {
      setIsCheckedPassword(true);
    }
  }, [userPwCheck]);

  const onNameHandler = (event) => {
    setUserName(event.currentTarget.value);
  };

  const onNicknameHandler = (event) => {
    setUserNickname(event.currentTarget.value);
  };

  const onTelHandler = (event) => {
    setUserTel(event.currentTarget.value);
  };

  const onMailHandler = (event) => {
    setUserMail(event.currentTarget.value);
  };

  const hasNotSameError = useCallback(
    (str) => {
      return userPw !== userPwCheck ? true : false;
    },
    [userPw, userPwCheck]
  );

  const onSubmitHandler = (event) => {
    event.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막음

    const data = new FormData(event.target);
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

    if (!(isPassword && isCheckedPassword)) {
      console.log(isPassword);
      console.log(isCheckedPassword);
      alert("제대로 입력하세요.");
      return;
    } else {
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
    }
  };

  //우편번호 및 주소 조회(다음 우편번호 검색 서비스 사용)
  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  let [zipCode, setZipCode] = useState("");
  let [fullAddress, setFullAddress] = useState("");

  const handleComplete = (data) => {
    fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setZipCode(data.zonecode);
      setFullAddress(fullAddress);
    }

    // console.log(data);
    // console.log(zipCode);
    // console.log(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  }; //onComplete - 우편번호 검색이 끝났을 때 사용자가 선택한 정보를 받아올 콜백함수. 주소 데이터의 구성은 Daum 가이드를 참고.

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <form noValidate onSubmit={onSubmitHandler} id="joinForm">
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
          <Grid item xs={12} sm={8}>
            <TextField
              name="userId"
              variant="outlined"
              required
              fullWidth
              id="userId"
              label="아이디"
              autoFocus
              value={userId}
              onChange={onIdHandler}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              id="btnIdCheck"
              variant="contained"
              color="success"
              style={{ width: "111px", height: "56px" }}
            >
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
              value={userPw}
              onChange={onChangePassword}
              helperText={
                isPassword
                  ? "안전한 비밀번호입니다."
                  : "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
              }
            />
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
              value={userPwCheck}
              onChange={onPwCheckHandler}
              error={hasNotSameError("userPwCheck")}
              helperText={
                hasNotSameError("userPwCheck")
                  ? "입력한 비밀번호와 일치하지 않습니다."
                  : null
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="userName"
              variant="outlined"
              required
              fullWidth
              id="userName"
              label="이름"
              value={userName}
              onChange={onNameHandler}
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
              value={userNickname}
              onChange={onNicknameHandler}
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
              helperText="숫자만 입력해주세요. 예) 01012345678"
              value={userTel}
              onChange={onTelHandler}
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
              value={userMail}
              onChange={onMailHandler}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              id="userZipSearch"
              variant="contained"
              color="success"
              style={{ height: "56px" }}
              onClick={handleClick}
            >
              우편번호 검색
            </Button>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              name="userZip"
              variant="outlined"
              required
              fullWidth
              id="userZip"
              label="우편번호"
              value={zipCode}
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
              value={fullAddress}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              style={{ height: "56px" }}
              onSubmit={onSubmitHandler}
            >
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

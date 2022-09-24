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
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const Join = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userMailCheck, setUserMailCheck] = useState(""); //메일 인증코드(user입력)
  const [userMailConfirm, setUserMailConfirm] = useState(""); //메일 인증코드(백단에서 받아옴)

  //비밀번호가 형식에 부합하는 경우(true)
  const [isPassword, setIsPassword] = useState(false);
  //비빌번호와 비밀번호체크가 서로 일치하는 경우(true)
  const [isCheckedPassword, setIsCheckedPassword] = useState(false);
   //아이디가 형식에 부합하는 경우(true)
   const [isId, setIsId] = useState(false);
  //아이디가 중복되지 않은 경우(true)
  const [isValidId, setIsValidId] = useState(false);
  //이메일 인증을 완료한 경우(true)
  const [isValidMail, setIsValidMail] = useState(false);

  //에러 메시지
  const [userPwMessage, setUserPwMessage] = useState("");
  const [userIdMessage, setUserIdMessage] = useState("");
  const [userEmailCheckMessage, setUserEmailCheckMessage] = useState("");
  const [userPwCheckMessage, setUserPwCheckMessage] = useState("");

  //state의 변화 감지
  const onIdHandler = (event) => {
      const regex = /[^a-zA-Z].{4,8}$/
      if (!regex.test(userId)) {
        setIsId(false);
        setUserIdMessage(
          "특수 문자를 제외하고 4자리 이상 8자리 미만으로 적어주세요."
        );
      } else {
        setIsId(true);
        setUserIdMessage("");
      }
      setUserId(event.target.value);
    };

  const onPwHandler = useCallback(
    (event) => {
      const passwordRegex = new RegExp(
        "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$"
      );

      setUserPw(event.currentTarget.value);

      //비밀번호 형식 검사
      if (!passwordRegex.test(userPw)) {
        setIsPassword(false);
        setUserPwMessage(
          "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
        );
      } else {
        setIsPassword(true);
        setUserPwMessage("");
      }
    },
    [userPw]
  );

  const onPwCheckHandler = (event) => {
    setUserPwCheck(event.currentTarget.value);
  };

  useEffect(() => {
    setUserPwCheck((currentValue) => currentValue);

    //비밀번호 일치 여부 검사
    if (userPw !== userPwCheck) {
      setIsCheckedPassword(false);
      setUserPwCheckMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setIsCheckedPassword(true);
      setUserPwCheckMessage("비밀번호가 일치합니다.");
    }
  }, [userPwCheck]);

  const hasNotSameError = useCallback(
    (str) => {
      return userPw !== userPwCheck ? true : false;
    },
    [userPw, userPwCheck]
  );

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

  const onMailCheckHandler = (event) => {
    setUserMailCheck(event.currentTarget.value);

    //이메일 인증코드 검사
    if (userMailConfirm === event.target.value) {
      setUserEmailCheckMessage("인증코드가 일치합니다.");
      setIsValidMail(true);
    } else {
      setUserEmailCheckMessage("인증코드가 일치하지 않습니다.");
      setIsValidMail(false);
    }
  };

  //userPw 텍스트필드의 헬퍼텍스트 컬러 변경
  // useEffect(() => {
  //   if (isPassword) {
  //     document.getElementById("userPw-helper-text").style.color = "green";
  //   } else {
  //     document.getElementById("userPw-helper-text").style.color = "red";
  //   }
  // }, [userPw]);

  //아이디 중복 조회 버튼 클릭시
  const checkId = () => {
    if (userId == null) {
      alert("아이디를 입력하세요.");
      return;
    }
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/checkId",
      data: { userId: userId },
    }).then((response) => {
      //console.log(response);
      if (response.data === "") {
        alert("사용할 수 있는 아이디입니다.");
        setIsValidId(true);
      } else {
        alert("중복 아이디입니다. 다른 아이디를 사용해주세요.");
        setIsValidId(false);
      }
    });
  };

  //이메일 인증코드 전송 버튼 클릭시
  const validateMail = () => {
    alert("인증코드를 발송했습니다. 메일을 확인해주세요.");
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/validateMail",
      data: { userMail: userMail },
    }).then((response) => {
      //console.log(response.data);
      setUserMailConfirm(response.data);
    });
  };

  //우편번호 검색 버튼 클릭시
  const handleZipBtnClick = () => {
    open({ onComplete: handleComplete });
  }; //onComplete - 우편번호 검색이 끝났을 때 사용자가 선택한 정보를 받아올 콜백함수. 주소 데이터의 구성은 Daum 가이드를 참고.

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
  };

  //회원가입 버튼 클릭시
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

    if (!isPassword) {
      alert("숫자+영문자+특수문자 조합으로 10자리 이상 입력해주세요.");
      return;
    } else if (!isCheckedPassword) {
      alert("입력한 비밀번호와 일치하지 않습니다.");
      return;
    } else if (!isValidId) {
      alert("아이디 중복체크를 진행해주세요.");
      return;
      // } else if (!isValidMail) {
      //   alert("이메일 인증을 진행해주세요.");
      //   return;
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

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <form noValidate onSubmit={onSubmitHandler} id="joinForm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              className="logo"
              src="images/logo.png"
              style={{ width: "400px" }}
              alt="로고"
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
            {userId.length > 0 && (
              <span className={`message ${isId ? "success" : "error"}`}>
                {userIdMessage}
              </span>
            )}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              id="btnIdCheck"
              variant="contained"
              color="success"
              style={{ width: "111px", height: "56px" }}
              onClick={checkId}
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
              onChange={onPwHandler}
            />
            {userPw.length > 0 && (
              <span className={`message ${isPassword ? "success" : "error"}`}>
                {userPwMessage}
              </span>
            )}
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
            />
            {userPwCheck.length > 0 && (
              <span
                className={`message ${isCheckedPassword ? "success" : "error"}`}
              >
                {userPwCheckMessage}
              </span>
            )}
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

          <Grid item xs={12} sm={8}>
            <TextField
              name="userMail"
              variant="outlined"
              required
              fullWidth
              id="userMail"
              label="이메일"
              type="email"
              helperText="예) homecontroller@gmail.com"
              value={userMail}
              onChange={onMailHandler}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              id="btnMailCheck"
              variant="contained"
              color="success"
              style={{ width: "115px", height: "56px" }}
              onClick={validateMail}
            >
              인증코드 전송
            </Button>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="userMailCheck"
              name="userMailCheck"
              label="메일 인증코드"
              variant="outlined"
              required
              value={userMailCheck}
              onChange={onMailCheckHandler}
            />
            {userMailCheck.length > 0 && (
              <span className={`message ${isValidMail ? "success" : "error"}`}>
                {userEmailCheckMessage}
              </span>
            )}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Button
              id="userZipSearch"
              variant="contained"
              color="success"
              style={{ height: "56px" }}
              onClick={handleZipBtnClick}
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

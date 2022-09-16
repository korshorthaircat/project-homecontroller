import "../../css/userupdate.css";
import React, { useRef, useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { API_BASE_URL } from "../../app-config";
import {
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Modal,
} from "@mui/material";
import axios from "axios";
import { useDaumPostcodePopup } from "react-daum-postcode";

const ariaLabel = { "aria-label": "description" };
function UserUpdate() {
  // 화면 input 항목 = DB 정보
  const [inputs, setInputs] = useState({
    userZip: "",
    userAddr: "",
    userAddrDetail: "",
    userId: "",
    userMail: "",
    userName: "",
    userNickname: "",
    userPoint: "",
    userTel: "",
    userPw: "",
  });

  //////////////////////////////////////////////////////////////////////////////////

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userTel, setUserTel] = useState("");

  //비밀번호가 형식에 부합하는 경우(true)
  const [isPassword, setIsPassword] = useState(false);
  //비빌번호와 비밀번호체크가 서로 일치하는 경우(true)
  const [isCheckedPassword, setIsCheckedPassword] = useState(false);
  //아이디가 중복되지 않은 경우(true)
  const [isValidId, setIsValidId] = useState(false);
  //이메일 인증을 완료한 경우(true)
  const [isValidMail, setIsValidMail] = useState(false);

  //에러 메시지
  const [userPwMessage, setUserPwMessage] = useState("");
  const [userEmailCheckMessage, setUserEmailCheckMessage] = useState("");
  const [userPwCheckMessage, setUserPwCheckMessage] = useState("");

  //state의 변화 감지
  const onIdHandler = (event) => {
    setUserId(event.currentTarget.value);
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

  ////////////////////////////////////////////////////////////////////////////////////

  // db에서 회원정보 데이터 받아오기
  const getUser = () => {
    let url = "http://localhost:8080/api/user/getUser";
    var userInfoStr = sessionStorage.getItem("USER_INFO"); // 로그인한 사용자의 ID 를 가져오기 위한 세션 정보 활용
    var userInfo = JSON.parse(userInfoStr); // 세션에 JSON String 으로 등록된 사용자 정보를 JSON 형태로 변환
    axios({
      method: "post",
      url: url,
      data: { userId: userInfo.userId }, // DB 조회를 위한 사용자 ID
    }).then((response) => {
      //    }).then(({data}) => { // ES6 구조분해 문법
      //      var usrData = data.data[0]; // ES6 구조분해 문법
      var usrData = response.data.data[0]; // DB 조회 결과
      // DB 조회 결과를 화면 input 항목에 반영
      setInputs({
        userZip: usrData.userZip,
        userAddr: usrData.userAddr,
        userAddrDetail: usrData.userAddrDetail,
        userId: usrData.userId,
        userMail: usrData.userMail,
        userName: usrData.userName,
        userNickname: usrData.userNickname,
        userPoint: usrData.userPoint,
        userTel: usrData.userTel,
        userPw: usrData.userPw,
      });
      console.log(usrData);
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

  let [zipCode, setZipCode] = useState(inputs.userZip);
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

      setInputs({
        ...inputs,
        userZip: data.zonecode,
        userAddr: fullAddress,
      });
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // 화면 input 항목들의 변경 내용을 React 상태 갱신
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 비밀번호 변경 모달
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const [pwdOpen, setPwdOpen] = React.useState(false);
  const handlePwdOpen = () => {
    setPwdOpen(true);
  };
  const handlePwdClose = () => {
    setPwdOpen(false);
  };

  const updateUserInfo = (e) => {
    if (window.confirm("수정한 내용을 저장하시겠어요? ^^")) {
      // 화면 유효성 검사
      // 화면의 값들이 정상적인 값인지 체크해야한다
      // ex:) 아래 조건들이 충족되지 않으면 정보 변경은 할 수 없다
      // 비어있으면 안되는 값들이 비어있는지 체크 해야한다
      // 휴대폰 번호는 숫자만 들어갈 수 있게 한다
      console.log("수정버튼클릭");
      let url = "http://localhost:8080/api/mypage/updateUserInfo";
      axios({
        method: "post",
        url: url,
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
        },
        data: inputs, // 화면 input 항목에 대한 정보
      }).then((response) => {
        console.log("잘되나");
        window.location.href = "/userupdate";
      });
    }
  };
  //회원탈퇴 버튼 클릭시
  const deleteUserInfo = (e) => {
    if (window.confirm("정말로 떠나시겠어요?😢")) {
      // 화면 유효성 검사
      // 화면의 값들이 정상적인 값인지 체크해야한다
      // ex:) 아래 조건들이 충족되지 않으면 정보 변경은 할 수 없다
      // 비어있으면 안되는 값들이 비어있는지 체크 해야한다
      // 휴대폰 번호는 숫자만 들어갈 수 있게 한다
      console.log("탈퇴버튼 클릭");
      let url = "http://localhost:8080/api/mypage/deleteUserInfo";
      axios({
        method: "post",
        url: url,
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
        },
        data: inputs, // 화면 input 항목에 대한 정보
      }).then((response) => {
        alert("삭제됨");

        //로컬과 세션에 담긴 유저 정보 삭제
        localStorage.removeItem("USER_INFO");
        localStorage.removeItem("ACCESS_TOKEN");
        sessionStorage.removeItem("USER_INFO");
        sessionStorage.removeItem("ACCESS_TOKEN");
        console.log("잘되나");
        window.location.href = "/Join";
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userId = data.get("userId");
    const userPw = data.get("userPw");
    UserUpdate({
      userId: userId,
      userPw: userPw,
    });
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          나의정보 수정
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          회원 탈퇴
        </div>
        {/* <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Tab 1</div> */}
      </div>

      {/* CONTENT 부분 */}
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div className="outCard">
            <div class="card text-center">
              <div class="card-header">
                <h5 class="card-title">
                  {inputs.userNickname} 님의 회원정보는 아래와 같습니다.{" "}
                </h5>
              </div>
              <div class="card-body"></div>

              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 5 },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <Input
                    name="userId"
                    value={inputs.userId}
                    inputProps={ariaLabel}
                    onChange={onChange}
                    readOnly
                  />
                </div>
                <div>
                  <Input
                    name="userNickname"
                    value={inputs.userNickname}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Input
                    name="userName"
                    value={inputs.userName}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Input
                    name="userMail"
                    value={inputs.userMail}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Input
                    name="userTel"
                    value={inputs.userTel}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Input
                    name="userPoint"
                    value={inputs.userPoint}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Button
                    id="userZipSearch"
                    variant="contained"
                    color="success"
                    style={{ height: "56px" }}
                    onClick={handleZipBtnClick}
                  >
                    우편번호 검색
                  </Button>
                  <Input
                    name="userZip"
                    value={inputs.userZip}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Input
                    name="userAddr"
                    value={inputs.userAddr}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <Input
                    name="userAddrDetail"
                    value={inputs.userAddrDetail}
                    inputProps={ariaLabel}
                    onChange={onChange}
                  />
                </div>

                {/* setInputs({
        userZip        : usrData.userZip
       ,userAddr       : usrData.userAddr
       ,userAddrDetail : usrData.userAddrDetail */}

                <Grid item xs={12} sm={4}></Grid>
              </Box>

              <div className="outBtn">
                <Button
                  type="button"
                  className="pwChange"
                  variant="contained"
                  color="success"
                  onClick={handlePwdOpen}
                >
                  비밀번호변경
                </Button>
              </div>

              <Modal
                open={pwdOpen}
                onClose={handlePwdClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: 400 }}>
                  <form noValidate onSubmit={handleSubmit}>
                    {" "}
                    <h2 id="parent-modal-title">Text in a modal</h2>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="userPw"
                        label="현재비밀번호"
                        name="userPw"
                        type="password"
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="userPw"
                        variant="outlined"
                        required
                        fullWidth
                        id="userPw"
                        label="새비밀번호"
                        type="password"
                        // value=""
                        onChange={onChange}
                      />
                      {userPw.length > 0 && (
                        <span
                          className={`message ${
                            isPassword ? "success" : "error"
                          }`}
                        >
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
                          className={`message ${
                            isCheckedPassword ? "success" : "error"
                          }`}
                        >
                          {userPwCheckMessage}
                        </span>
                      )}
                    </Grid>
                    <button onClick={updateUserInfo}>확인</button>
                    <button>취소</button>
                  </form>
                </Box>
              </Modal>

              <div className="outBtn">
                <Button
                  type="button"
                  className="updateBtn"
                  variant="contained"
                  color="success"
                  onClick={updateUserInfo}
                >
                  수정
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={toggleState === 2 ? "content active-content" : "content"}>
        <div className="outCard">
          <div class="card text-center">
            <div class="card-header">
              <h5 class="card-title">
                HomeController 멤버십을 탈퇴하면 {inputs.userNickname} 님께
                발행된 할인 쿠폰과 적립된 포인트를 모두 사용할 수 없게 됩니다.
              </h5>
            </div>
            <div class="card-body">
              <div className="pointPart">
                <h5>
                  {inputs.userNickname} 님의 현재까지 누적 포인트 :{" "}
                  {inputs.userPoint} POINT
                </h5>
                <h5>지금 바로 사용 가능한 쿠폰</h5>
                <img src="https://i.pinimg.com/564x/84/ab/ab/84abab661b1bab887559f001d80bc1f5.jpg"></img>
              </div>

              <div className="outBtn">
                <button className="outButton" onClick={deleteUserInfo}>
                  멤버십 탈퇴하기
                </button>
              </div>
            </div>
            <div class="card-footer text-muted">
              HomeController 이용에 관한 불편함이나 건의사항이 있으시다면 문의
              게시판에 언제든지 작성해주세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserUpdate;

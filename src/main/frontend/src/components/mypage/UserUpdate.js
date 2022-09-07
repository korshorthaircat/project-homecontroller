import "../../css/userupdate.css";
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
  Modal,
  Box,
} from "@mui/material";
import { join } from "../../service/ApiService";
import { useDaumPostcodePopup } from "react-daum-postcode";
import axios from "axios";
import { margin } from "@mui/system";

function UserUpdate() {
  // 화면 input 항목들 상태 관리 시작
  // 화면 input 항목 = DB 정보
  const [inputs, setInputs] = useState({
     userZip        : ''
    ,userAddr       : ''
    ,userAddrDetail : ''
    ,userId         : ''
    ,userMail       : ''
    ,userName       : ''
    ,userNickname   : ''
    ,userPoint      : ''
    ,userTel        : ''
  });

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
        userZip        : usrData.userZip
       ,userAddr       : usrData.userAddr
       ,userAddrDetail : usrData.userAddrDetail
       ,userId         : usrData.userId
       ,userMail       : usrData.userMail
       ,userName       : usrData.userName
       ,userNickname   : usrData.userNickname
       ,userPoint      : usrData.userPoint
       ,userTel        : usrData.userTel
      });
    });
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
    const { name, value }  = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 비밀번호 변경 모달
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
    // 화면 유효성 검사
    // 화면의 값들이 정상적인 값인지 체크해야한다
    // ex:) 아래 조건들이 충족되지 않으면 정보 변경은 할 수 없다
    // 비어있으면 안되는 값들이 비어있는지 체크 해야한다
    // 휴대폰 번호는 숫자만 들어갈 수 있게 한다
    console.log('수정버튼클릭');
    let url = 'http://localhost:8080/api/mypage/updateUserInfo';
    axios({
      method: "post",
      url: url,
      headers: {
        Authorization : "Bearer " + sessionStorage.getItem("ACCESS_TOKEN")
      },
      data: inputs, // 화면 input 항목에 대한 정보
    }).then((response) => {
      window.location.href = "/userupdate";
    });
  };


  //회원탈퇴버튼 클릭시 재확인하는 부분
  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
  
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };
  
    return confirmAction;
  };
  const deleteConfirm = () => console.log("탈퇴 처리가 완료되었습니다.");
  const cancelConfirm = () => console.log("취소했습니다.");
  const confirmDelete = useConfirm(
    "탈퇴하시겠습니까?",
    deleteConfirm,
    cancelConfirm
  );

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
          나의정보 수정
        </div>
        <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >
          회원 탈퇴
        </div>
        {/* <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Tab 1</div> */}
      </div>

      {/* CONTENT 부분 */}
      <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : "content"} >

        <div  className="outCard">
          <div class="card text-center">
            <div class="card-header">
              <h5 class="card-title">{inputs.userNickname} 님의 회원정보는 아래와 같습니다. </h5>
            </div>
            <div class="card-body"></div>

          <div className="updateInput">    
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">ID</span>
              <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon" name='userId' value={inputs.userId} readOnly />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">이름</span>
              <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" name='userName' value={inputs.userName} onChange={onChange} />
              <span className="input-group-text" id="basic-addon1">닉네임</span>
              <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" name='userNickname' value={inputs.userNickname} onChange={onChange} />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">이메일</span>
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" name='userMail' value={inputs.userMail} onChange={onChange} />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">전화번호</span>
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" name='userTel' value={inputs.userTel} onChange={onChange} />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">POINT</span>
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" name='userPoint' value={inputs.userPoint} readOnly />
            </div>

            <div className="input-group mb-3">
              {/* 주소변경하기버튼 추가해야함 주소변경하는 기능 띄워줘야함 */}
              <span className="input-group-text" id="basic-addon1">주소</span>
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" name='userZip' value={inputs.userZip} readOnly />
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" name='userAddr' value={inputs.userAddr} readOnly />
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" name='userAddrDetail' value={inputs.userAddrDetail} onChange={onChange} />
            </div>
          </div>

          <Button type="button" variant="contained" color="success" onClick={handlePwdOpen} >비밀번호변경</Button>

          <Modal
            open={pwdOpen}
            onClose={handlePwdClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>
              <h2 id="parent-modal-title">Text in a modal</h2>
              <p id="parent-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </Box>
          </Modal>
          <div className="outBtn">
          <button className="outButton" onClick={updateUserInfo}>정보 수정하기</button>
          </div>
          </div>
          </div>
          </div>
          </div>

        <div className={toggleState === 2 ? "content active-content" : "content"} >
          <div  className="outCard">
          <div class="card text-center">
            <div class="card-header">
              <h5 class="card-title">HomeController 멤버십을 탈퇴하면 {inputs.userNickname} 님께 발행된 할인 쿠폰과 적립된 포인트를 모두 사용할 수 없게 됩니다.</h5>
            </div>
            <div class="card-body">
              
              
              <div className="pointPart">
              <h5>{inputs.userNickname} 님의 현재까지 누적 포인트 : {inputs.userPoint} POINT</h5>
              <h5>지금 바로 사용 가능한 쿠폰</h5>
              <img src="https://i.pinimg.com/564x/84/ab/ab/84abab661b1bab887559f001d80bc1f5.jpg"></img>
              </div>
              
              <div className="outBtn">
              <button className="outButton" onClick={confirmDelete}>멤버십 탈퇴하기</button>
              </div>
            </div>
            <div class="card-footer text-muted">
              HomeController 이용에 관한 불편함이나 건의사항이 있으시다면 문의 게시판에 언제든지 작성해주세요.  
            </div>
        </div>
        </div>
        </div>
        </div>
      
  );
}

export default UserUpdate;

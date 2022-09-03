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
} from "@mui/material";
import { join } from "../../service/ApiService";
import { useDaumPostcodePopup } from "react-daum-postcode";
import axios from "axios";

function UserUpdate() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userMail, setUserMail] = useState("");

  const [isPassword, setIsPassword] = useState(false);
  const [isCheckedPassword, setIsCheckedPassword] = useState(false);

  //db에서 회원정보 데이터 받아오기
  let url = "http://localhost:8080/api/user/getUser";

  const getUser = () => {
    axios({
      method: "post",
      url: url,
      data: { userId: "gogo" },
    }).then((response) => {
        setUserInfo(response.data);
      console.log(response);
    });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const [userInfo, setUserInfo] = React.useState({});





  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
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
        <div className="updateInput">    
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">ID</span>
        <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon"></input>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">이름</span>
        <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
        <span class="input-group-text" id="basic-addon1">닉네임</span>
        <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">이메일</span>
        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">전화번호</span>
        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">POINT</span>
        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        </div>

        {/* 주소변경하기버튼 추가해야함 
            주소변경하는 기능 띄워줘야함 */}
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">주소</span>
        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">$</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
          <span class="input-group-text">.00</span>
        </div>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Username" aria-label="Username"></input>
          <span class="input-group-text">@</span>
          <input type="text" class="form-control" placeholder="Server" aria-label="Server"></input>
        </div>

        <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>    
        </div>      
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
        
          
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>세번째 내용입니다</h2>
          {/* <hr></hr> */}
          <p>t</p>
        </div>
      </div>
    </div>
  );
}

export default UserUpdate;

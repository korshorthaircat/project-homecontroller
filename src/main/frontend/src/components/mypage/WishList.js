import "../../css/wish.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import InfiniteCarousel from 'react-leaf-carousel';
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import axios from "axios";
import { useRef, useState, useCallback, useEffect } from "react";


function WishList () {
  
// 화면 input 항목들 상태 관리 시작
  // 화면 input 항목 = DB 정보
  const [inputs, setInputs] = useState({
    productNo        : ''
   ,productImageNo   : ''
 });

 // db에서 회원정보 데이터 받아오기
 const getWishItem = () => {
   let url = "http://localhost:8080/api/wish/getWishItemList";
   var userInfoStr = sessionStorage.getItem("USER_INFO"); // 로그인한 사용자의 ID 를 가져오기 위한 세션 정보 활용
   var userInfo = JSON.parse(userInfoStr); // 세션에 JSON String 으로 등록된 사용자 정보를 JSON 형태로 변환
   axios({
     method: "post",
     url: url,
     data: { userId: userInfo.userId }, // DB 조회를 위한 사용자 ID
   }).then((response) => {

     var usrData = response.data.data[0]; // DB 조회 결과
     // DB 조회 결과를 화면 input 항목에 반영
     setInputs({
       productNo      : usrData.productNo 
      ,productImageNo : usrData.productImageNo
      
     });
   });
 };

 React.useEffect(() => {
  getWishItem();
 }, []);

//  const [toggleState, setToggleState] = useState(1);

//  const toggleTab = (index) => {
//    setToggleState(index);
//  };

 // 화면 input 항목들의 변경 내용을 React 상태 갱신
 const onChange = (e) => { 
   const { name, value }  = e.target;
   setInputs({
     ...inputs,
     [name]: value,
   });
 };


    return (
      
      <div>
      {/* 위시리스트 캐러셀*/}
      <div className="infinit">
        <div className="title"><h1>나의 위시리스트</h1></div>
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1} //양 옆 반투명공간 사이즈 
    slidesToScroll={1}  //몇개씩 넘어가는지 
    slidesToShow={7}  //몇개보여줄건지 
    scrollOnDevice={true}
  >
    
    
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c5/9a/ff/c59aff9c739f0a92eb70933f72fe14c8.jpg'
      />
      <h5 name='productNo' value={inputs.productNo}></h5> 
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/09/c5/41/09c541ec335f3f6ca9b4dd1d67d2b580.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/72/f2/21/72f221be793a4f692320ba691b20ea95.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/24/34/0b/24340b89b970040cf4ac54e75b7db3de.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/ec/99/81/ec9981f9fbb127309986bbebbb7714ee.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/13/20/34/13203474a20290b3de74864e3577f50f.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/81/39/5c/81395c424b5e3fe25cceccd60d55b5b1.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c5/9a/ff/c59aff9c739f0a92eb70933f72fe14c8.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/6c/28/71/6c2871e8c2a49195bee470441995cbdd.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/e8/53/d1/e853d1abdce5f872a0341e625b0f6c77.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/38/57/c9/3857c9c60570401891fbca90c53ac252.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/8f/fb/3d/8ffb3dc7eda3b0a354625c65dc40c1fa.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/5a/17/82/5a1782c769d6eccb1394b22aeeec6799.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/2e/e1/70/2ee170deefa7046635e275a14b23578d.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/2b/82/06/2b8206cc7cbd2417be90affac1668ed4.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/6c/28/71/6c2871e8c2a49195bee470441995cbdd.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c8/3f/4f/c83f4f520a1dbf10b94d274c4439fade.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    
  </InfiniteCarousel>
  </div>


  {/* 위시쇼룸 캐러셀*/}
  <div className="infinit">
        <div className="title"><h1>나의 위시쇼룸</h1></div>
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1} //양 옆 반투명공간 사이즈 
    slidesToScroll={1}  //몇개씩 넘어가는지 
    slidesToShow={7}  //몇개보여줄건지 
    scrollOnDevice={true}
  >
    
    
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c5/9a/ff/c59aff9c739f0a92eb70933f72fe14c8.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/09/c5/41/09c541ec335f3f6ca9b4dd1d67d2b580.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/72/f2/21/72f221be793a4f692320ba691b20ea95.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/24/34/0b/24340b89b970040cf4ac54e75b7db3de.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/ec/99/81/ec9981f9fbb127309986bbebbb7714ee.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/13/20/34/13203474a20290b3de74864e3577f50f.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/81/39/5c/81395c424b5e3fe25cceccd60d55b5b1.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c5/9a/ff/c59aff9c739f0a92eb70933f72fe14c8.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/6c/28/71/6c2871e8c2a49195bee470441995cbdd.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/e8/53/d1/e853d1abdce5f872a0341e625b0f6c77.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/38/57/c9/3857c9c60570401891fbca90c53ac252.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/8f/fb/3d/8ffb3dc7eda3b0a354625c65dc40c1fa.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/5a/17/82/5a1782c769d6eccb1394b22aeeec6799.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/2e/e1/70/2ee170deefa7046635e275a14b23578d.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/2b/82/06/2b8206cc7cbd2417be90affac1668ed4.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/6c/28/71/6c2871e8c2a49195bee470441995cbdd.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c8/3f/4f/c83f4f520a1dbf10b94d274c4439fade.jpg'
      />
      <button type="button" className="deleteBtn"><img src="https://cdn-icons-png.flaticon.com/512/657/657059.png"/></button>
      <IconButton className="cartBtn"
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "20 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
    </div>
    
  </InfiniteCarousel>
  </div>



{/* 최근 본 상품 캐러셀*/}
<div className="infinit">
        <div className="title"><h1>최근 본 상품</h1></div>
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1} //양 옆 반투명공간 사이즈 
    slidesToScroll={1}  //몇개씩 넘어가는지 
    slidesToShow={7}  //몇개보여줄건지 
    scrollOnDevice={true}
  >
    
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c5/9a/ff/c59aff9c739f0a92eb70933f72fe14c8.jpg'
      />
      
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/09/c5/41/09c541ec335f3f6ca9b4dd1d67d2b580.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/72/f2/21/72f221be793a4f692320ba691b20ea95.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/24/34/0b/24340b89b970040cf4ac54e75b7db3de.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/ec/99/81/ec9981f9fbb127309986bbebbb7714ee.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/13/20/34/13203474a20290b3de74864e3577f50f.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/81/39/5c/81395c424b5e3fe25cceccd60d55b5b1.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c5/9a/ff/c59aff9c739f0a92eb70933f72fe14c8.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/6c/28/71/6c2871e8c2a49195bee470441995cbdd.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/e8/53/d1/e853d1abdce5f872a0341e625b0f6c77.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/38/57/c9/3857c9c60570401891fbca90c53ac252.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/8f/fb/3d/8ffb3dc7eda3b0a354625c65dc40c1fa.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/5a/17/82/5a1782c769d6eccb1394b22aeeec6799.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/2e/e1/70/2ee170deefa7046635e275a14b23578d.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/2b/82/06/2b8206cc7cbd2417be90affac1668ed4.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/6c/28/71/6c2871e8c2a49195bee470441995cbdd.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/a4/93/8b/a4938b3ac05cfe8a748a5302827b3024.jpg'
      />
    </div>
    <div>
      <img className="wishImg"
        alt=''
        src='https://i.pinimg.com/236x/c8/3f/4f/c83f4f520a1dbf10b94d274c4439fade.jpg'
      />
    </div>
    
  </InfiniteCarousel>
  </div>
  </div>
)
};


export default WishList;
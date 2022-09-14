import React, { useState } from 'react';
import MainShowroomColor from '../../components/main/MainShowroomColor';
import "../../css/mainShowroom.css";
import Button from "@mui/material/Button";
import axios from 'axios';
import ShowroomBox from './ShowroomBox';
import { useEffect } from 'react';


const MainShowroom = () => {

  const [showroomImg, setShowroomImg] = React.useState([]);

  const[showroomImgData,setShowroomImgData] = useState([]);

  const[cnt, setCnt] = useState(0);

  


  let showroomListUrl = "http://localhost:8080/api/main/getShowroomList";

  const list = () => {
    axios
      .get(showroomListUrl, {})
      .then((response) => {
        setShowroomImg(response.data.data);
        setShowroomImgData(response.data.data.slice(0, 2));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
  }, []);


  useEffect(() => {
    console.log("sss",showroomImg);
    console.log("ssss",showroomImg.slice(4*cnt, 4*(cnt + 1)));

    let copy = showroomImgData.concat(showroomImg.slice(4*cnt, 4*(cnt + 1)));
    console.log(copy);
    setShowroomImgData(copy);
  }, [cnt]);


 
    return (
        <div>
        <div className='mainShowroomColor'>
            <MainShowroomColor color="red" />         
            <MainShowroomColor color="yellow" />
            <MainShowroomColor color="green" />
            <MainShowroomColor color="blue" />
            <MainShowroomColor color="purple" />
            <MainShowroomColor color="white" />
            <MainShowroomColor color="beige" />
            <MainShowroomColor color="black" />
            <MainShowroomColor color="gray" />   
            <MainShowroomColor color="pink" /> 
        </div>


       
       
        {/* <div className='showroomBox'> */}
        {/* <div className='container'>
          <div className='row'>
        {showroomImg.map((test, i) => {
          return <Testt
          box={ShowroomBox[i]} i={i} key={i}
          />
        })}
        </div>
        </div> */}
        {/* </div> */}

        <div class="showroomcontainer text-center">
          <div class="row row-cols-2">
          
          {showroomImgData.map((a) => (
              <ShowroomBox
              item={a} />)
            )}
          
        </div>

        </div>

 
        <div className='mainShowroom_MoreBtn'>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 12.5}}
           
            onClick={() => {
              setCnt(cnt+1);
              console.log("cnt",cnt);
              console.log("data",showroomImgData);
            }}
            
          >
            더 보기
          </Button> 
       </div>
        </div>
    );
};

export default MainShowroom;
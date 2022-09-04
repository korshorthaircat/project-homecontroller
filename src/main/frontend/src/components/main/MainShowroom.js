import React, { useState } from 'react';
import MainShowroomColor from '../../components/main/MainShowroomColor';
import "../../css/mainShowroom.css";
import Button from "@mui/material/Button";
import axios from 'axios';
import ShowroomBox from './ShowroomBox';

import data from './data.js';


const MainShowroom = () => {
  
  

  let [showroomImg, setShowroomImg] = useState(data);

 
    return (
        <div>
        <div className='mainShowroomColor'>
            <MainShowroomColor color="red" />
            <MainShowroomColor color="yellow" />
            <MainShowroomColor color="green" />
            <MainShowroomColor color="blue" />
            <MainShowroomColor color="purple" />
            <MainShowroomColor color="white" />
            <MainShowroomColor color="black" />
            <MainShowroomColor color="pink" />
            <MainShowroomColor color="beige" />
            <MainShowroomColor color="gray" />    
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

        <div class="container text-center">
          <div class="row row-cols-2">
          
          
        {
          showroomImg.map((a, i) => {
            return (
              <ShowroomBox showroomImg ={showroomImg[i]} />
            )
          })
        }


        </div>

        </div>


        <div className='mainShowroom_MoreBtn'>
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: 12.5}}
            onClick = {() => {
              axios.get('')
              .then((결과)=>{console.log(결과.data)
                let copy = [...showroomImg, ...data.data]
                setShowroomImg(copy)
              })
              .catch(()=> {
                console.log('실패다')
              })

            }}
          >
            더 보기
          </Button> 
       </div>
        </div>
    );
};

export default MainShowroom;
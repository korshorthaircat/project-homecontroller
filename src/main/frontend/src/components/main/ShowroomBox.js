import React from 'react';
import "../../css/mainShowroom.css";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ShowroomBox = ({item}) => {


    return (
        
            
            <div class="col">
              
              <img src={`http://localhost:8080/upload/${item.showroomImgName}`} />
              
              <button
              className='showroomBoxHeart'>
              <FavoriteBorderOutlinedIcon sx={{ color: "white", fontSize: 30}} />
              </button>
            
            </div>
            

            
        
    );
};

export default ShowroomBox;
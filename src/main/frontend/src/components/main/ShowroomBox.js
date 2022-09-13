import React from 'react';
import "../../css/mainShowroom.css";


const ShowroomBox = ({item}) => {


    return (
        
            
            <div class="col">
              
              <img src={`http://localhost:8080/upload/${item.showroomImgName}`} />
            </div>
            
        
    );
};

export default ShowroomBox;
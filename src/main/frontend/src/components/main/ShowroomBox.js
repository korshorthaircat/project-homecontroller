import React from 'react';
import "../../css/mainShowroom.css";


const ShowroomBox = (props) => {
    return (
        
            
            <div class="col">
              <img src={props.showroomImg.image} />
            </div>
            
        
    );
};

export default ShowroomBox;
import React from 'react';
import "../../css/mainShowroom.css";

const MainShowroomColor = (props) => {
    return (
        <div>
            <button className= {`showroomColor ${props.color}`} onClick={() => props.getColorShowroomList(props.color)}/>
            
        </div>
    );
};
 
export default MainShowroomColor;
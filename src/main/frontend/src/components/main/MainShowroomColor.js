import React from 'react';
import "../../css/mainShowroom.css";

const MainShowroomColor = (props) => {
    return (
        <div>
            <div className= {`showroomColor ${props.color}`}>
                </div>
        </div>
    );
};

export default MainShowroomColor;
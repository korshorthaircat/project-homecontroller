import React from 'react';
import "../../css/serviceCard.css";

const ServiceCard = (props) => {
    return (
        <div>
            
           <div className='serviceCard_background'>

                <div className='serviceCard_content'>
                <img src= {props.icon} />
                
                <div className='serviceCard_text'>
                <p>{props.name}</p>
                </div>
                </div>
           </div>
           
           
        </div>
    );
};

export default ServiceCard;
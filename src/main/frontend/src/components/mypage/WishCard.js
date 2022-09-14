import React from 'react';
import "../../css/serviceCard.css";
import "react-multi-carousel/lib/styles.css";
import "../../css/carousel.css";






const WishCard = ({wishItem}) => {
    return (
        <div>
           <div className='serviceCard_background'>

                <div className='serviceCard_content'>
                <img src= {`http://localhost:8080/upload/${wishItem.productImageName}`} />
                
                </div>
                </div>
           </div>    
    );
};

export default WishCard;
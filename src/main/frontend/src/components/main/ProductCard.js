
import React from 'react';
import "../../css/card.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';





const ProductCard = ({image, title, category, price} ) => {
    return (
        
        <div className='card'>
          <img
          className='imageArea'
          src={image}>

          </img>

        <div className='textArea'>
            <p className='title_text'>{title}</p>
            <p className='category_text'>{category}</p>

            <div className='priceArea'>
            <p>PRICE</p>
            <div className='last'>
            
            <p className='price_text' >{price}</p>
            
           
            
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx= {{padding: "0 6px", left: 180}}
              >
                
                <FavoriteIcon sx={{fontSize: 30}} />
                
              </IconButton>

            <IconButton
                size="large"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                sx= {{padding: "0 6px", left: 180}}
                
                
              >
                <ShoppingCartIcon sx={{fontSize: 30}} />
              </IconButton>
              
              
              
            </div>
            <hr className='product_line'/>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;
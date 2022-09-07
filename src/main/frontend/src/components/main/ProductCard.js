import React from "react";
import "../../css/productCard.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";



const ProductCard = ({ item }) => {  


    
   

  return (
    <div className="card">
      <img className="imageArea" src="https://www.ikea.com/ext/ingkadam/m/61778d2a4441edd9/original/PH184645-crop001.jpg?f=xs" alt="사진" />
      <div className="textArea">
        <p className="title_text">{item?.productName}</p>

        

        <p className="category_text">
        {item?.productCategoryName}, {item?.productSize}





            
          </p>
        <div className="priceArea">
          <p>PRICE</p>
          <div className="last">
            <p className="price_text">\{item?.productPrice}</p>
          
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ padding: "0 6px", left: 180 }}
            >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "0 6px", left: 180 }}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </div>
          <hr className="product_line" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

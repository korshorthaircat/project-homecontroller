import React, { useEffect, useState } from "react";
import "../../css/productCard.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";






const ProductCard = ({ item, productImageList }) => { 
  const [thumbnail, setThumbnail] = useState("");
  const [hoverImage, setHoverImage] = useState("");
  const [isHover, setIsHover] = useState(false);

 const handleMouseOver = () => {
  setIsHover(true);
 }

 const handleMouseOut = () => {
  setIsHover(false);
 }
  

  useEffect(() => {
    if(Object.keys(item).length !== 0 && productImageList.length !== 0) {
      productImageList.map(productImage => {
        if(item.productNo === productImage.productNo && productImage.productImageNo === 1)
          setThumbnail(productImage.productImageName);
        else if(item.productNo === productImage.productNo && productImage.productImageNo === 2)
          setHoverImage(productImage.productImageName); 
          
        return productImage;
      });
    }
  }, [item, productImageList]);
    
 

  

  return (
    <div className="card">
      <img className="imageArea" src= {isHover ? `http://localhost:8080/upload/${hoverImage}` : `http://localhost:8080/upload/${thumbnail}`}
      onMouseOver= {handleMouseOver}
      onMouseOut= {handleMouseOut}
      alt="사진" 
      /> 
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

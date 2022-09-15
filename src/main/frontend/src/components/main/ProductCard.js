import React, { useEffect, useState } from "react";
import "../../css/productCard.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import axios from "axios";

import { Link } from 'react-router-dom';





const ProductCard = ({ item, productImageList }) => { 
  const [thumbnail, setThumbnail] = useState("");
  const [hoverImage, setHoverImage] = useState("");
  const [isHover, setIsHover] = useState(false);

  // const dispatch = useDispatch();

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
    

 //하트아이콘 클릭시 위시리스트에 담기
const addWishList = () => {
  axios({
    url: 'http://localhost:8080/api/wishlist/addWishItem',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem("ACCESS_TOKEN")
    },
    method: 'post',
    data: {productNo: item.productNo},
  }).then(response => {
    console.log(response.data);
  })
} 


  

  return (
    
    <div className="card">
      <Link to = {`/productDetail/${item.productNo}`}
                  state = {{productList: item}} > 
      <img className="imageArea" src= {isHover ? `http://localhost:8080/upload/${hoverImage}` : `http://localhost:8080/upload/${thumbnail}`}
      onMouseOver= {handleMouseOver}
      onMouseOut= {handleMouseOut}
      alt="사진" 
      /> 
      </Link>
      <div className="textArea">
        <p className="title_text">{item.productName}</p>

        

        <p className="category_text">
        {item.productCategoryName}, {item.productSize}
          </p>
        <div className="priceArea">
          <p>PRICE</p>
          <div className="last">
            <p className="price_text">\{item.productPrice}</p>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ padding: "0 6px", left: 180 }} 

              onClick={addWishList}
            >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ padding: "0 6px", left: 180 }}
              // onClick={() => dispatch(addCart(item))}
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

import React from "react";
import "../../css/productCard.css";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Component({item}){

  switch(item.productCategory) {
    case "C01" :
      return "침대"
    case "C02" :
      return "쇼파"
    case "C03" :
      return "테이블/식탁/책상"
    case "C04" :
      return "거실장/tv장"
    case "C05" :
      return "서랍/수납장"
    case "C06" : 
      return "진열장/책장"
    case "C07" :
      return "선반"
    case "C08" :
      return "행거/옷장"
    case "C09" :
      return "의자"
    case "C10" :
      return "화장대/콘솔"
    case "C11" :
      return "조명"
    case "C12" :
      return "가전"
    case "C13" :
      return "패브릭"
    case "C14" :
      return "생필품"
    case "C15" :
      return "야외가구"
    case "C16" :
      return "주방용품"
    default :
      return "인테리어소품"
  }
}

export {Component};


const ProductCard = ({ item }) => {  


    
   

  return (
    <div className="card">
      <img className="imageArea" src="https://www.ikea.com/ext/ingkadam/m/61778d2a4441edd9/original/PH184645-crop001.jpg?f=xs" alt="사진" />
      <div className="textArea">
        <p className="title_text">{item?.productName}</p>

        

        <p className="category_text">
        {item?.productCategory}, {item?.productSize}





            
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

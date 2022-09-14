import React, { Component, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import "../../css/carousel.css";
import { Link } from 'react-router-dom';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// const stateText = [
//   {
    
//     title: "JUSTINA 유스티나",
//     category: "의자",
//     image: "https://www.ikea.com/kr/ko/images/products/odger-swivel-chair-anthracite__0939545_ph171072_s5.jpg?f=s",
//     price: "￦99,900",
//   },
//   {
   
//     title: "JUSTINA 유스티나",
//     category: "테이블",
//     image:
//       "https://www.ikea.com/kr/ko/images/products/odger-swivel-chair-anthracite__0939545_ph171072_s5.jpg?f=s",
//     price: "￦99,900",
    
//   },
//   {
    
//     title: "JUSTINA 유스티나",
//     category: "의자",
//     image:
//       "https://www.ikea.com/kr/ko/images/products/karljan-chair-dark-grey-kabusa-dark-grey__1053139_pe846732_s5.jpg?f=s",
//     price: "￦99,900",
   
//   },
//   {
    
//     title: "JUSTINA 유스티나",
//     category: "테이블",
//     image:
//       "https://www.ikea.com/kr/ko/images/products/karljan-chair-dark-grey-kabusa-dark-grey__1053140_pe846733_s5.jpg?f=s",
//     price: "￦99,900",
    
//   },
//   {
    
//     title: "JUSTINA 유스티나",
//     category: "의자",
//     image:
//       "https://www.ikea.com/kr/ko/images/products/justina-chair-pad-grey__0891594_pe658492_s5.jpg?f=s",
//     price: "￦99,900",
    
//   },
//   {
    
//     title: "JUSTINA 유스티나",
//     category: "테이블",
//     image:
//       "https://www.ikea.com/kr/ko/images/products/justina-chair-pad-grey__0891586_pe566913_s5.jpg?f=s",
//     price: "￦99,900",
    
//   },
//   {
    
//     title: "JUSTINA 유스티나",
//     category: "의자",
//     image:
//       "https://www.ikea.com/kr/ko/images/products/justina-chair-pad-grey__0891588_pe567158_s5.jpg?f=s",
//     price: "￦99,900",
    
//   },

//   {
    
//     title: "JUSTINA 유스티나",
//     category: "의자",
//     image:
//       "https://www.ikea.com/kr/ko/images/products/justina-chair-pad-grey__0891588_pe567158_s5.jpg?f=s",
//     price: "￦99,900",
    
//   }
// ];

//


const ProductCarousel = () => {
  const [productList, setProductList] = useState([]);
  const [productImageList, setProductImageList] = useState([]);
  

  const getProducts=async()=>{
    let url = `http://localhost:8080/api/main/getMainProductList`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data.productList);
    setProductImageList(data.productImageList);
  };


  useEffect(() => {
    getProducts();
  }, []);

  return (
   <div className='carousel_container'>
      <Carousel
      responsive={responsive}
      // showDots={true}
      // dotListClass="custom-dot-list-style"
      // containerClass="carousel-container"
      // itemClass="carousel-item-padding-40-px"
      > 
      
        {productList.map((a) => (
          
          <ProductCard
          item={a} 
          productImageList={productImageList}/>
          
          ))}
        
       </Carousel>
     </div>
  );
};

export default ProductCarousel;

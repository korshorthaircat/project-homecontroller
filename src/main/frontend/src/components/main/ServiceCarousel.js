import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "./ServiceCard";
import "../../css/carousel.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
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

const ServiceCarousel = () => {
    return (
        <div className="carousel_container">
             <Carousel responsive={responsive}>
                <ServiceCard icon = "../images/mypage_icons/category.png" name = "카테고리"/>
                <ServiceCard icon = "../images/mypage_icons/인테리어쇼룸.png" name = "인테리어쇼룸"/>
                <ServiceCard icon = "../images/mypage_icons/이벤트.png" name = "이벤트 및 프로모션"/>           
                <ServiceCard icon = "../images/mypage_icons/문의게시판.png" name = "문의게시판"/>
                <ServiceCard icon = "../images/mypage_icons/지점소개.png" name = "지점소개"/>
                <ServiceCard icon = "../images/mypage_icons/배송관련.png" name = "배송조회"/>
                <ServiceCard icon = "../images/mypage_icons/멤버소개.png" name = "멤버소개"/> 
            </Carousel>
        </div>
    );
};

export default ServiceCarousel;
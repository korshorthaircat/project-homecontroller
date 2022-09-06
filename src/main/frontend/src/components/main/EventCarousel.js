import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventCard from './EventCard';
import "../../css/carousel.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

  const stateText = [
    {
      title : "일상을 바꾸는 패브릭",
      content: "HOME CONTROLLER EXCLUSIVE"
    },
    {
      title : "#가을캠핑 & 인테리어",
      content: "가을 인기 키워드 초특가 쇼핑!"
    },
    {
      title : "홈카페 BEST 아이템 모아보기",
      content: "레트로 컵부터 SNS대란 와플팬까지!"
    }
  ]

const EventCarousel = () => {
    return (
        <div className='carousel_container'>
            <Carousel responsive={responsive}>
                
                {stateText.map((data) => (
                  <EventCard 
                  title={data.title}
                  content={data.content}/>
                ))}
                
                
                
            </Carousel>
        </div>
    );
};

export default EventCarousel;
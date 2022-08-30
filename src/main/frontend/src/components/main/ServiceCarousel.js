import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "./ServiceCard";
import "../../css/carousel.css";
import React from "react";
import "../../css/test.css";



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

class ServiceCarousel extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const { deviceType } = this.props;
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform, currentSlide } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
        <div className="carousel_container">
             <Carousel 
              
              ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisible={false}
        customButtonGroup={<CustomSlider />}
        itemClass="image-item"
        itemAriaLabel="Image-aria-label"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
  
>
              
                <ServiceCard draggable={false} icon = "../images/mypage_icons/category.png" name = "카테고리"/>
                <ServiceCard draggable={false} icon = "../images/mypage_icons/인테리어쇼룸.png" name = "인테리어쇼룸"/>
                <ServiceCard draggable={false} icon = "../images/mypage_icons/이벤트.png" name = "이벤트 및 프로모션"/>           
                <ServiceCard draggable={false} icon = "../images/mypage_icons/문의게시판.png" name = "문의게시판"/>
                <ServiceCard draggable={false} icon = "../images/mypage_icons/지점소개.png" name = "지점소개"/>
                <ServiceCard draggable={false} icon = "../images/mypage_icons/배송관련.png" name = "배송조회"/>
                <ServiceCard draggable={false} icon = "../images/mypage_icons/멤버소개.png" name = "멤버소개"/> 
            </Carousel>
        </div>
    );
};
};
export default ServiceCarousel;
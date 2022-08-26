import { width } from '@mui/system';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EventCard from './EventCard';
import MiniCard from "./MiniCard";


const stateText = [
  {
    id: "pp-01",
    title: "Kids-story",
    artist: "Thomas Buisson",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  },
  {
    id: "pp-02",
    title: "mockyapp",
    artist: "Ahmed Amr",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
    price: 20,
    pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  },
  {
    id: "pp-03",
    title: "mockyapp",
    artist: "Ahmed Amr",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
    price: 20,
    pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  },
  {
    id: "pp-04",
    title: "mockyapp",
    artist: "Ahmed Amr",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
    price: 20,
    pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  },
  {
    id: "pp-05",
    title: "Kids-story",
    artist: "Thomas Buisson",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  },
  {
    id: "pp-06",
    title: "Kids-story",
    artist: "Thomas Buisson",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  },
  {
    id: "pp-07",
    title: "Kids-story",
    artist: "Thomas Buisson",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
    img: process.env.PUBLIC_URL + "/images/inter (1).png",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  },
];

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

const carousel = () => {
  return (

    <div>
            {/* <CarouselContainer> */}
              <div className="favorite-list" >
                <div style={{ width: "50", margin: "0 auto" }} >
                  <Carousel responsive={responsive} >
                    {/* <div className="test001"> */}

                    {stateText.map((data) => (
                      // 여기서 {}말고 ()로 하면 return 안해도 됨
                      //   이게 props 넣는거

                      <EventCard />
                    ))}
                    {/* </div> */}
                  </Carousel>
                </div>
              </div>
            {/* </CarouselContainer> */}
          </div>
  )
}

export default carousel;
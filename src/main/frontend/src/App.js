import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainImage from "./components/main/MainImage";
import EventCard from "./components/main/EventCard";
import MainShowroom from "./components/main/MainShowroom";
import CarouselSlide from "./components/main/CarouselSlide";
import ServiceCarousel from "./components/main/ServiceCarousel";





function App() {
  return (
    <div>
      <MainImage/>

      
      <h4 className="main_text">주목할 만한 인테리어 소품</h4>

      <h4 className="main_text">진행중인 이벤트 및 프로모션</h4>
      
      {/* <EventCard /> */}

      <h4 className="main_text">다양한 HOME CONTROLLER 서비스</h4>
      <ServiceCarousel/>
      
      {/* <MainShowroom /> */}
      <h4 className="main_text">기획전</h4>
      <CarouselSlide/>
      <h4 className="main_text">기획전</h4>
      <CarouselSlide/>
      <h4 className="main_text">인테리어 쇼룸</h4>
      <p>다양한 인테리어 제품을 한 눈에 볼 수 있는 인테리어쇼룸! 인테리어를 참고하세요.</p>
    </div>
  )
}

export default App;

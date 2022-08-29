import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainImage from "./components/main/MainImage";
import EventCard from "./components/main/EventCard";
import MainShowroom from "./components/main/MainShowroom";
import CarouselSlide from "./components/main/CarouselSlide";





function App() {
  return (
    <div>
      <MainImage/>

      
      <h4 className="main_text">주목할 만한 인테리어 소품</h4>

      <h4 className="main_text">진행중인 이벤트 및 프로모션</h4>
      
      {/* <EventCard /> */}

      <h4 className="main_text">다양한 HOME CONTROLLER 서비스</h4>

      <h4 className="main_text">인테리어 쇼룸</h4>
      {/* <MainShowroom /> */}

      <CarouselSlide/>
      
    </div>
  )
}

export default App;

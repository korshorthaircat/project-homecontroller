import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainImage from "./components/main/MainImage";
import MainShowroom from "./components/main/MainShowroom";
import ServiceCarousel from "./components/main/ServiceCarousel";
import EventCarousel from "./components/main/EventCarousel";
import TopButton from "./components/main/TopButton";
import MainInteriorImage from "./components/main/MainInteriorImage";
import MainProductCarousel from "./components/main/MainProductCarousel";
import ThemeProductCarousel from "./components/main/ThemeProductCarousel";

function App() {
  return (
    <div>
      <MainImage />

      <h4 className="main_title">개발자를 위한 인테리어 제품 추천</h4>
      <MainInteriorImage />

      <h4 className="main_title">진행중인 이벤트 및 프로모션</h4>
      <EventCarousel />

      <h4 className="main_title">다양한 HOME CONTROLLER 서비스</h4>
      <ServiceCarousel />

      <h4 className="main_title">모든 제품</h4>
      <MainProductCarousel />

      <h4 className="main_title">따뜻한 분위기의 내추럴 우드인테리어</h4>
      <ThemeProductCarousel theme={"원목"} />

      <h4 className="main_title">시들지 않는 조화로 매일 싱그럽게!</h4>
      <ThemeProductCarousel theme={"생화"} />

      <h4 className="showroom_title">인테리어 쇼룸</h4>
      <p className="sub_title">
        다양한 인테리어 제품을 한 눈에 볼 수 있는 인테리어쇼룸! 인테리어를
        참고하세요.
      </p>
      <MainShowroom />

      <TopButton />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../../css/FixedBar.css";

function FixedBar() {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 99) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <div className="App">
      {/* <div className={ScrollActive ? "fixedBox fixed" : "fixedBox"}>
        {ScrollActive ? "I am fixed! 😎" : "I will be fixed! 😘"}
      </div> */}
      <div className={ScrollActive ? "fixedBox fixed" : "fixedBox"}>
        <Button></Button>
      </div>
    </div>
  );
}

export default FixedBar;

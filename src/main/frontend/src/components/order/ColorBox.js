import React from "react";
import ColorContext from "../contexts/Color";
import { ColorConsumer } from "../contexts/Color";

//ColorBox라는 컴포넌트를 받아 ColorContext안에 들어있는 색상을 보여주기
//이 때, 색상을 props로 받아오는 것이 아니라 ColorContext 안에 들어있는 Consumer라는 컴포넌트를 통해 색상 조회할 것
const ColorBox = () => {
  return (
    <ColorConsumer>
      {/* Consumer 사이에 중괄호를 열어 그 안에 함수를 넣어줌.
     이러한 패턴을 Function as a child, 혹은 Render Prop라고 함.
     컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달하는 것*/}
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};
export default ColorBox;

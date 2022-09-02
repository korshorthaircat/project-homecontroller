import React from "react";
import ColorBox from "./ColorBox";
import ColorContext, { ColorProvider } from "../contexts/Color";

const ContextTest = () => {
  return (
    // Provider를 사용해 Context의 value를 변경
    // Provider를 사용할 때 value를 명시하지 않으면 오류가 발생한다.
    // <ColorContext.Provider value={{ color: "red" }}>
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
    // </ColorContext.Provider>
  );
};

export default ContextTest;

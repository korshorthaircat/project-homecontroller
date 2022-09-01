import { createContext, useState } from "react";

// const ColorContext = createContext({ color: "black" });
//새 Context를 만들 떄는 createContext함수를 사용함. 파라미터에는 해당 Context의 기본 상태를 지정함.

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubcolor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

//ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;

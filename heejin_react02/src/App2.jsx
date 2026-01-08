import { useState } from "react";

const Light = ({ isOn }) => {
  return (
    <>
      {isOn === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </>
  );
};

function App2() {
  //state는 배열 구조로 2칸 들어있는데 한 칸은
  let [state, setState] = useState(0); //useState 구조분해할당
  const [bulb, setBulb] = useState("OFF");
  const blubClick = () => {
    setBulb(bulb === "OFF" ? "ON" : "OFF");
  };
  const btnClick = () => {
    setState(state + 1);
  };
  return (
    <>
      <div>
        <h1>{state}</h1>
        <button onClick={btnClick}>+버튼</button>
      </div>
      <div>
        <Light isOn={bulb} />
        <button onClick={blubClick}>끄기/켜기</button>
      </div>
    </>
  );
}

export default App2;

export { Light };

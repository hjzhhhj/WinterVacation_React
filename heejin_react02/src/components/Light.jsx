import { useState } from "react";

function Light() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <h1 style={{ backgroundColor: isOn ? "orange" : "gray" }}>
        {isOn ? "ON" : "OFF"}
      </h1>
      <button onClick={() => setIsOn(!isOn)}>켜기</button>
    </>
  );
}

export default Light;

import { useState } from "react";
import Timer from "./components/Timer";

export default function TimerPage() {
  const [isTimer, setTimer] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setTimer(!isTimer);
        }}
      >
        타이머 {isTimer ? "멈춤" : "시작"}
      </button>
      {isTimer === true ? <Timer /> : null}
    </>
  );
}

import { useEffect } from "react";

function Even() {
  useEffect(() => {
    console.log("언마운트");
  }, []); // 클린업, 정리함수

  return <div>짝수</div>;
}

export default Even;

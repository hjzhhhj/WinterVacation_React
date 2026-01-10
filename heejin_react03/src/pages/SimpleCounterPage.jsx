import Viewer from "../components/Viewer";
import Even from "../components/Even";
import Controller from "../components/Controller";
import { useState } from "react";

export default function SimpleCountPage() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const onClickButton = (num) => {
    setCount(count + num);
  };
  return (
    <>
      <h1>Simple Counter</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {input}
      <div>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </div>
      <div>
        <Controller onClickButton={onClickButton} />
      </div>
    </>
  );
}

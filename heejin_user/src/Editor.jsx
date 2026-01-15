import { useRef, useState } from "react";

function Editor({ onCreate, onSearch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    if (name === "" || email === "") {
      return;
    }
    onCreate(name, email);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>사용자 추가</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
      />
      <button onClick={onSubmit}>추가</button>
      <h2>사용자 목록</h2>
      <input onChange={(e) => onSearch(e.target.value)} placeholder="검색" />
    </div>
  );
}

export default Editor;

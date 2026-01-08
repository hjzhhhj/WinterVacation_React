import { useState } from "react";

function Register() {
  //   let count = 0;
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  //   count++;
  //   console.log(count);

  return (
    <>
      <h1>회원가입</h1>
      <div>
        이름 :
        <input name="name" value={input.name} onChange={onChange} />
        {input.name}
      </div>
      <div>
        생일 :{" "}
        <input
          type="date"
          name="birth"
          value={input.birth}
          onChange={onChange}
        />
      </div>
      <div>
        국적
        <select name="country" value={input.country} onChange={onChange}>
          <option>대한민국</option>
          <option>미국</option>
          <option>일본</option>
        </select>
      </div>
      <div>
        자기소개 :{" "}
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>
    </>
  );
}

export default Register;

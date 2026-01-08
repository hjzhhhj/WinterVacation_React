function Header() {
  let name = "정희진";
  let age = 10;
  let hobby = ["영화", "독서", "노래방"];
  let isLogin = true;
  let obj = {
    name: "장",
    age: 5,
  };
  return (
    <>
      <h1>
        저는 {name} 입니다. 나이는 {age + 10}이고,{" "}
        {age % 2 === 0 ? "짝수" : "홀수"}
        취미는 {hobby} <br /> 로그인 여부는 {String(isLogin)}이고, 객체는{" "}
        {obj.name} <br />
        {isLogin ? <div>로그아웃</div> : <div>로그인</div>}
      </h1>
    </>
  );
}
export default Header;

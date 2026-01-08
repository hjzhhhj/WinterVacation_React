import "./Main.css";

function Main() {
  let cssVar = {
    backgroundColor: "red",
    marginTop: "20px",
  };
  return (
    <>
      <h1 style={{ backgroundColor: "yellow", fontSize: "55px" }}>메인</h1>
      <span style={cssVar}> css 적용 </span>
      <span className="logout">외부 css 적용</span>
    </>
  );
}

export default Main;

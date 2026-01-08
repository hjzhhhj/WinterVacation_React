function Button({ text = "blue", color, children }) {
  //   console.log(props);
  const btnClicke = (e) => {
    console.log(e);
    console.log("x값", e.clientX);
    console.log("y값", e.clientY);
    alert("클릭");
  };
  return (
    <>
      <button style={{ color: color }} onClick={btnClicke}>
        {text}
        {children}
      </button>
    </>
  );
}
export default Button;

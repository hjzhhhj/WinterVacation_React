import Button from "./Button";
import Footer from "./Footer";

function Main() {
  const btnProps = {
    text: "메일",
    color: "red",
  };
  return (
    <>
      <Button {...btnProps} />
      <Button text="카페">
        <Footer />
        <div>안녕</div>
      </Button>
      <Button text="블로그" />
    </>
  );
}

export default Main;

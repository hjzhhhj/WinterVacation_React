import { Link, useNavigate } from "react-router-dom";

export default function Navi() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/usermenu");
  };
  return (
    <>
      <div>
        <Link to={"/"}> [Home] </Link>
        <Link to={"/usermenu"}> [Userlist] </Link>
        <Link to={"/timermenu"}> [Timer] </Link>
        <button onClick={onClickButton}>버튼</button>
        <Link to={"/simplecountermenu"}> [SimpleCounter] </Link>
      </div>
    </>
  );
}

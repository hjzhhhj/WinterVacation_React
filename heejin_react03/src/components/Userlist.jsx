import { useEffect } from "react";

function Userlist() {
  useEffect(() => {
    () => {
      console.log("Userlist 언마운트");
    };
  }, []);

  return <></>;
}

export default Userlist;

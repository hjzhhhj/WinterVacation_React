import { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState("home");

  return (
    <>
      <div style={{ backgroundColor: "yellow" }}>
        <button onClick={() => setTab("home")}>Home</button>
        <button onClick={() => setTab("about")}>About</button>
        {tab === "home" && <p>Welcome Home!</p>}
        {tab === "about" && <p>About Us</p>}
      </div>
    </>
  );
}

export default Tabs;

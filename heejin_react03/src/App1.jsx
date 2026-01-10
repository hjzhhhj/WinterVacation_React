import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Userlist from "./components/Userlist";
import Timer from "./components/Timer";
import Navi from "./components/common/Navi";
import SimpleCounterPage from "./pages/SimpleCounterPage.jsx";

function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/usermenu" element={<Userlist />}></Route>
        <Route path="/timermenu" element={<Timer />}></Route>
        <Route
          path="/simplecountermenu"
          element={<SimpleCounterPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

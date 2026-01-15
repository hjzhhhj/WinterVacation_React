import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Userlist from "./components/Userlist";
import Home from "./components/Home";
import TimerPage from "./pages/Timerpage";
import Navi from "./components/common/Navi";
import SimpleCountPage from "./pages/SimpleCounterPage";
import TodoApp from "./pages/TodoApp2";
import "./App.css";
import ReducerExam from "./components/todoComponets/ReducerExam";
import ShowItem from "./components/ShowItem";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usermenu" element={<Userlist />} />
        <Route path="/timermenu" element={<TimerPage />} />
        <Route path="/simplecountermenu" element={<SimpleCountPage />} />
        <Route path="/todomenu" element={<TodoApp />} />
        <Route path="/reducermenu" element={<ReducerExam />} />
        <Route path="/showItem/:id" element={<ShowItem />} />
      </Routes>
    </div>
  );
}

export default App;

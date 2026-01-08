import Light from "./components/Light";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import Tabs from "./components/Tabs.jsx";
import SearchForm from "./components/SearchForm.jsx";

function App() {
  return (
    <>
      <h1>useState 함수 예제(1)</h1>
      <Light />
      <hr />
      <Counter />
      <hr />
      <LikeButton />
      <hr />
      <Tabs />
      <hr />
      <SearchForm />
    </>
  );
}

export default App;

import Editor from "../components/todoComponets/Editor";
import Header from "../components/todoComponets/Header";
import List from "../components/todoComponets/List";
import { useState } from "react";

const mockData = [
  { id: 0, isDone: false, content: "React공부하기", date: new Date() },
  { id: 1, isDone: false, content: "빨래하기", date: new Date() },
  { id: 2, isDone: false, content: "노래하기", date: new Date() },
];
function TodoApp() {
  let [todo, setTodo] = useState(mockData);
  let id = 0;
  const onCreate = (content) => {
    const newTodo = {
      id: id,
      isDone: false,
      content: content,
      date: new Date(),
    };
    setTodo([newTodo, ...todo]);
  };
  return (
    <div className="Todo">
      <Header /> 
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}
export default TodoApp;

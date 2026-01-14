import Editor from "../components/todoComponets/Editor";
import Header from "../components/todoComponets/Header";
import List from "../components/todoComponets/List";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React공부하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래하기",
    date: new Date().toLocaleDateString(),
  },
];
function TodoApp() {
  let [todo, setTodo] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toLocaleDateString(),
    };
    setTodo([newTodo, ...todo]);
    console.log(todo);
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) => {
        return item.id === targetId ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  return (
    <div className="Todo">
      <Header />
      <Editor onCreate={onCreate} />
      <List todo={todo} onEdit={onUpdate} onDelete={onDelete} />
    </div>
  );
}
export default TodoApp;

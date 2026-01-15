import Editor from "../components/todoComponets/Editor";
import Header from "../components/todoComponets/Header";
import List from "../components/todoComponets/List";
import { React, useReducer, useRef } from "react";

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

function stateReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContxet = React.createContext();

function TodoApp2() {
  // let [todo, setTodo] = useState(mockData);
  let [todo, dispatch] = useReducer(stateReducer, mockData);

  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().toLocaleDateString(),
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId: targetId });
  };

  const onUpdate = (targetId) => {
    dispatch({ type: "UPDATE", targetId: targetId });
  };

  return (
    <div className="Todo">
      <Header />
      <TodoStateContxet.Provider value={{ todo, onCreate, onDelete, onUpdate }}>
        <Editor />
        <List />
      </TodoStateContxet.Provider>
    </div>
  );
}
export default TodoApp2;

import TodoItem from "./TodoItem";
import { useState } from "react";

function List({ todo, onEdit, onDelete }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todo;
    }
    return todo.filter((item) =>
      item.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  todo = getFilteredData();
  console.log(todo);

  return (
    <div className="List">
      <h4>Todo List</h4>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      {getFilteredData().map((item) => (
        <TodoItem key={item.id} {...item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default List;

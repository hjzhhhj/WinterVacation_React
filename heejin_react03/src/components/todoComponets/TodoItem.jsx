import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ id, isDone, content, date, onDelete, onEdit }) {
  const [checked, setChecked] = useState(isDone);

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  const onClickUpdateButton = () => {
    onEdit(id);
    setChecked(!checked);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={checked} readOnly />
      <div className="content">{content}</div>
      <div className="date">{date}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
      <button onClick={onClickUpdateButton}>수정</button>
    </div>
  );
}

export default TodoItem;

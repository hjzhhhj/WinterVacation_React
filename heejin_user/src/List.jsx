import { useState } from "react";

function List({ users, onDelete, onEdit }) {
  return (
    <div>
      {users.map((user) => (
        <UserRow
          key={user.id}
          user={user}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

function UserRow({ user, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const onSave = () => {
    onEdit(user.id, name, email);
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </>
      ) : (
        <>
          <span>{user.name} </span>
          <span>({user.email}) </span>
        </>
      )}

      {isEdit ? (
        <button onClick={onSave}>저장</button>
      ) : (
        <button onClick={() => setIsEdit(true)}>수정</button>
      )}

      <button onClick={() => onDelete(user.id)}>삭제</button>
    </div>
  );
}

export default List;

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Editor from "./Editor";
import List from "./List";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");
  const idRef = useRef(1000);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }));
        setUsers(formatted);
      })
      .catch((err) => console.error("데이터 로드 실패", err));
  }, []);

  const onCreate = (name, email) => {
    setUsers([...users, { id: idRef.current++, name, email }]);
  };

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onEdit = (id, newName, newEmail) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: newName, email: newEmail } : user
      )
    );
  };

  const filteredUsers = users.filter(
    (user) => user.name.includes(keyword) || user.email.includes(keyword)
  );

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} onSearch={setKeyword} />
      <List users={filteredUsers} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default App;

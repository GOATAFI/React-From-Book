import { useState } from "react";
export default function ToDoFuncByMafi() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const listM = [...list, item];
    setList(listM);
  };

  const currentTodos = list.map((todo, i) => {
    return <li key={i}>{todo}</li>;
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={item}
        id=""
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button type="submit">Add</button>
      {currentTodos}
    </form>
  );
}

import React, { useState, useEffect } from "react";

const TODOS_KEY = "todos";

function ToDo() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  useEffect(() => {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      setToDos(parsedToDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }, [toDos]);

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      text: toDo,
      id: Date.now(),
    };
    setToDos((prevToDos) => [...prevToDos, newToDo]);
    setToDo("");
  };

  const handleDelete = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <div>
      <form id="todo-form" onSubmit={handleToDoSubmit}>
        <input
          type="text"
          placeholder="Write a To Do and Press Enter"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          required
        />
      </form>
      <ul id="todo-list">
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => handleDelete(toDo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;

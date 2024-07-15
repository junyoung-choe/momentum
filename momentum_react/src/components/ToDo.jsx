import React, { useState, useEffect } from "react";

const TODOS_KEY = "todos";

function ToDo() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  useEffect(() => {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    console.log(savedToDos);
    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      if (parsedToDos.length > 0) {
        setToDos(parsedToDos);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }, [toDos]);

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    if (!toDo.trim()) return; // 입력값이 없으면 처리하지 않음

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
        {toDos.map((toDoItem) => (
          <li key={toDoItem.id}>
            <span>{toDoItem.text}</span>
            <button onClick={() => handleDelete(toDoItem.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;

import { useEffect, useRef, useState } from "react";
import "./css/Todo.css";
import { TodoItems } from "./TodoItems";

let count = 0;
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos__count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos__count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);
  return (
    <div className="container">
      <div className="todo">
        <div className="todo__header">
          <h1><i className="ri-r"></i>To-Do List</h1>
        </div>
        <div className="todo__add">
          <input
            ref={inputRef}
            className="todo__input"
            type="text"
            placeholder="Add new task"
          />
          <button onClick={() => addTodo()} className="todo__button">
            +
          </button>
        </div>
        <div className="todo__data">
          {todos.map((item, index) => {
            return (
              <TodoItems
                key={index}
                setTodos={setTodos}
                id={item.id}
                display={item.display}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

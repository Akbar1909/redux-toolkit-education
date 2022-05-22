import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, deleteTodo } from "../Features/Todos/Todos.actions";

import EmptyBox from '../Components/Molecules/EmptyBox';

const defaultFormValues = {
  text: "",
  isCompleted: false,
};

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [formValues, setFormValues] = useState(defaultFormValues);

  const onCreateTodoByEnter = (e) => {
    if (e.key === "Enter") {
      onCreateTodo();
    }
  };

  const onCreateTodo = (e) => {
    dispatch(createTodo(formValues));
    setFormValues(defaultFormValues);
  };

  useEffect(() => {
    document.addEventListener("keypress", onCreateTodoByEnter);
    return () => document.removeEventListener("keypress", onCreateTodoByEnter);
  }, [formValues]);

  return (
    <div className="container flex-align-center">
      { todos.length===0? <EmptyBox text={"Ish yo'q bekorchilik... 😁"} />: todos.map((todo, i) => (
        <div key={i} className="todo box flex-align-center">
          {" "}
          <p>
            {" "}
            <span>{i + 1}.</span> <span>{todo.text}</span>{" "}
            <span>{todo.isCompleted ? "😎" : "😣"}</span>{" "}
          </p>
          <button className="small" onClick={() => dispatch(deleteTodo({ index: i }))}>
            Delete
          </button>
        </div>
      ))}

      <div>
        <input
          type="text"
          name="text"
          value={formValues.text}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, text: e.target.value }))
          }
        />
        <input
          type="checkbox"
          name="isCompleted"
          checked={formValues.isCompleted}
          onChange={(e) =>
            setFormValues((prev) => ({
              ...prev,
              isCompleted: e.target.checked,
            }))
          }
        />
      </div>

      <button onClick={onCreateTodo}>Create Todo</button>
    </div>
  );
};

export default Todos;

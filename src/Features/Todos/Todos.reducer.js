import { createReducer } from "@reduxjs/toolkit";

//NOTE ACTIONS
import { createTodo, deleteTodo } from "./Todos.actions";

const todosReducer = createReducer([], (builder) => {
  builder.addCase(createTodo.type, (state, action) => {
    state.push(action.payload);
  });
    builder.addCase(deleteTodo.type, (state, action) => {
      state.splice(action.payload.index, 1);
    });
});

export default todosReducer;

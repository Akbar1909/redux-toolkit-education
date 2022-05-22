import { createAction } from '@reduxjs/toolkit';
const createTodo=createAction('CREATE_TODO');
const deleteTodo=createAction('DELETE_TODO');
export {
    createTodo,
    deleteTodo
}
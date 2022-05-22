import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/Counter.slice';
import todosReducer from './Features/Todos/Todos.reducer';
import postsReducer from './Features/Posts/Posts.slice';
import booksReducer from './Features/Books/Books.slice';
import usersReducer from './Features/Users/Users.slice';
import commentsReducer from './Features/Comments/Comment.slicer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:todosReducer,
    postsState:postsReducer,
    books:booksReducer,
    users:usersReducer,
    comments:commentsReducer
  },
})
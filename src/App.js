import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

import Layout from "./Components/Layout";

const CounterPage = lazy(() => import("./Pages/Counter"));
const HomePage = lazy(() => import("./Pages/Home"));
const TodosPage = lazy(() => import("./Pages/Todos"));
const PostsPage = lazy(() => import("./Pages/Posts"));
const BooksPage = lazy(() => import("./Pages/Books"));

function App() {
  return (
    <BrowserRouter>
      <Suspense lazy={<div>Loading...</div>}>
        <Routes>
          <Route path="/redux-toolkit-education" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="todos" element={<TodosPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="books" element={<BooksPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

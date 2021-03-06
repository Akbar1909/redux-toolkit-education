import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="counter">Counter</Link>
          </li>
          <li>
          <Link to="todos">Todos</Link>
          </li>
          <li>
          <Link to="posts">Posts</Link>
          </li>
          <li>
          <Link to="books">Books</Link>
          </li>
          <li>
          <Link to="photos">Photos</Link>
          </li>

          
        </ul>
      </nav>
    </header>
  );
};

export default Header;

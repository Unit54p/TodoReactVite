import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav>
      <ul className="">
        <li
          className={`btn_box_shadow  ${
            location.pathname === "/" ? "active_nav" : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`btn_box_shadow ${
            location.pathname === "/todolist" ? "active_nav" : ""
          }`}
        >
          <Link to="/todolist">Todo List</Link>
        </li>
        <li
          className={`btn_box_shadow ${
            location.pathname === "/about" ? "active_nav" : ""
          }`}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={`btn_box_shadow ${
            location.pathname === "/author" ? "active_nav" : ""
          }`}
        >
          <Link to="/author">Author</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Author from "./pages/Author";
import TodoList from "./pages/TodoList";
import Nav from "./components/Nav"; // Import komponen Nav
import "./css/nav.css";
import "./css/body.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* Menambahkan komponen Nav di sini */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./features/TodoList";
import { TodoNew } from "./features/TodoNew";
function App() {
  return (
    <div className="App">
      <TodoNew />
      <TodoList />
    </div>
  );
}

export default App;

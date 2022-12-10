import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="simBack">
      <Header>대호의 Todo List!!</Header>
      <Form setTodos={setTodos} />
      <TodoList name="working" todos={todos} setTodos={setTodos} />
      <TodoList name="done" todos={todos} setTodos={setTodos} />
    </div>
  );
}

// todo 초기값
const initialTodos = [
  {
    id: uuid(),
    isDone: false,
    todo: "스파르타 영상보기",
  },
  {
    id: uuid(),
    isDone: true,
    todo: "드림코딩 영상보기",
  },
];

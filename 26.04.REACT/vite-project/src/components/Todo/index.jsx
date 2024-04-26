import { useState } from "react";
import AddTodo from "../AddTodo";
import SearchToDo from "../SearchToDo";
import ToDoList from "../TodoList";
import TodoItem from "../TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTodos = todos.filter((q) => {
    return q.title
      .trim()
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
  });
  return (
    <>
      <h2>Todo React App</h2>
      <AddTodo todos={todos} setTodos={setTodos} />
      <hr />
      <SearchToDo />
      <h3>Todo List</h3>
      <ToDoList>
        {filteredTodos &&
          filteredTodos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />;
          })}
      </ToDoList>
    </>
  );
};

export default Todo;

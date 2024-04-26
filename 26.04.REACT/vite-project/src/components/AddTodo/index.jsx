import PropTypes from "prop-types";
import { useState } from "react";
import Todoitem from "../../clases/TodoItem";

const AddTodo = ({ todos, setTodos }) => {
  const [inputValue, setInputalue] = useState("");
  const [error, setError] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() == "") {
          window.alert("input is required");
        } else {
          setTodos([...todos, new Todoitem(inputValue)]);
          setInputalue("");
          setError(false);
        }
      }}
    >
      <input
        onChange={(e) => {
          setInputalue(e.target.value);
        }}
        type="text"
        placeholder="enter new todo"
        value={inputValue}
      />
      <p style={{ color: "red", display: error ? "block" : "none" }}>
        input is required
      </p>
      <button type="submit">Add</button>
    </form>
  );
};

AddTodo.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default AddTodo;

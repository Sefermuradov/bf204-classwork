import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  return (
    <li>
      <span>{todo.title}</span>
    </li>
  );
};

export default TodoItem;

// TodoItem.prototype={
//     todo:PropTypes.
// }
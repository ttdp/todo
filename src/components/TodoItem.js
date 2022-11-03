import React from "react"

function TodoItem(props) {
  const todo = props.todo

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => props.handleChangeProps(todo.id)}
      />
      <button onClick={() => props.deleteTodoProps(todo.id)}>Delete</button>
      {props.todo.title}
    </li>
  )
}

export default TodoItem
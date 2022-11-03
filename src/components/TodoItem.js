import React, { useState } from "react"

import style from "./TodoItem.module.css"

function TodoItem(props) {
  const { todo, handleChangeProps, deleteTodoProps, updateTodoProps } = props

  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleChange = (e) => {
    updateTodoProps(todo.id, e.target.value)
  }

  const handleKeyDown = (e) => {
    console.log(e.key)
    if (e.key === "Enter" || e.key === "Escape") {
      setEditing(false)
    }
  }

  const hide = { display: "none" }
  const show = { display: null }

  return (
    <li className={style.item}>
      <div onDoubleClick={handleEditing} style={editing ? hide : show}>
        <input
          type="checkbox"
          checked={todo.completed}
          className={style.checkbox}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editing ? show : hide}
        value={todo.title}
        className={style.textInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  )
}

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

export default TodoItem
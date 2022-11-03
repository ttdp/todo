import React, { useState } from "react"
import { FaTrash } from "react-icons/fa"

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
    if (e.key === "Enter" || e.key === "Escape") {
      setEditing(false)
    }
  }

  return (
    <li className={style.item}>
      <div onDoubleClick={handleEditing} style={editing ? { display: "none" } : null}>
        <input
          type="checkbox"
          checked={todo.completed}
          className={style.checkbox}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button onClick={() => deleteTodoProps(todo.id)}>
          <FaTrash style={{ color: "gray", fontSize: "16px" }}/>
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editing ? null : { display: "none" }}
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
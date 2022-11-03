import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

function InputTodo(props) {
  const [title, setTitle] = useState("")

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim()) {
      props.addTodoProps(title)
      setTitle("")
    } else {
      alert("Please write your todo")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  )
}

export default InputTodo
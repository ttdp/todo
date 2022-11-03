import React, { useState } from "react"

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default InputTodo
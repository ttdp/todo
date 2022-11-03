import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

import InputTodo from "./InputTodo"
import TodosList from "./TodosList"

function TodoContainer() {
  const items = [
    {
      id: uuidv4(),
      title: "Setup development environment",
      completed: true
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false
    }
  ]

  const [todos, setTodos] = useState(items)

  const handleChange = (id) => {
    const _todos = todos.map(todo => {
      if (todo.id === id) {
        // todo.completed = !todo.completed
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(_todos)
  }

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    const _todos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(_todos)
  }

  return (
    <div>
      <InputTodo addTodoProps={addTodo} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={deleteTodo}
      />
    </div>
  )
}

export default TodoContainer
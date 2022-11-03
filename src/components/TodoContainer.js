import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

import InputTodo from "./InputTodo"
import TodosList from "./TodosList"

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

function getInitialTodos() {
  const temp = localStorage.getItem("todos")
  const savedTodos = JSON.parse(temp)
  return savedTodos || []
}

function TodoContainer() {
  const [todos, setTodos] = useState(getInitialTodos())

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

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

  const updateTodo = (id, title) => {
    const _todos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: title }
      }
      return todo
    })
    setTodos(_todos)
  }

  return (
    <div className="container">
      <div className="inner">
        <InputTodo addTodoProps={addTodo} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          updateTodoProps={updateTodo}
        />
      </div>
    </div>
  )
}

export default TodoContainer
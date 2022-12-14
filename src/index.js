import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer"

import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <TodoContainer />
    </Router>
  </React.StrictMode>
);
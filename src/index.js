import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer"

//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <TodoContainer />
  </React.StrictMode>
);
import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // creating stateful variable to interact with
  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruit and veg',
    'Pick up the kids from school'
  ]) 

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App

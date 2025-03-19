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

  // handleAddTodos updates todos using setTodos
  function handleAddTodos(newTodo) {
    // state syntax needed so webpage is listening for state changes
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }


  return (
    <>
      {/* passing handleAddTodos as an attribute prop to TodoInput */}
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App

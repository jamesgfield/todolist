import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // creating stateful variable to interact with
  const [todos, setTodos] = useState([])

  // need to declare input state in App file to give both list and input access to it
  const [todoValue, setTodoValue] = useState('')

  // handleAddTodos updates todos using setTodos
  function handleAddTodos(newTodo) {
    // state syntax needed so webpage is listening for state changes
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      // filter function keeps elements in array where todoIndex is not index
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
  }

  return (
    <>
      {/* passing handleAddTodos as an attribute prop to TodoInput */}
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App

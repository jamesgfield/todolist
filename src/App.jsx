import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  // creating stateful variable to interact with
  const [todos, setTodos] = useState([])
  // need to declare input state in App file to give both list and input access to it
  const [todoValue, setTodoValue] = useState('')

  // whenever we edit, handle or add, we need to persist
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  // handleAddTodos updates todos using setTodos
  function handleAddTodos(newTodo) {
    // state syntax needed so webpage is listening for state changes
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      // filter function keeps elements in array where todoIndex is not index
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
  }

  // takes a dependency array
  // listens to different events and runs code based on when events happen
  useEffect(() => {
    // if localStorage doesn't exist, return out
    if (!localStorage) {
      return
    }
    // else localStorage does exist
    let localTodos = localStorage.getItem('todos')
    // if localTodos doesn't exist, return out
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  // because dependancy array is empty, this runs after a refresh

  return (
    <>
      {/* passing handleAddTodos as an attribute prop to TodoInput */}
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App

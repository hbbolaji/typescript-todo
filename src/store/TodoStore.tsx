import React, {createContext, useState} from 'react'

interface Todo {
  task: string;
  completed: boolean
}

type TodoType = {
  todos: Todo[];
  activeTodo: Todo[]
  completedTodo: Todo[]
  addTodo: (task: string) => void
  deleteTask: (todo: Todo) => void
  changeStatus: (todo: Todo) => void
  clearCompeleted: () => void
}

const initialState = {
  todos: [],
  activeTodo: [],
  completedTodo: [],
  addTodo: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
  clearCompeleted: () => {}
}

export const TodoContext = createContext<TodoType>(initialState)

const TodoProvider: React.FC = ({children}) => {
  const [todos, setTodos] = useState<Todo[]>(initialState.todos)
  const [activeTodo, setActiveTodo] = useState<Todo[]>(initialState.activeTodo)
  const [completedTodo, setCompletedTodo] = useState<Todo[]>(initialState.completedTodo)
  const addTodo = (task: string) => {
    setTodos([...todos, {task, completed: false}])
  }

  const deleteTask = (task: Todo ) => {
    const newTodos = todos.filter(todo => todo.task !== task.task)
    setTodos(newTodos)
  }

  const changeStatus = (task: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo.task === task.task) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(newTodos)
  }

  const clearCompeleted = () => {
    setTodos(todos.filter(todo => todo.completed !== true))
  }

  return (
    <TodoContext.Provider value={{todos, activeTodo, completedTodo, addTodo, deleteTask, changeStatus, clearCompeleted}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
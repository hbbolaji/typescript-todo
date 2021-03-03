import React, {createContext, useState} from 'react'

interface Todo {
  task: string;
  completed: boolean
}

type TodoType = {
  state: Todo[]
  status: string
  changeList: (list: string) => void
  changeState: (newState: Todo[]) => void
  addTodo: (task: string) => void
  deleteTask: (todo: Todo) => void
  changeStatus: (todo: Todo) => void
  clearCompeleted: () => void
}

const initialState = {
  state: [],
  status: 'all',
  changeList: () => {},
  changeState: () => {},
  addTodo: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
  clearCompeleted: () => {}
}

export const TodoContext = createContext<TodoType>(initialState)

const TodoProvider: React.FC = ({children}) => {
  const [state, setState] = useState<Todo[]>(initialState.state)
  const [status, setStatus] = useState<string>(initialState.status)
  const addTodo = (task: string) => {
    setState([{task, completed: false}, ...state])
  }

  const changeState = (newState: Todo[]) => {
    setState(newState)
  }

  const deleteTask = (task: Todo ) => {
    const newTodos = state.filter(todo => todo.task !== task.task)
    setState(newTodos)
  }

  const changeStatus = (task: Todo) => {
    const newTodos = state.map(todo => {
      if (todo.task === task.task) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setState(newTodos)
  }

  const clearCompeleted = () => {
    setState(state.filter(todo => todo.completed !== true))
  }

  const changeList = (list: string) => {
    setStatus(list)
  } 

  return (
    <TodoContext.Provider value={{state, status, changeList, changeState, addTodo, deleteTask, changeStatus, clearCompeleted}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
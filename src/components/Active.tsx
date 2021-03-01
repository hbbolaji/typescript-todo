import React, {useContext} from 'react'
import Todo from './Todo'
import {ListContainer} from '../styles/utility.styles'
import {TodoContext} from '../store/TodoStore'

const Active:React.FC = ():JSX.Element => {
  const {state} = useContext(TodoContext)
  return (
    <ListContainer>
      {
        state.filter(todo => todo.completed === false).map(todo => (
          <Todo key={todo.task} task={todo.task} completed={todo.completed} />
        ))
      }
    </ListContainer>
  )
}

export default Active
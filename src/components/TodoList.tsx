import React from 'react'
import Todo from './Todo'
import {ListContainer} from '../styles/utility.styles'

const TodoList = () => {
  return (
    <ListContainer>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ListContainer>
  )
}

export default TodoList

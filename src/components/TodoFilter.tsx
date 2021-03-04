import React, {useContext} from 'react'
import {DynamicContainer, Write} from '../styles/utility.styles'
import {TodoContext} from '../store/TodoStore'
import {ThemeContext} from '../store/ThemeContext'

const TodoFilter = () => {
  const {changeList, status} = useContext(TodoContext)
  const {color} = useContext(ThemeContext)
  return (
    <DynamicContainer width={100} row justify="space-around" align="center">
      <Write className="pointer" style={{color: status === 'all'? 'blue' : ''}} dark={color} size={0.9} onClick={() => {
        changeList('all')
      }}>All</Write>
      <Write className="pointer" style={{color: status === 'active'? 'blue' : ''}} statusColor={status === 'active'} dark={color} size={0.9} onClick={() => {
        changeList('active')
      }}>Active</Write>
      <Write className="pointer" style={{color: status === 'completed'? 'blue' : ''}} statusColor={status === 'completed'} dark={color} size={0.9} onClick={() => {
        changeList('completed')
      }}>Completed</Write>
    </DynamicContainer>
  )
}

export default TodoFilter

import React, {useContext} from 'react'
import {DynamicContainer, Text} from '../styles/utility.styles'
import {TodoContext} from '../store/TodoStore'

const TodoFilter = () => {
  const {changeList} = useContext(TodoContext)
  return (
    <DynamicContainer width={100} row justify="space-around" align="center">
      <Text size={0.9} color="blue" onClick={() => {
        changeList('all')
      }}>All</Text>
      <Text size={0.9} color="gray" onClick={() => {
        changeList('active')
      }}>Active</Text>
      <Text size={0.9} color="gray" onClick={() => {
        changeList('completed')
      }}>Completed</Text>
    </DynamicContainer>
  )
}

export default TodoFilter

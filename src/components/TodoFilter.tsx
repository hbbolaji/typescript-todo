import React from 'react'
import {DynamicContainer, Text} from '../styles/utility.styles'

const TodoFilter = () => {
  return (
    <DynamicContainer width={100} row justify="space-around" align="center">
      <Text size={0.9} color="blue">All</Text>
      <Text size={0.9} color="gray">Active</Text>
      <Text size={0.9} color="gray">Completed</Text>
    </DynamicContainer>
  )
}

export default TodoFilter

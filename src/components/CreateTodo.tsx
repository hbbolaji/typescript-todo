import React from 'react'
import { DynamicContainer, Check, Input, FlexItem } from '../styles/utility.styles'

const CreateTodo = () => {
  return (
    <DynamicContainer row align="center">
      <Check></Check>
      <FlexItem>
        <form>
          <Input placeholder="Create a new Task" />
        </form>
      </FlexItem>
    </DynamicContainer>
  )
}

export default CreateTodo

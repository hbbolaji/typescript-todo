import React, {useContext} from 'react'
import {List, DynamicContainer, FlexItem, Check, Text} from '../styles/utility.styles'
import {TodoContext} from '../store/TodoStore'

interface TodoType {
  task: string,
  completed: boolean
}

const Todo: React.FC<TodoType> = ({task, completed}):JSX.Element => {
  const {deleteTask, changeStatus} = useContext(TodoContext)
  return (
    <List color="white">
      <DynamicContainer row align="center">
        <Check done={completed} onClick={() => changeStatus({task, completed})}>
        </Check>
        <FlexItem>
          <Text done={completed} color="white" size={1.0}>{task}</Text>
        </FlexItem>
        <div onClick={() => deleteTask({task, completed})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </div>
      </DynamicContainer>
    </List>
  )
}

export default Todo

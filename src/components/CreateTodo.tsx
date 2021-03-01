import React, {useState, useContext} from 'react'
import { DynamicContainer, Check, Input, FlexItem } from '../styles/utility.styles'
import {TodoContext} from '../store/TodoStore'

const CreateTodo: React.FC = ():JSX.Element => {
  const {addTodo} = useContext(TodoContext)
  const [todo, setTodo] = useState<string>("")
  return (
    <DynamicContainer row align="center">
      <Check done={false}></Check>
      <FlexItem>
        <form onSubmit={(e) => {
          e.preventDefault()
          if(todo !== "") {
            addTodo(todo)
            setTodo("")
          }
        }}>
          <Input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Create a new Task" />
        </form>
      </FlexItem>
    </DynamicContainer>
  )
}

export default CreateTodo

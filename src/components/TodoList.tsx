import React, {useContext} from 'react'
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd'
import Todo from './Todo'
import {ListContainer} from '../styles/utility.styles'
import {TodoContext} from '../store/TodoStore'

const TodoList:React.FC = ():JSX.Element => {
  const {state, changeState} = useContext(TodoContext)

  const onDragEnd = ({source, destination,}: DropResult) => {
    if(destination === undefined || destination === null) return null
    if (destination.index === source.index) return null
    const newState = state.filter((_: any, idx: number) => idx !== source.index)
    newState.splice(destination.index, 0, state[source.index])
    changeState(newState)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="listItem">
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            {
              state.map((todo, index) => (
                <Todo key={todo.task} task={todo.task} index={index} completed={todo.completed} />
              ))
            }
            {provided.placeholder}
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList

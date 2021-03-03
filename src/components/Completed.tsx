import React, {useContext} from 'react'
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd'
import Todo from './Todo'
import {ListContainer} from '../styles/utility.styles'
import {TodoContext} from '../store/TodoStore'

const Completed:React.FC = ():JSX.Element => {
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
      <Droppable droppableId="completedId">
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            {
              state.filter((todo) => todo.completed === true).map((todo, index) => (
                <Todo key={todo.task} index={index} task={todo.task} completed={todo.completed} />
              ))
            }
          </ListContainer>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Completed
import React, {useState, useContext} from 'react';
import './App.css'
import {Container, Image, TodoContainer, DynamicContainer, Box, MobileBox, Write, MobileContainer, FlexItem} from './styles/utility.styles'
import TodoHead from './components/TodoHead'
import CreateTodo from './components/CreateTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import Completed from './components/Completed'
import Active from './components/Active'
import {TodoContext} from './store/TodoStore'
import {ThemeContext} from './store/ThemeContext'

const Todos = (status: string) => {
  if (status === 'all') {
    return <TodoList />
  } else if (status === 'completed') {
    return <Completed />
  } else if (status === 'active') {
    return <Active />
  }
}
const App:React.FC = ():JSX.Element => {
  const {state, clearCompeleted, status} = useContext(TodoContext)
  const {color} = useContext(ThemeContext)
  const [images] = useState<[string, string]>([
    'https://image.freepik.com/free-vector/blue-night-sky-with-mountain-landscape-illustration_105940-228.jpg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1FzCHEqmwl1bItY_8xTp372sQh0slltKZw&usqp=CAU'
  ])

  return (
    <Container dark={color}>
      <Image src={images}></Image>
      <TodoContainer>
        <DynamicContainer row={false}>
          <TodoHead />
          <Box dark={color}>
            <CreateTodo />
          </Box>
          <Box dark={color}>
            {Todos(status)}
            <DynamicContainer padding={10} row justify="center" align="center">
              <FlexItem>
                <Write dark={color} align="left" size={0.9}>{state.length} {state.length === 1 ? 'item' : 'items'} left</Write>
              </FlexItem>
              <FlexItem>
                <MobileContainer row justify="center" align="center">
                  <TodoFilter />
                </MobileContainer>
              </FlexItem>
              <FlexItem>
                <Write className="pointer" dark={color} align="right" size={0.9} onClick={()=>clearCompeleted()}>Clear Completed </Write>
              </FlexItem>
            </DynamicContainer>
          </Box>
          <MobileBox dark={color}>
            <TodoFilter />
          </MobileBox>
        </DynamicContainer>
      </TodoContainer>
    </Container>
  );
}

export default App;

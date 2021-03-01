import React, {useState, useContext} from 'react';
import './App.css'
import {Container, Image, TodoContainer, DynamicContainer, Box, MobileBox, Text, MobileContainer, FlexItem} from './styles/utility.styles'
import TodoHead from './components/TodoHead'
import CreateTodo from './components/CreateTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import {TodoContext} from './store/TodoStore'


const App:React.FC = ():JSX.Element => {
  const {todos, clearCompeleted} = useContext(TodoContext)
  const [images] = useState<[string, string]>([
    'https://image.freepik.com/free-vector/blue-night-sky-with-mountain-landscape-illustration_105940-228.jpg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ1FzCHEqmwl1bItY_8xTp372sQh0slltKZw&usqp=CAU'
  ])

  return (
    <Container dark={true}>
      <Image src={images}></Image>
      <TodoContainer>
        <DynamicContainer row={false}>
          <TodoHead />
          <Box>
            <CreateTodo />
          </Box>
          <Box>
            <TodoList />
            <DynamicContainer padding={10} row justify="center" align="center">
              <FlexItem>
                <Text size={0.9} color="gray">{todos.length} items left</Text>
              </FlexItem>
              <FlexItem>
                <MobileContainer row justify="center" align="center">
                  <TodoFilter />
                </MobileContainer>
              </FlexItem>
              <FlexItem>
                <Text align="right" size={0.9} color="gray" onClick={()=>clearCompeleted()}>Clear Completed </Text>
              </FlexItem>
            </DynamicContainer>
          </Box>
          <MobileBox>
            <TodoFilter />
          </MobileBox>
        </DynamicContainer>
      </TodoContainer>
    </Container>
  );
}

export default App;

import React from 'react'
import {List, DynamicContainer, FlexItem, Check, Text} from '../styles/utility.styles'

const Todo = () => {
  return (
    <List color="white">
      <DynamicContainer row align="center">
        <Check>
          {/* <DynamicContainer row align="center" justify="center">
            <img src="../images/icon-check.svg" alt="checked" />
          </DynamicContainer> */}
        </Check>
        <FlexItem>
          <Text color="white" size={1.0}>Hashim</Text>
        </FlexItem>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </DynamicContainer>
    </List>
  )
}

export default Todo

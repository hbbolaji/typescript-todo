import styled from 'styled-components'

interface ContainerType {
  dark: boolean,
}

type ImageType = {
  src: [string, string]
}

interface DynamicType {
  row: boolean
  justify?: string
  align?: string
  mb?: number
  width?: number
  padding?: number
}

interface BoxType {
  height?: number
}

interface TextType {
  size: number
  color: string
  align?: string
  done?: boolean
}

const Container = styled.div<ContainerType>`
  background: ${props => props.dark ? '#111827': "#F9FAFB"};
  min-height: 100vh;
  font-family: 'Josefin Sans', sans-serif;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.div<ImageType>`
  height: 35vh;
  width: 100%;
  background: ${props => `url(${props.src[0]})`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  @media (max-width: 414px) {
    background: ${props => `url(${props.src[1]})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`
const FlexItem = styled.div`
  flex-grow: 1;
  margin: 0px 20px;
`

const TodoContainer = styled.div`
  position: absolute;
  width: 50%;
  top: 70px;
  @media (max-width: 414px) {
    width: 90%;
  }
`
const DynamicContainer = styled.div<DynamicType>`
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  margin-bottom: ${props => `${props.mb}em`};
  width: ${props => `${props.width}%`};
  padding: ${props => `${props.padding}px`}
`

const MobileContainer = styled(DynamicContainer)`
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
`

const Box = styled.div<BoxType>`
  background: #1F2937;
  height: ${props => `${props.height}px`};
  margin-bottom: 10px;
  padding: 10px;
`

const MobileBox = styled(Box)`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

const Text = styled.p<TextType>`
  font-size: ${props =>`${props.size}em`};
  color: ${props => props.color};
  text-align: ${props => props.align};
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
`

const Check = styled.div<{done: boolean}>`
  height: 20px;
  width: 20px;
  border: 1px solid #374151;
  border-radius: 20px;
  background: ${props => props.done ? 'linear-gradient(65deg, #60A5FA, #5B21B6)': 'transparent'};
`

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 1.0rem;
  background: transparent;
  border: 0px;
  outline: none;
  color: #9CA3AF;
`
const List = styled.li`
  padding: 10px 0px;
  border-bottom: 1px solid #494C6B;
`

const ListContainer = styled.ul`
  list-style-type: none;
`

export { Container, Image, TodoContainer, DynamicContainer, Box, MobileBox, Text, Check, Input, MobileContainer, FlexItem, List, ListContainer}
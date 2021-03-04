import React, {createContext, useState} from 'react'

interface Theme {
  color: boolean
  changeTheme: () => void
}

const initialState = {
  color: true,
  changeTheme: () => {}
}

export const ThemeContext = createContext<Theme>(initialState)


const ThemeProvider: React.FC = ({children}) => {
  const [color, setColor] = useState<boolean>(initialState.color)
  const changeTheme = () => {
    setColor(color => !color)
  }
  return (
    <ThemeContext.Provider value={{color, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
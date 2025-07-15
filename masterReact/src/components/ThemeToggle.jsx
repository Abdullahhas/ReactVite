import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
    const {toggleTheme} = useTheme()
  return (
    <div>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

export default ThemeToggle

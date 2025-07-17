import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { TodoProvider } from './context/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  // <AuthProvider>
  //   <ThemeProvider>
  <TodoProvider>
    <App />
    </TodoProvider>
  //   </ThemeProvider>
  // </AuthProvider>,
)

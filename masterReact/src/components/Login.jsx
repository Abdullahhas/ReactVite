import React, { useState } from 'react'
import { useAuth } from '../context/authContext'


const Login = () => {
    const {login} = useAuth()
    const [name , setName] = useState('')

    const handleLogin = () => {
        login(name)
    }
  return (
    <div>
      <input type="text"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login

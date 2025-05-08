import { useState } from 'react'
import UseEffect from './components/UseEffect'
import UseCallback from './components/UseCallback'
import UseMemoo from './components/UseMemoo'

function App() {

  // const [toggle , setToggle] = useState('white')

  // const togglecolor = () => {
  //   setToggle(prevColor => prevColor === 'white' ? 'black' : 'white')
  // }
  // const [count, setCount] = useState(0)
  // const [message, setMessage] = useState('')

  // const increment = () => {
  //   setCount(count + 1)
  //   setMessage('')
  // }

  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //     setMessage('')
  //   } else {
  //     setMessage("Can't go below 0!")
  //   }
  // }

  // const reset = () => {
  //   setCount(0)
  //   setMessage('Counter has been reset')
  // }

  return (
    <>
      {/* <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      {message && <p>{message}</p>} */}


    {/* <div style={{ backgroundColor: toggle, height: '100vh', padding: '1rem' }}>
        <button onClick={togglecolor}>toggle color</button>
      </div> */}

      {/* <UseEffect/> */}

      {/* <UseCallback/> */}

      <UseMemoo/>
    </>
  )
}

export default App

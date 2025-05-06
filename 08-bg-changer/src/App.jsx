

import { useState } from 'react'



function App() {
  const [color, setColor] = useState('grwy')

  return (
    <>
      <div className='w-full h-[800px] p-5 ' style={{backgroundColor : color}} >
        <button className=' border-2 p-2 text-red-500 ' onClick={() => {
          setColor('red')
        }}>red</button>
         <button className=' border-2 p-2 text-pink-500'   onClick={() => {
          setColor('pink')
        }}>pink</button>
      </div>
    </>
  )
}

export default App

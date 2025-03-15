

import { useState } from 'react'



function App() {
  const [color, setColor] = useState('blue')

  return (
    <>
      <div className='w-full h-[800px] p-5 ' style={{backgroundColor : color}} >
        <button className=' border-2 p-2 text-blue-50' onClick={() => {
          setColor('red')
        }}>red</button>
         <button className=' border-2 p-2 text-blue-50'  onClick={() => {
          setColor('pink')
        }}>pink</button>
      </div>
    </>
  )
}

export default App

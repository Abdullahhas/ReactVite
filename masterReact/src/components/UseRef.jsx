import React, { useRef } from 'react'

const UseRef = () => {
    const ref = useRef(null)  //just work like document.getElement
  return (
    <>
      <input type="text" 
      ref={ref}
      />

      <button onClick={()=>ref.current.focus()}>click to focus on input</button>
    </>
  )
}

export default UseRef

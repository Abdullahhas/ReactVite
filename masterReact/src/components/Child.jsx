import React from 'react'

const Child = ({onclick}) => {
  return (
    <div>
      <button onClick={onclick}>child button</button>
    </div>
  )
}

export default Child

import React, { useState  , useEffect} from 'react'

const ClickTitle = () => {
    const [counter , setCounter] = useState(0)

    useEffect(() => {
      
    document.title = `Clicked ${counter} times`;
      
    }, [counter])
    
  return (
    <button onClick={() => setCounter(counter+1)}>
      click
    </button>
  )
}

export default ClickTitle



// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("tick");
//   }, 1000);

//   return () => clearInterval(interval); // ✅ Clean it up!   if we dont do this then there is a memory leaks here because it runs in the backgroung always
// }, []);

// React components need to clean up side effects using useEffect return functions to avoid memory leaks.

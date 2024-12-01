// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
  

 
//     const [count, setCount] = useState(0)

//     const handleClick = ()=>{
//       setCount(count+1) it schedules the state update.
//       console.log(count) it will print the previous state.
      
//     }
  

//   return (
//     <>
//       <button onClick={handleClick}>click</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const Signin = () => {
//     const [signedin, setSignedin] = useState(false)

//     const handleSignin = () => {
//         setSignedin(true)
//     }

//     const handleSignout = () => {
//         setSignedin(false)
//     }
//   return (
//          <div>
//            { signedin ? ( 
//         <div>
//             <button type="button" onClick={handleSignout}>Sign Out</button>
//             <p>Welcome back, good to see you in here</p>
//         </div>) :

//         (<div>
//             <button type="button"onClick={handleSignin}>Sign In</button>
//             <p>Please Sign in</p>
//         </div>)
//            }
//         </div>
//   )
// }

// export default Signin;
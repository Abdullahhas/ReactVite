import React, { useState } from "react";
import Name from "./components/Name";
import Form from "./components/Form";
import Mapping from "./components/Mapping";
import Todo from "./components/Todo";
import ApiCall from "./components/ApiCall";
import ClickTitle from "./components/ClickTitle";
import SimpleTodo from "./components/SimpleTodo";
import UseRef from "./components/UseRef";
import PrevValueExample from "./components/PrevVal";
import PrevVal from "./components/PrevVal";
import Child from "./components/Child";

import { BrowserRouter  , Route , Routes , Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useAuth } from "./context/authContext";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";


const App = () => {
  // let name = "";

  // const [counter, setCounter] = useState(0);

  // const add = () => {
  //   setCounter(counter+1)
  // };

  // const sub = () => {
  //   setCounter(counter-1)
  // };

  // const reset = () => {
  //   setCounter(0)
  // };

  // const [count , setCount] = useState(0)

  // const handleClick = () => {
  //   console.log("Button click from child")


  // }


  const {user} = useAuth()
  const {theme} = useTheme()
  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      {/* name.jsx
      <Name name = 'ali' />
      <Name name = 'abdullah' />
      <Name a = {8}  b = {3} /> */}
      

      {/* <p>{counter}</p>
      <button onClick={add}>add</button>
      <button onClick={sub} disabled = {counter == 0}>sub</button>
      <button onClick={reset}>reset</button> */}


      {/* <Form/> */}

      {/* <Mapping/> */}

      {/* <Todo/> */}

      {/* <ApiCall/> */}

      {/* <ClickTitle/> */}

      {/* <SimpleTodo/> */}


      {/* <UseRef/> */}

      {/* <PrevVal/> */}

      {/* <h1 > count : {count} </h1>
      <button onClick={()=>setCount(count+1)}>add</button>

        <Child onclick = {handleClick}/> */}

        {/* // <BrowserRouter>

        //     <nav>
        //       <Link to='/'>Home</Link>
        //       <Link to='/about'>About</Link>
        //       <Link to='/contact'>Contact</Link>
        //     </nav>
        //     <Routes>
        //       <Route path="/" element={<Home/>}/>
        //       <Route path="/about" element={<About/>}/>
        //       <Route path="/contact" element={<Contact/>}/>
        //     </Routes>
        // </BrowserRouter> */}


          <h3>Auth demo</h3>
          <ThemeToggle/>
          {user ? <Dashboard/> : <Login/>}






    </div>
  );
};

export default App;

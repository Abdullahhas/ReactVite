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

  return (
    <>
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

      <PrevVal/>


    </>
  );
};

export default App;

import React, { useState } from "react";
import Name from "./components/Name";
import Form from "./components/Form";

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


      <Form/>
    </>
  );
};

export default App;

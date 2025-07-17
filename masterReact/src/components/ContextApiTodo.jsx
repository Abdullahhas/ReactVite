import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const ContextApiTodo = () => {
  const [text, setText] = useState(""); 
  const { addTodo } = useTodo(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (text.trim() === "") return; 
    addTodo(text); 

   
    setText(""); 
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        
      />
      <button type="submit" >
        Add
      </button>
    </form>
  );
};

export default ContextApiTodo;

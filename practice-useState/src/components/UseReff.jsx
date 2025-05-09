import React from 'react'
import { useRef } from 'react';

const UseReff = () => {
    // const inputRef = useRef(null); // Create a reference to the input

    // const handleFocus = () => {
    //   inputRef.current.focus() // Focus the input using the ref
    // };
  
    // return (
    //   <div style={{ padding: "20px" }}>
    //     <h2>🎯 useRef</h2>
  
    //     <input
    //       type="text"
    //       ref={inputRef} // Attach the ref to the input
    //       placeholder="Click the button to focus me"
    //       style={{ padding: "10px", width: "250px" }}
    //     />
  
    //     <br /><br />
  
    //     <button onClick={handleFocus} style={{ padding: "10px 20px" }}>
    //       Focus Input
    //     </button>
    //   </div>
    // );


    // copy text of input using useRef 
    const inputRef = useRef(null);

    const handleCopy = () => {
      const input = inputRef.current;
      input.select(); // Select the text inside the input
      document.execCommand("copy"); // Copy selected text to clipboard
  
      alert("Copied: " + input.value); // Optional: show confirmation
    };
  
    return (
      <div style={{ padding: "20px" }}>
        <h2>📋 Copy Text using useRef</h2>
  
        <input
          type="text"
          ref={inputRef}
          defaultValue="This will be copied"
          style={{ padding: "10px", width: "250px" }}
        />
  
        <br /><br />
  
        <button onClick={handleCopy} style={{ padding: "10px 20px" }}>
          Copy Text
        </button>
      </div>
    );
}

export default UseReff

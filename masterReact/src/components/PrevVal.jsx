import React, { useState, useEffect, useRef } from 'react';

const PrevVal = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(); // used to store previous value

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h3>Current Count: {count}</h3>
      <h4>Previous Count: {prevCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PrevVal;

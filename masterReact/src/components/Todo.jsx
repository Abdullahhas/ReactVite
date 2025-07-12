import React, { useState } from 'react';

const Todo = () => {
  const [name, setName] = useState('');
  const [todo, setTodo] = useState([]);

 
  const submit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    setTodo([...todo, name]);
    setName('');
  };

  const remove = (index) => {
    setTodo(todo.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <h2>Basic todo</h2>
      <form onSubmit={submit}>
        <h4>Enter your name</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>

      <div>
        {todo.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button onClick={() => remove(index)}>remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;

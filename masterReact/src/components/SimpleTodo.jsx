import React, { useState, useEffect } from 'react';

const SimpleTodo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // 🔹 Load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('myTodos');
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // 🔹 Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  return (
    <div>
      <h2>Simple Todo</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleTodo;

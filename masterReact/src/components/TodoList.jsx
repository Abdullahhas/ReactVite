import { useTodo } from "../context/TodoContext";

const TodoList = () => {
  const { todos, removeTodo } = useTodo(); 

  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos yet. Add one!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} >
              {todo.text}
              <button
                onClick={() => removeTodo(todo.id)}
              
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

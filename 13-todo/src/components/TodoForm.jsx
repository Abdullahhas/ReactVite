import React, { useState } from 'react'
import { UseTodo } from '../context';

function TodoForm() {
    const [todo ,setTodo] = useState("")
    const {addTodo} = UseTodo()

    const add = (e) => {
        e.preventDefault()

        addTodo({
            todo,
            completed : false
        })
        setTodo("")
    }
 
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="bg-white/20 border border-black/10 rounded-l-lg w-full duration-150 outline-none px-3 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="bg-green-600 rounded-r-lg text-white px-3 py-1 shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;



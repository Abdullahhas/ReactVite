import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [users , setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      };

    useEffect( ()=>{   
      fetchUsers()
    } , [])

  return (
    <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
  )
}

export default UseEffect

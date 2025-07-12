import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [users , setUsers] = useState([])

    const fetchUsers = async () => {
        let url = `https://jsonplaceholder.typicode.com/users`
        let data = await fetch(url)
        let res =await data.json()
        setUsers(res)
        console.log(res)
    
    }

    useEffect(() => {
        fetchUsers()
    }, [])   //[] means runs the code only once
    
  return (
    <>
      {users.map((user , index)=> (
        <div key={user.id}>
        <p > {user.id}</p>
        <p>{user.name}</p>
        </div>
      ))}
    </>
  )
}

export default ApiCall

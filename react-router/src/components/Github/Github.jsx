import React, { useEffect, useState } from 'react'

function Github() {
    const [data ,setData] = useState([])

    useEffect(()=>{
        
        fetch("https://api.github.com/users/Abdullahhas")
        .then((res) => res.json())
        .then((data)=> setData(data) )
    } , [])
  return (
    <div>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

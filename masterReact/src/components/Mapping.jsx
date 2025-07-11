import React from 'react'

const Mapping = () => {
  const names = ['abd', 'has', 'ansa'];

  const ob = [
    {age : 3 , city : 'kasur'},
    {age : 4 , city : 'kasur'},
    {age : 5 , city : 'kasur'},
    {age : 6 , city : 'kasur'},
  ]
  return (
    <>
      {names.map((name, index) => (
        <p key={index}>hello {name}</p>
      ))}


      {ob.map((ob) => {
        return(
            <>
            <p>
            {ob.age}
            </p>
            <p>{ob.city}</p>
            </>
        )
      })}
    </>
  );
};

export default Mapping;

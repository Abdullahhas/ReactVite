import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); 

    const intervalId = setInterval(() => {
      fetchUsers();
    }, 10000); // every 10 seconds

    return () => {
      clearInterval(intervalId); // cleanup on unmount
    };
  }, []);

  return (
    <div>
      <h2>User List (Auto Refreshing Every 10s)</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;

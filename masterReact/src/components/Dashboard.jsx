import { useAuth } from '../context/authContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
        hi
      <h2>Welcome, {user.name}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;

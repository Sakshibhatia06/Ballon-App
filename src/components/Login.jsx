// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({
  authorizedUsers,
  unauthorizedUsers,
  addToAuthorizedUsers,
  removeFromUnauthorizedUsers,
}) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authorizedUsers.includes(username)) {
      addToAuthorizedUsers(username);
      navigate('/game');
    }
    else {
      removeFromUnauthorizedUsers(username);
    }
  };

  return (
    <div className='login'>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

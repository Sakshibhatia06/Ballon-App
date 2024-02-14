// App.js
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Navigate,Routes } from 'react-router-dom';
import Login from './components/Login';
import Game from './components/Game';

function App() {
  const [authorizedUsers, setAuthorizedUsers] = useState([]);
  const [unauthorizedUsers, setUnauthorizedUsers] = useState([]);

  useEffect(() => {
    // For demonstration, I'm declare some users here
    setAuthorizedUsers(['user1', 'user2','sakshi bhatia','user3','user4']);
  }, []);

  const addToAuthorizedUsers = (user) => {
    setAuthorizedUsers((prevUsers) => [...prevUsers, user]);
  };

  const removeFromUnauthorizedUsers = (user) => {
    setUnauthorizedUsers((prevUsers) =>
      prevUsers.filter((u) => u !== user)
    );
  };

  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Navigate to="/login" />}></Route>
      <Route path="/login" element={<Login
          authorizedUsers={authorizedUsers}
          unauthorizedUsers={unauthorizedUsers}
          addToAuthorizedUsers={addToAuthorizedUsers}
          removeFromUnauthorizedUsers={removeFromUnauthorizedUsers}
        />}>
        
      </Route>
      <Route path="/game" element={<Game authorizedUsers={authorizedUsers} />}>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;


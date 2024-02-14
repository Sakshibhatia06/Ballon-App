// GamePage.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Game = ({ authorizedUsers }) => {
  const [balloonSize, setBalloonSize] = useState(0);
  const [pop, setPop] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    if (!authorizedUsers.length) {
      // Redirect to login if no authorized users
      navigate('/login');
    }
  }, [authorizedUsers, navigate]);

  const handlePump = () => {
    if (!pop) {
      setBalloonSize((prevSize) => prevSize + 1);
      if (balloonSize >= 13) {
        setPop(true);
        clearInterval(timerRef.current);
        alert('Balloon Popped!');
        // Redirect to login after popping the balloon
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setBalloonSize((prevSize) => prevSize + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className='login'>
      <h2>Game Page</h2>
      <p>Balloon Size: {balloonSize}</p>
      <button onClick={handlePump}>Pump Balloon</button>
    </div>
  );
};

export default Game;

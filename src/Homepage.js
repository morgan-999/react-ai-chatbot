import React from 'react';
import MLKLogo from './MLK - Logo.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', color: 'white'}}> {/* this centers all elements*/}
      <Link to="/chat">
      <img
        src={MLKLogo}
        alt="Martin Luther King Jr."
        style={{ width: '150px', height: 'auto', borderRadius: '50%', marginBottom: '20px'}}
      />
      </Link>
      <h1>Welcome to the Home Page!</h1>
      <p>Click the Chat button or Martin Luther King to start a conversation.</p>
    </div>
  );
};

export default Homepage;

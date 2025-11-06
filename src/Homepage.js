import React from 'react';
import MLKLogo from './MLK - Logo.png';

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', color: 'white'}}> {/* this centers all elements*/}
      <img
        src={MLKLogo}
        alt="Martin Luther King Jr. Logo"
        style={{ width: '150px', height: 'auto', borderRadius: '50%', marginBottom: '20px'}}
      />
      <h1>Welcome to the Home Page!</h1>
      <p>Click the Chat button to start a conversation.</p>
    </div>
  );
};

export default Homepage;

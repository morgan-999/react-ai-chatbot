import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({MLKLogo}) => {
  const OFFLINE_IMAGE_PATH_FRAGMENT = './Offline - MLK.png';
  const isOffline = MLKLogo.endsWith(OFFLINE_IMAGE_PATH_FRAGMENT);
  const linkTo = isOffline ? '#' : '/chat';
  const linkStyle = {
    pointerEvents: isOffline ? 'none' : 'auto',
    cursor: isOffline ? 'default' : 'pointer',
    opacity: isOffline ? 0.7 : 1,
    display: 'inline-block'
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', color: 'white'}}> {/* this centers all elements*/}
      <Link to={linkTo} style={linkStyle}>
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

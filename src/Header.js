import React from 'react';
import { Link } from 'react-router-dom';

// Component for the persistent header with the Home button and other links
const Header = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#37404a',
        color: 'Grey, Black',
        gap: '20px',
      }}
    >
      {/* Home Button (Top Left corner) */}
      {/* Link to="/" is correct for the Home page */}
      <Link to="/" style={{ color: 'White', textDecoration: 'Times New Roman', fontSize: '1.0em' }}>
        Home
      </Link>

      {/* Navigation Links for other pages */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Link to the Chat Page (Path: /chat) */}
        <Link to="/chat" style={{ color: 'white', textDecoration: 'Times New Roman' }}>
          Chat
        </Link>
        {/* Link to the Help Page (Path: /help) */}
        <Link to="/help" style={{ color: 'white', textDecoration: 'Times New Roman' }}>
          Help
        </Link>
      </div>
    </nav>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

// Component for the persistent header with the Home button and other links
const Header = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        backgroundColor: '#37404a',
      }}
    >
      <div style={{ display: 'flex', gap: '20px' }}>
      <Link
      to="/"
      className="nav-link"
      style={{
        color: 'White',
        fontFamily: 'Times New Roman',
        textDecoration: 'none',
        fontSize: '1.0em'
        }}>
        Home
      </Link>

     
        <Link
        to="/chat"
        className="nav-link"
        style={{
          color: 'white',
          fontFamily: 'Times New Roman',
          textDecoration: 'none'
          }}>
          Chat
        </Link>
        <Link
        to="/help"
        className="nav-link"
        style={{
          color: 'white',
          fontFamily: 'Times New Roman',
          textDecoration: 'none'
          }}>
          Help
        </Link>
        </div>

        <Link
        to="/history"
        className="nav-link"
        style={{
          color: 'white',
          fontFamily: 'Times New Roman',
          textDecoration: 'none'
        }}>
          History
        </Link>
    </nav>
  );
};

export default Header;
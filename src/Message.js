import React, { useState, useEffect } from 'react';
// Assuming you saved these in src/
import MlkLogo from './MLK - Logo.png';
import OfflineMLK from './Offline - MLK.png';
import UserAvatar from './User - Logo.png'; // Make sure you have this image

// The 'side' prop will determine if it's the user (left) or bot (right)
const Message = ({ text, side, time, isOnline}) => {
  const isBot = side === 'right'; 
  const MLKImagePath = isOnline ? MlkLogo : OfflineMLK;
  
  // Get text size from localStorage
  const [textSize, setTextSize] = useState(() => {
    return localStorage.getItem('chatTextSize') || 'medium';
  });

  // Listen for changes to text size
  useEffect(() => {
    const handleStorageChange = () => {
      setTextSize(localStorage.getItem('chatTextSize') || 'medium');
    };
    
    // Check for changes periodically (for same-tab updates)
    const interval = setInterval(() => {
      const newSize = localStorage.getItem('chatTextSize');
      if (newSize && newSize !== textSize) {
        setTextSize(newSize);
      }
    }, 500);
    
    return () => {
      clearInterval(interval);
    };
  }, [textSize]);

  // Font size mapping
  const fontSizes = {
    small: '14px',
    medium: '16px',
    large: '20px'
  };
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: isBot ? 'flex-end' : 'flex-start',
      margin: '10px 0',
    }}>

    <div style={{
      display: 'flex',
      justifyContent: isBot ? 'flex-end' : 'flex-start', // Pushes bot messages right, user messages left
      alignItems: 'center',
    }}>
      
      {/* 1. Left Avatar (User) and Text for User messages */}
      {!isBot && (
        <img 
          src={UserAvatar} 
          alt="User" 
          style={{ width: '40px', borderRadius: '50%', marginRight: '10px' }} 
        />
      )}
      
      {/* 2. Message Bubble */}
      <div style={{
        maxWidth: '70%',
        padding: '10px 15px',
        borderRadius: '20px',
        color: isBot ? 'black' : 'white',
        backgroundColor: isBot ? '#E5E5EA' : '#007AFF',
        order: isBot ? -1 : 0,
        fontSize: fontSizes[textSize] // Apply text size here
      }}>
        {text}
      </div>
      
      {/* 3. Right Avatar (MLK) and Text for Bot messages */}
      {isBot && (
        <img 
          src={MLKImagePath} 
          alt="MLK Avatar" 
          style={{ width: '40px',  borderRadius: '50%', marginLeft: '10px' }} 
        />
      )}
    </div>

    {/* the timestamp display*/}
    <small
    className="timestamp-glow"
    style={{
      marginRight: isBot ? '50px' : '0px',
      marginLeft: isBot ? '0px' : '50px',
    }}>
      {time}
      </small>
    </div>
  );
};

export default Message;
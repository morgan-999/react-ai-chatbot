import React from 'react';
// Assuming you saved these in src/
import MlkLogo from './MLK - Logo.png'; 
import UserAvatar from './User - Logo.png'; // Make sure you have this image

// The 'side' prop will determine if it's the user (left) or bot (right)
const Message = ({ text, side }) => {
  const isBot = side === 'right'; // Bot messages are on the right side (MLK)
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: isBot ? 'flex-end' : 'flex-start', // Pushes bot messages right, user messages left
      margin: '15px 0',
      alignItems: 'flex-start',
    }}>
      
      {/* 1. Left Avatar (User) and Text for User messages */}
      {!isBot && (
        <img 
          src={UserAvatar} 
          alt="User Avatar" 
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} 
        />
      )}
      
      {/* 2. Message Bubble */}
      <div style={{
        maxWidth: '70%',
        padding: '10px 15px',
        borderRadius: '20px',
        color: isBot ? 'black' : 'white',
        backgroundColor: isBot ? '#E5E5EA' : '#007AFF', // Light for bot, blue for user (typical chat colors)
        // Adjust background color to look better on your gradient background
        
        // MLK's text bubble should be on the right, user's on the left
        order: isBot ? -1 : 0 // Use order to swap position relative to text and avatar
      }}>
        {text}
      </div>
      
      {/* 3. Right Avatar (MLK) and Text for Bot messages */}
      {isBot && (
        <img 
          src={MlkLogo} 
          alt="MLK Avatar" 
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px' }} 
        />
      )}
    </div>
  );
};

export default Message;
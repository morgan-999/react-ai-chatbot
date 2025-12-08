import React from 'react';

const Helppage = () => {
  return (
    <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
      <h1>Help & Support</h1>
      
      {/* Getting Started */}
      <div style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <h2>Getting Started</h2>
        <p>Learn how to use the chatbot, start a conversation, and get the best responses.</p>
      </div>

      {/* How the Chatbot Works */}
      <div style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <h2>How the Chatbot Works</h2>
        <p>This chatbot uses AI to generate responses based on your input. It does not store personal data.</p>
      </div>

      {/* FAQs */}
      <div style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <h2>FAQs</h2>
        <p>Find answers to common questions and troubleshooting tips.</p>
      </div>

      {/* Contact Support */}
      <div style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <h2>Contact Support</h2>
        <p>If you need help, contact us via email or report an issue.</p>
      </div>

      <h1>Settings</h1>

      {/* Accessibility Settings */}
      <div style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <h2>Accessibility Settings</h2>
        <p>Adjust text size, colours, and keyboard options to suit your needs.</p>
      </div>

      {/* Privacy & Data */}
      <div style={{ 
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        marginBottom: '20px'
      }}>
        <h2>Privacy & Data</h2>
        <p>We respect your privacy. Messages are not saved and no personal data is stored.</p>
      </div>
      
    </div>
  );
};

export default Helppage;
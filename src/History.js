import React, { useState } from 'react';

const History = ({ historyData }) => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h1>Chat History</h1>
      {historyData.length === 0 ? <p>No history yet.</p> : (
        historyData.map((session, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <div style={{
            background: '#37404a',
            borderRadius: openCardIndex === index ? '10px 10px 0 0' : '10px',
            padding: '15px',
            cursor: 'pointer',
            fontWeight: 'bold',
            border: '1px solid rgba(255,255,255,0.1)'
          }} 
          onClick={() => setOpenCardIndex(openCardIndex === index ? null : index)}>
            session {index + 1}: {session.date} </div>
            
            {/* Dropdown Menu Content */}
            {openCardIndex === index && (
              <div style={{
                padding: '15px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '0 0 10px 10px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: 'none'
                }}>
                {session.messages.map((msg, i) => (
                  <p key={i}><strong>{msg.side === 'left' ? 'You' : 'MLK'}:</strong> {msg.text}</p>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default History;
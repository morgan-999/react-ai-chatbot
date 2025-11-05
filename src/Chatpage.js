import React, { useState } from 'react';

const Chatpage = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('Ask me anything!');

  const handleSend = () => {
    // 1. **Capture User Input**
    const userMessage = input;

    // 2. **Think about the answer** (Simulated logic for now)
    let botResponse = '';
    if (userMessage.toLowerCase().includes('hello')) {
      botResponse = 'Hello there! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('react')) {
      botResponse = 'React is a popular JavaScript library for building user interfaces.';
    } else {
      botResponse = `Thanks for asking about: "${userMessage}". I am an AI, and this is my simulated response.`;
    }

    // 3. **Give a response**
    setResponse(botResponse);
    setInput(''); // Clear input field
  };

  return (
    <div>
      <h1>Chat 2 MLK</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px', marginBottom: '10px' }}>
        <p>MLK: {response}</p>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={handleSend} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default Chatpage;
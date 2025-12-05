import React, { useState } from 'react';
import Message from './Message'; // Import the new Message component

const Chatpage = () => {
  const [input, setInput] = useState('');
  // Change state to an array to hold all messages
  const [messages, setMessages] = useState([
    { text: 'Hello! I am ready to discuss any topic. Ask me anything!', side: 'right' }
  ]);

// New state: typing indicator
const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return; // Don't send empty messages

    const userMessageText = input;
    
    // 1. Add user message to the chat
    const newUserMessage = { text: userMessageText, side: 'left' };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInput(''); // Clear input field

// set the typing indicator on
    setIsTyping(true);
    setTimeout(async() => {


    /// 2. Simulate AI thinking and response
let botResponseText = '';
const userMessageLower = userMessageText.toLowerCase();

    
    // 3. Add bot message after a short delay (for effect)
     botResponseText = await sendMessageToBackend(userMessageText);
    const newBotMessage = { text: botResponseText, side: 'right' };
    
    // Update the message array with both messages
    setMessages(prevMessages => [...prevMessages, newBotMessage]);

    // turn the indicator off
    setIsTyping(false);

  }, 2000); //2000 millisecs aka 2seconds
    setInput(''); // Clear input field
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: 'calc(100vh - 80px)', // Adjust height to account for header/footer
      padding: '20px'
    }}>
      
      {/* Chat Messages Display Area */}
      <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          // Use the Message component to render each message
          <Message key={index} text={msg.text} side={msg.side} />
        ))}

        {/*new display indicator*/}
        {isTyping && (
          <Message
          //The three dots (...)
          text="• • •"
          side="right"
          />
        )}

      </div>
      
      {/* Input Bar (Styled to look like your image) */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '10px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
        borderRadius: '25px', 
        border: '1px solid #ccc'
      }}>
        
      {/* Plus Button */}
      <button 
          type="button"
          aria-label="Upload attachment"
          style={{ fontSize: '24px', marginRight: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          +
        </button>
        
        {/* Text Input */}
        <input
          id="message-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
          placeholder="Type a message to Martin Luther King..."
          aria-label="Message input"
          style={{ flexGrow: 1, border: 'none', padding: '10px 0', outline: 'none', backgroundColor: 'transparent' }}
        />
        
        {/* Send Button */}
        <button 
          type="button"
          onClick={handleSend}
          aria-label="Send message"
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px' }}
        >
          <span style={{ fontSize: '24px' }}>&#x27A4;</span> {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default Chatpage;


// connection to backend 29/11/25
async function sendMessageToBackend(userMessageText){
    try {
      const response = await fetch("http://localhost:4000/api/message",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({text: userMessageText})
      });

      const data = await response.json();
      return data.message;
    } catch (error) {
        console.error("Backend error:", error);
        return "Sorry, I do not understand and cannot respond right now.";
    }
    }







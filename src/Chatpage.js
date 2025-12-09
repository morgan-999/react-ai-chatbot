import React, { useState, useEffect, useRef } from 'react';
import Message from './Message'; // Import the new Message component

const Chatpage = ({ onSave }) => {
  const [input, setInput] = useState('');
  // Change state to an array to hold all messages
  const [messages, setMessages] = useState([
    { text: 'Hello! I am ready to discuss any topic. Ask me anything!', side: 'right' }
  ]);

// New state: typing indicator
const [isTyping, setIsTyping] = useState(false);
const [isOnline, setIsOnline] = useState(true);

const messagesEndRef = useRef(null);

const scrollToBottom = () => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth"});
};

useEffect(() => {
  scrollToBottom();
}, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return; // Don't send empty messages

    const now = new Date();
    const timestamp = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    const userMessageText = input;

    const newUserMessage = {
      text: userMessageText,
      side: 'left',
      time: timestamp
    };

    // 1. Add user message to the chat
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInput(''); // Clear input field
    setIsTyping(true);

    const calculateDelay = () => {
      const baseDelay = 1500;
      const extraDelay = userMessageText.length * 50;
      return Math.min(Math.max(baseDelay + extraDelay, 1500), 5000);
    };

    const dynamicDelay = calculateDelay();

    setTimeout(async() => {

    // 3. Add bot message after a short delay (for effect)
     const botResponseText = await sendMessageToBackend(userMessageText, setIsOnline);
     const botNow = new Date();
     const botTimestamp = botNow.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
     });
    const newBotMessage = { 
      text: botResponseText, 
      side: 'right',
      time: botTimestamp
     };
    
    // Update the message array with both messages
    setMessages(prevMessages => [...prevMessages, newBotMessage]);
    setIsTyping(false);
  }, dynamicDelay);
  };

  const handleSaveClick = () => {
    if (messages.length > 1) { 
      onSave(messages);
    } else {
      alert("Nothing to save yet!");
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: 'calc(100vh - 80px)', // Adjust height to account for header/footer
      padding: '20px'
    }}>
      
      {/* Chat Messages Display Area */}
      <div style={{ flexGrow: 1, marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          // Use the Message component to render each message
          <Message
          key={index}
          text={msg.text}
          side={msg.side}
          time={msg.time}
          isOnline={isOnline}
          />
        ))}

        {/*new display indicator*/}
        {isTyping && (
          <Message
          text={
            <span>
            MLK is thinking
            <span className="ripple-dot">•</span>
            <span className="ripple-dot">•</span>
            <span className="ripple-dot">•</span>
            </span>
          }
          side="right"
          isOnline={isOnline}
          />
        )}
        <div ref={messagesEndRef}/>

      </div>

      <button 
        onClick={handleSaveClick}
        style={{
          alignSelf: 'center',
          position: 'sticky',
          marginTop: '15px',
          padding: '8px 20px',
          borderRadius: '20px',
          backgroundColor: '#37404a',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Save Chat
      </button>
      
      {/* Input Bar (Styled to look like your image) */}
      <div style={{ 
        position: 'sticky',
        bottom: '20px',
        display: 'flex', 
        alignItems: 'center', 
        padding: '10px', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
        borderRadius: '25px', 
        border: '1px solid #ccc',
        zIndex: 10
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
async function sendMessageToBackend(userMessageText, setIsOnline){
    try {
      const response = await fetch("http://localhost:4000/api/message",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({text: userMessageText})
      });

      if (!response.ok) { setIsOnline(false); throw new Error('Backend responded with a bad status.');}
      setIsOnline(true);

      const data = await response.json();
      return data.message;
    } catch (error) {
        console.error("Backend error:", error);
        setIsOnline(false);
        return "I'm sorry, I have gone down, come back at a later time.";
    }
  }

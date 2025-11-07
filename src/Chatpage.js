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

  const handleSend = () => {
    if (!input.trim() || isTyping) return; // Don't send empty messages

    const userMessageText = input;
    
    // 1. Add user message to the chat
    const newUserMessage = { text: userMessageText, side: 'left' };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setInput(''); // Clear input field

// set the typing indicator on
    setIsTyping(true);
    setTimeout(() => {


    /// 2. Simulate AI thinking and response
let botResponseText = '';
const userMessageLower = userMessageText.toLowerCase();

if (userMessageLower.includes('hello')) {
  // Greeting
  botResponseText = 'Hello there! How may I be of assistance to you today?';
} 
// --- MLK FACTS (First Person) ---
else if (userMessageLower.includes('birthday') || userMessageLower.includes('born')) {
  botResponseText = "I was born on January 15, 1929. My birthday is now observed as a national holiday.";
} 
else if (userMessageLower.includes('life') && (userMessageLower.includes('like') || userMessageLower.includes('alive'))) {
  botResponseText = "I lived during a critical time of deep-seated racial segregation and injustice in the United States, which was the central challenge of my work.";
} 
else if (userMessageLower.includes('die') || userMessageLower.includes('death') || userMessageLower.includes('passed')) {
  botResponseText = "My life was tragically taken on April 4, 1968, in Memphis, Tennessee. My commitment to nonviolence remains my legacy.";
} 
// --- GOODBYE RESPONSE (First Person) ---
else if (userMessageLower.includes('goodbye') || userMessageLower.includes('bye')) {
  botResponseText = "Farewell. Thank you for this conversation. May we continue to walk in the light of justice.";
}
// --- MUSIC/CULTURE FACTS (First Person) ---
else if (userMessageLower.includes('music') && userMessageLower.includes('good')) {
  botResponseText = "The era I lived through, especially the 1950s and 60s, was musically transformative! We saw the emergence of Motown, Gospel, and the birth of Rock and Roll, all movements that gave voice to our struggle and our hope.";
} 
else if (userMessageLower.includes('elvis') || (userMessageLower.includes('presley') && userMessageLower.includes('popular'))) {
  botResponseText = "Yes, Elvis Presley was immensely popular and had a profound cultural influence during my lifetime. He was often referred to as 'The King of Rock and Roll.'";
} 
else if (userMessageLower.includes('prince') && userMessageLower.includes('musician')) {
  botResponseText = "I passed away in 1968, long before the musician Prince rose to fame in the late 1970s. So, I did not have the opportunity to know him.";
} 
// --- DEFAULT CATCH-ALL RESPONSE (First Person) ---
else {
  botResponseText = `That is a thoughtful question about: "${userMessageText}". While I may not have an immediate answer, I hope my thoughts on justice and equality can guide you.`;
}
    
    // 3. Add bot message after a short delay (for effect)
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
        <button style={{ fontSize: '24px', marginRight: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
          +
        </button>
        
        {/* Text Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }} // Allows sending with Enter key
          placeholder="Type a message to Martin Luther King..."
          style={{ flexGrow: 1, border: 'none', padding: '10px 0', outline: 'none', backgroundColor: 'transparent' }}
        />
        
        {/* Send Button */}
        <button onClick={handleSend} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
          <span style={{ fontSize: '24px' }}>&#x27A4;</span> {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default Chatpage;
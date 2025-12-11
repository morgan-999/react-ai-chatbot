import React, { useState, useEffect } from 'react';

const Helppage = () => {
  const [openCards, setOpenCards] = useState({
    accessibility: false,
    privacy: false,
    gettingStarted: false,
    howItWorks: false,
    faqs: false,
    contact: false
  });

  const [issueReport, setIssueReport] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  
  // Text size state with localStorage
  const [textSize, setTextSize] = useState(() => {
    return localStorage.getItem('chatTextSize') || 'medium';
  });

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chatTextSize', textSize);
  }, [textSize]);

  const toggleCard = (cardName) => {
    setOpenCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

  const handleReportSubmit = async () => {
    if (!issueReport.trim()) {
      alert('Please describe the issue before submitting.');
      return;
    }

    console.log('Issue reported:', issueReport);
    
    setReportSubmitted(true);
    setIssueReport('');
    
    setTimeout(() => setReportSubmitted(false), 3000);
  };

  return (

    <div style={{ color: 'white', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Settings</h1>

      {/* Accessibility Settings */}
      <div 
        style={{ 
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          marginBottom: '20px',
          transition: 'background-color 0.2s ease'
        }}
      >
        <div 
          onClick={() => toggleCard('accessibility')}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        >
          <h2 style={{ margin: '0' }}>Accessibility Settings</h2>
          <span style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            transform: openCards.accessibility ? 'rotate(90deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>
            ›
          </span>
        </div>
        
        <div style={{
          maxHeight: openCards.accessibility ? '400px' : '0',
          opacity: openCards.accessibility ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.4s ease'
        }}>
          <div style={{ marginTop: '20px', textAlign: 'left' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: '0', marginBottom: '8px', fontSize: '16px' }}>Chat Text Size</h3>
            <p style={{ marginTop: '0', marginBottom: '12px', color: 'rgba(255, 255, 255, 0.9)', fontSize: '14px' }}>
              Adjust the size of text in chat messages to improve readability.
            </p>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button
                type="button"
                onClick={() => setTextSize('small')}
                aria-label="Set text size to small"
                style={{
                  padding: '10px 20px',
                  backgroundColor: textSize === 'small' ? '#61dafb' : 'rgba(255, 255, 255, 0.1)',
                  color: textSize === 'small' ? '#000' : 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: textSize === 'small' ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Small
              </button>
              
              <button
                type="button"
                onClick={() => setTextSize('medium')}
                aria-label="Set text size to medium"
                style={{
                  padding: '10px 20px',
                  backgroundColor: textSize === 'medium' ? '#61dafb' : 'rgba(255, 255, 255, 0.1)',
                  color: textSize === 'medium' ? '#000' : 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: textSize === 'medium' ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Medium
              </button>
              
              <button
                type="button"
                onClick={() => setTextSize('large')}
                aria-label="Set text size to large"
                style={{
                  padding: '10px 20px',
                  backgroundColor: textSize === 'large' ? '#61dafb' : 'rgba(255, 255, 255, 0.1)',
                  color: textSize === 'large' ? '#000' : 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: textSize === 'large' ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Large
              </button>
            </div>
            
            <p style={{ marginTop: '15px', marginBottom: '0', color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', fontStyle: 'italic' }}>
              Current selection: <strong>{textSize.charAt(0).toUpperCase() + textSize.slice(1)}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Privacy & Data */}
      <div 
        onClick={() => toggleCard('privacy')}
        style={{ 
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          marginBottom: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: '0' }}>Privacy & Data</h2>
          <span style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            transform: openCards.privacy ? 'rotate(90deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>
            ›
          </span>
        </div>
        
        <div style={{
          maxHeight: openCards.privacy ? '500px' : '0',
          opacity: openCards.privacy ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.4s ease'
        }}>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <p style={{ marginTop: '0', marginBottom: '15px' }}>
              We respect your privacy and are committed to protecting your personal information.
            </p>
            
            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>What We Store</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.9)' }}>
              By default, your conversations are not saved on our servers. Messages are processed in real-time and discarded after generating a response.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>Save Chat Feature</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.9)' }}>
              If you choose to save a chat session, the conversation is stored locally on your device only. We do not upload or store saved chats on our servers.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>No Personal Data Collection</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.9)' }}>
              We do not collect, store, or share any personal information such as your name, email, or location.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>Data Security</h3>
            <p style={{ marginTop: '0', marginBottom: '0', color: 'rgba(255, 255, 255, 0.9)' }}>
              Your messages are transmitted securely to our AI server for processing. We use industry-standard security practices to protect your data during transmission.
            </p>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Help & Support</h1>
      
      {/* Getting Started */}
      <div 
        onClick={() => toggleCard('gettingStarted')}
        style={{ 
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          marginBottom: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: '0' }}>Getting Started</h2>
          <span style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            transform: openCards.gettingStarted ? 'rotate(90deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>
            ›
          </span>
        </div>
        
        <div style={{
          maxHeight: openCards.gettingStarted ? '600px' : '0',
          opacity: openCards.gettingStarted ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.4s ease'
        }}>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <p style={{ marginTop: '0', marginBottom: '15px' }}>
              Welcome! Here's how to use the MLK Chatbot:
            </p>
            
            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>Starting a Conversation</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.9)' }}>
              Click the MLK logo on the homepage or the "Chat" button in the top navigation bar to open the chat page.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>Sending Messages</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.9)' }}>
              Type your question in the input box at the bottom and press Enter or click the arrow button (→) to send.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>What to Ask</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.9)' }}>
              Ask about Dr. King's life, philosophy, the Civil Rights Movement, or discuss justice and equality.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px', fontSize: '16px' }}>Navigation</h3>
            <p style={{ marginTop: '0', marginBottom: '0', color: 'rgba(255, 255, 255, 0.9)' }}>
              Use the menu at the top to move between Home, Chat, and Help pages.
            </p>
          </div>
        </div>
      </div>

      {/* How the Chatbot Works */}
      <div 
        onClick={() => toggleCard('howItWorks')}
        style={{ 
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          marginBottom: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: '0' }}>How the Chatbot Works</h2>
          <span style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            transform: openCards.howItWorks ? 'rotate(90deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>
            ›
          </span>
        </div>
        
        <div style={{
          maxHeight: openCards.howItWorks ? '300px' : '0',
          opacity: openCards.howItWorks ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.4s ease'
        }}>
          <p style={{ 
            marginTop: '15px', 
            marginBottom: '0'
          }}>
            This chatbot uses AI technology to simulate conversations in the style of Dr. Martin Luther King Jr. Your messages are sent to our server, where AI generates responses based on Dr. King's historical teachings and philosophy. This is an educational tool designed to help you learn about his life, work, and message of equality and justice.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div 
        onClick={() => toggleCard('faqs')}
        style={{ 
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          marginBottom: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: '0' }}>FAQs</h2>
          <span style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            transform: openCards.faqs ? 'rotate(90deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>
            ›
          </span>
        </div>
        
        <div style={{
          maxHeight: openCards.faqs ? '1000px' : '0',
          opacity: openCards.faqs ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.4s ease'
        }}>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            
            <h3 style={{ marginTop: '15px', marginBottom: '8px' }}>Is this the real Martin Luther King Jr.?</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>
              No, this is an AI chatbot designed to simulate conversations in the style of Dr. Martin Luther King Jr. It uses artificial intelligence to generate responses based on his philosophy and teachings.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px' }}>What can I ask the chatbot?</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>
              You can ask about Dr. King's life, his work in the Civil Rights Movement, his philosophy of nonviolence, and topics related to justice and equality. The chatbot is designed to respond thoughtfully to a wide range of questions.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px' }}>Does the chatbot save my messages?</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>
              No, your conversations are not saved or stored. Your privacy is important to us, and no personal data is collected from your interactions.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px' }}>Why doesn't the chatbot know about recent events?</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>
              The chatbot is designed to reflect Dr. King's perspective and knowledge from his lifetime (1929-1968). It may not have information about events that occurred after his passing.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px' }}>Can I use this chatbot for my school project?</h3>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>
              Yes! This chatbot can be a helpful educational tool. However, please remember it's an AI simulation and should be used alongside other reliable sources for academic work.
            </p>

            <h3 style={{ marginTop: '15px', marginBottom: '8px' }}>The chatbot gave me an unexpected response. What should I do?</h3>
            <p style={{ marginTop: '0', marginBottom: '0', color: 'rgba(255, 255, 255, 0.85)' }}>
              AI chatbots are still learning and may occasionally provide responses that don't fully align with expectations. If you encounter an issue, please use the Contact Support section to report it.
            </p>

          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div 
        style={{ 
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          marginBottom: '20px',
          transition: 'background-color 0.2s ease'
        }}
      >
        <div 
          onClick={() => toggleCard('contact')}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        >
          <h2 style={{ margin: '0' }}>Report an Issue</h2>
          <span style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            transform: openCards.contact ? 'rotate(90deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>
            ›
          </span>
        </div>
        
        <div style={{
          maxHeight: openCards.contact ? '500px' : '0',
          opacity: openCards.contact ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.4s ease'
        }}>
          <div style={{ marginTop: '20px', textAlign: 'left' }} onClick={(e) => e.stopPropagation()}>
            <p style={{ marginTop: '0', marginBottom: '15px', color: 'white' }}>
              Encountered a problem? Let us know and we'll work to fix it!
            </p>
            
            {reportSubmitted ? (
              <div style={{ 
                padding: '15px', 
                backgroundColor: 'rgba(76, 175, 80, 0.2)', 
                borderRadius: '8px',
                border: '1px solid rgba(76, 175, 80, 0.5)'
              }}>
                <p style={{ margin: '0', color: '#90EE90', fontWeight: 'bold' }}>
                  Thank you! Your issue has been reported successfully.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ marginTop: '15px', marginBottom: '8px', color: 'white' }}>Describe the Issue</h3>
                <textarea
                  className="issue-textarea"
                  value={issueReport}
                  onChange={(e) => setIssueReport(e.target.value)}
                  placeholder="Please describe what went wrong, what you were trying to do, and any error messages you saw..."
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    marginBottom: '15px',
                    boxSizing: 'border-box'
                  }}
                />
                
                <button
                  type="button"
                  onClick={handleReportSubmit}
                  aria-label="Submit issue report"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#61dafb',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#21a1c4'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#61dafb'}
                >
                  Submit Report
                </button>
              </>
            )}
            
            <h3 style={{ marginTop: '25px', marginBottom: '8px', color: 'white' }}>Or Email Us</h3>
            <p style={{ marginTop: '0', marginBottom: '0', color: 'white' }}>
              Prefer email? Contact us at{' '}
              <a 
                href="mailto:mlkchatbot@gmail.com" 
                style={{ 
                  color: '#61dafb', 
                  textDecoration: 'none',
                  borderBottom: '1px solid #61dafb'
                }}
                onMouseEnter={(e) => e.target.style.color = '#21a1c4'}
                onMouseLeave={(e) => e.target.style.color = '#61dafb'}
              >
                mlkchatbot@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Helppage;
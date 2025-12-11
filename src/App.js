import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css'; 
import Homepage from './Homepage'; 
import Chatpage from './Chatpage';
import Helppage from './Helppage'; 
import History from './History';
import Header from './Header';
import MLKLogo from './MLK - Logo.png';
import OfflineMLK from './Offline - MLK.png';

export default function App() {

const [historyData, setHistoryData] = useState([]);
const [logoPath, setLogoPath] = useState(MLKLogo);

const saveSession = (currentMessages) => {
  const newSession = {
    date: new Date().toLocaleString(),
    messages: currentMessages
  };

  setHistoryData(prev => [...prev, newSession]);
  alert("Chat Saved");
};

const checkInitialConnection = async() => {
  try { 
    const response = await fetch("http://localhost:4000/api/status");
    if (response.ok) { 
      setLogoPath(MLKLogo);
    } else {
      setLogoPath(OfflineMLK);
    }
  } catch (error) { 
    setLogoPath(OfflineMLK);
  }
};

useEffect(() => { 
  checkInitialConnection();
}, []);

  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      
      <main id="main-content" className="app-content" style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Homepage MLKLogo={logoPath} />} />
          <Route path="/chat" element={<Chatpage onSave={saveSession}/>} />
          <Route path="/help" element={<Helppage />} /> 
          <Route path="/history" element={<History historyData={historyData} />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
};
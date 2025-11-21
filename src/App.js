import React from 'react';
// 1. Import Router components
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css'; // Assuming you still need CSS

// 2. Import Page Components (ensure these files exist and export these names)
import Homepage from './Homepage'; 
import Chatpage from './Chatpage';
// Ensure you create this file: src/Helppage.js
import Helppage from './Helppage'; 
import Header from './Header';




// Main application component
export default function App() {
  // All logic (like the button handlers) should be removed if they are not used.
  // We only need one return statement for the entire app structure.
  
  return (
    // 1. Router wraps the entire application
    <Router>
      {/* 2. Header (with Home Button) is outside Routes, so it is persistent */}
      <Header />
      
      <div className="app-content" style={{ padding: '20px' }}>
        {/* 3. Routes defines the page content based on the URL */}
        <Routes>
          {/* Route for the Home Page (Path: /) */}
          <Route path="/" element={<Homepage />} />
          
          {/* Route for the Chat Page (Path: /chat) */}
          <Route path="/chat" element={<Chatpage />} />
          
          {/* Route for the Help Page (Path: /help) */}
          {/* Note: The link uses /help, the route must match */}
          <Route path="/help" element={<Helppage />} /> 
          
          {/* Optional: Add a 404/Not Found route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};
  
  
  
import logo from './logo.svg';
import './App.css';

// 1. IMPORT ALL NECESSARY COMPONENTS

import Homebutton from "./Homebutton"; 
import Chatbutton from "./Chatbutton";
import Helpbutton from "./Helpbutton"; 

// 2. DEFINE THE SINGLE APP COMPONENT
export default function App() {
    // Handler functions for all buttons
    function handleHomeClick() {
        alert("Welcome to the homepage");
    }

    function handleChatClick() {
        alert("Welcome to the chat page");
    }

    function handleHelpClick() {
        alert("Welcome to the help page"); 
    }

    // Combine all JSX into one return statement
    return (
        <div className="App">
            
            {/* --- HOME BUTTON/PAGE SECTION --- */}
            <div> 
                <h1> Speak 2 MLK</h1>
                <Homebutton
                    classname="HOME"
                    text="HOME"
                    onclick={handleHomeClick}
                />
            </div>
            
            {/* --- CHAT BUTTON/PAGE SECTION --- */}
            <div>
                <h1>How can I help you today</h1>
                <Chatbutton
                    classname="CHAT"
                    text="CHAT"
                    onclick={handleChatClick}
                />
            </div>
            
            {/* --- HELP BUTTON/PAGE SECTION --- */}
            <div>
                <h1>Below you can find some useful information that could help with your chating experience</h1>
                <Helpbutton
                    classname="HELP"
                    text="HELP"
                    onclick={handleHelpClick}
                />
            </div>

            {/* --- Original React Logo Section (Optional) --- */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* ... other standard React content ... */}
            </header>

        </div>
    );
}

// All other duplicate function App() definitions and const test have been removed.
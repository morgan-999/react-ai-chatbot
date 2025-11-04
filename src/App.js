import logo from './logo.svg';
import './App.css';
import homebutton from "./homepage.js"

import helpbutton from "./helppage.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const test = "Test";

//home button


import homebutton from "./homepage.js"

export default function App() {
    function handelclick(){
        alert("Welcome to the homepage");
    }

    return (
        <div> 
            <h1> Speak 2 MLK</h1>
            <homebutton
            classname="HOME"
            text="HOME"
            onclick={handelclick}
                />
            
        </div>
    );
}

//chat button

import Chatbutton from "./chatpage.js";

export default function App() {
    function handelclick() {
        alert("Welcome to the chat page");
    }

    return (
        <div>
            <h1>How can I help you today</h1>
            <Chatbutton
            classname="CHAT"
            text="CHAT"
            onclick={handelclick}
            />
        </div>
    )
}


// help button

import helpbutton from "./helppage.js";

export default function App() {
    function handelclick() {
        alert("Welcom tot the help page");
    }

    return (
        <div>
            <h1>Below you can find some useful information that could help with your chating experience</h1>
            <helpbutton
            classname="HELP"
            text="HELP"
            onclick={handelclick}
            />
        </div>
    )
}
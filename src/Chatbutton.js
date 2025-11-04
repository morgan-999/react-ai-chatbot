export default function Chatbutton({classname, text, onclick}) {
    return ( <Chatbutton classname={classname} onclick={onclick}>
        {text}
        </Chatbutton>
    );
    }

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

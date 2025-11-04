export default function helpbutton({classname, text, onclick}) {
    return ( <helpbutton classname={classname} onclick={onclick}>
        {text}
        </helpbutton>
    );
    }

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
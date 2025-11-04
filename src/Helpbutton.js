export default function Helpbutton({classname, text, onclick}) {
    return ( <Helpbutton classname={classname} onclick={onclick}>
        {text}
        </Helpbutton>
    );
    }

/*import helpbutton from "./helppage.js";

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
}*/
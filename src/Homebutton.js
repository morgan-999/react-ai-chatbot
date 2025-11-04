export default function Homebutton({classname, text, onclick}) {
    return ( <Homebutton classname={classname} onclick={onclick}>
        {text}
        </Homebutton>
    );
    }
    
    /*import homebutton from "./homepage.js"

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
      */ 
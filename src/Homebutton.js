export default function homebutton({classname, text, onclick}) {
    return ( <homebutton classname={classname} onclick={onclick}>
        {text}
        </homebutton>
    );
    }
    
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
       
import react, { useReducer, useState } from "react";

const reducer = (state,action) =>{
    switch (action.type) {
        case "INCREMENT":
            return 
            break;
    
        default:
            break;
    }
}
const App = (props) => {
    // const [counter,setcounter] = useState(0)
    // const [showText,setshowText] = useState(true)
    const [state,dispatch] = useReducer(reducer,{counter:0,showText:true})
    const  hello = () =>{
        setcounter(counter+1)
        setshowText(!showText)
    }
    return (
        <>
            {counter}
            <button onClick={hello}>Click</button>
            <p>
                {showText ? 'this is text' : ""}
            </p>
        </>
    )
}
export default App
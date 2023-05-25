import React, { useState } from 'react';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css'


function App(props) {
    const [counter , setCounter] = useState(0)
    return (
        // <div>
        //     <Card/>   
        // </div>
        <div>
            <p>
                {counter}
            </p>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Couter</button>
        </div>
    );
}

export default App;
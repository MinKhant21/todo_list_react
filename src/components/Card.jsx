import React, { useRef, useState } from 'react';


function Card(props) {

    const [todo,settodo] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    const ref = useRef(0);
    const HandleClick = (e) => {
            e.preventDefault();
            ref.current = ref.current + 1
            alert(`${ref.current} times`)
        }
    const handleStart = () => {
        setStartTime(Date.now());
    setNow(Date.now());
        // console.log(now)
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
        setNow(Date.now());
        }, 10);
    }
    const handleStop = () => {
        clearInterval(intervalRef.current)
    }
    let timerHandle = 0 ;
    if(startTime != null && now != null  ) {
        timerHandle = (now - startTime )/1000;
    }
    return (
        <div className='bg-white container p-md-5'>
            
            <div className="row">
                <div className="col"><h2>Todo List</h2></div>
                <div className="col">
                   <div className='row'>
                        <div className="col">Timer : {timerHandle.toFixed(3)} </div>
                        <div className="col">
                            <button className='btn btn-sm btn-primary p-2' style={{ marginRight:"10px" }} onClick={handleStart}>Start</button>
                            <button className='btn btn-sm btn-danger p-2' onClick={handleStop}>Stop</button>
                        </div>
                   </div>
                </div>
            </div>
            <form className='form-group'>
                <div className='form-group d-flex '>
                    <input className='form-control' value={todo} onChange={e=>settodo(e.target.value)}  />
                    <input type="submit" className='form-control' onClick={HandleClick} style={{ width:"200px" }} />
                </div>
            </form>
            <h3>{todo}</h3>
           
        </div>
    );
}

export default Card;
import React, { useRef, useState } from 'react';


function Card(props) {
   const [todo,settodo] = useState("");
    const ref = useRef(0);
   const HandleClick = (e) => {
            e.preventDefault();
            ref.current = ref.current + 1
            alert(`${ref.current} times`)
        }
    return (
        <div className='bg-white container p-md-5'>
            
            <h2>Todo List</h2>
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
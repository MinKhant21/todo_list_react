import React, { useState } from 'react';

function Card(props) {
    const [selectedForm , setSelecte] = useState();
    let HandleClick = (event) => {
        setSelecte(event.target.value)
        console.log(setSelecte)
    }
    let HandleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='bg-white container p-md-5'>
            <h2>Todo List</h2>
            <form onClick={HandleSubmit} className='form-group'>
                <div className='form-group d-flex '>
                    <input type="text" className='form-control' value={selectedForm} onChange={HandleClick} />
                    <input type="submit" className='form-control' style={{ width:"200px" }} />
                </div>
            </form>
           
        </div>
    );
}

export default Card;
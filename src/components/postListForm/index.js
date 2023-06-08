import React, { useState } from 'react';
import './index.css';
function PostListForm(props) {
    let [title , settitle] = useState("");
  
    return (
        <div className='form-group'>
            <div className='form-control'>
                <label for="">Title</label>
                <input type="text" onChange={(e)=>settitle(e.target.value)}/>
            </div>
            <p>{title}</p>
            <div className='form-control'>
                <button >Post Now</button>
            </div>
        </div>
    );
}

export default PostListForm;
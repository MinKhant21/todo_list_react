import React from "react";
import './index.css';
function Nav({setshwoModal}){
    return(
        <nav>
        <div className="container">
          <h1>logo</h1>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li onClick={()=>setshwoModal(preState=>!preState)}>Sign in</li>
          </ul>
        </div>
      </nav>
  
    )
}

export default Nav;
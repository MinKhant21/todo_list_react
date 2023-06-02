import React from 'react';
import { useState } from 'react';

function App(props) {
    let [posts,setposts] = useState([
        {id:1,name:'kmk'},
        {id:2,name:'min'},
        {id:3,name:'Khant'}
    ]);
    let DeletePost = (id) => {
      setposts((prevState)=>
        prevState.filter(post=>post.id != id)
      )
    }
    return (
        <div>
            <ul>
              {!! posts.length &&
                posts.map(post=>
                    <li key={post.id}>{post.name} <button onClick={()=>DeletePost(post.id)}>Delete</button></li>
                   ) 
              }  

             
              {!posts.length && 'Not Have Post'}
            </ul>
        </div>
    );
}

export default App;
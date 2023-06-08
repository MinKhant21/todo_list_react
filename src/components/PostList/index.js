import React, { useEffect, useState } from "react";
import './index.css';

function PostList(){
    let [posts , setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/trips')
        .then(res => res.json())
        .then(data=>setPosts(data))
        .then(e=>e)
    },[])
   console.log(posts)
    return(
        <>
            <div className="postList container">
               {
                posts.map(post=>{
                    // <div className="single-post" key={post.id}>
                    //     <span>Title : {post.name}</span>
                    //     <p><span>Price : {post.price}</span></p>
                    // </div>
                    <p>{post.name}</p>
                })
               }
               { <p>hello</p> }
               
            </div>
        </>
    )
}

export default PostList
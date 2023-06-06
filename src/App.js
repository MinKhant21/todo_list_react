import React from 'react';
import { useState } from 'react';
import Nav from './components/Nav/index';
import PostList from './components/PostList/index';
import  Modal  from './components/Modal/index';
import  postListForm  from './components/postListForm/index';
import PostListForm from './components/postListForm/index';

function App(props) {
    let [posts,setposts] = useState([
        {id:1,name:'kmk'},
        {id:2,name:'min'},
        {id:3,name:'Khant'}
    ]);
   
    let [showModal , setshwoModal] = useState(false)
    return (
       <>
        <Nav setshwoModal={setshwoModal}/>
        <PostList/>
        {
            showModal && <Modal setshwoModal={setshwoModal} showModal={showModal}>
              <PostListForm/>
            </Modal>
        }
       </>
    );
}

export default App;
import React from 'react';
import { useState } from 'react';
import Nav from './components/Nav/index';
import PostList from './components/PostList/index';
import  Modal  from './components/Modal/index';
import PostListForm from './components/postListForm/index';

function App(props) {
   
  
   
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
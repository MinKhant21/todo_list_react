import React from 'react';
import { useState } from 'react';
import Nav from './components/Nav/index';
import PostList from './components/PostList/index';
import  Modal  from './components/Modal/index';

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
            showModal && <Modal>
            <h1>Modal Components</h1>
            <p>
            Why we have to use cron job? and what is benefit to use cron jobs in laravel 8 and how to setup cron job in laravel 8?, If you have this question then i will explain why. Many times we need to send notifications or send email automatically to users for update property or products. So at that time you can define some basic logic for each days, hours etc can run and send email notification.
            </p>
        </Modal>
        }
       </>
    );
}

export default App;
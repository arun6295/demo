import logo from './logo.svg';
import './App.css';
import blogs from './components/blogs/Blogs';
import Blogs from './components/blogs/Blogs';
import Header from './components/header';
import AddBlogs from './components/blogs/AddBlogs';
import {signIn,signOut} from './components/authentication';
//import{signOut} from './components/authentication';
import {useState} from 'react';
//import {Link,Switch,BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {reducer} from './reducer.js';


function App() {
  //let userBySignIn;

  //setting a state in a function // react hook
 
 /*const [user,setUser] =useState();
 const [loginInfo,setInfo] =useState(0);
  
 

  const signInBtnClick=async()=>
  {
    let usr=await signIn();
    console.log("await:"+usr);
    setUser({user:usr});
    setInfo({loginInfo:1});

    console.log("user is:"+{user});
  }

  const signOutBtnClick =  () => 
  {
    let usr=signOut();
    console.log("before logout")
    console.log(user)
    setInfo({loginInfo:0});
  console.log("after logout")
  console.log(user)
    
  };
  
*/

const store=createStore(reducer);

  return (
    <div>
      <Provider store={store}>
   <Header/>
   </Provider>
   <div>
     <a href="https://www.firebase.com" target="_new">firebase</a> <img src="C:\Users\Administrator\Documents\BACK-END\funbookactivity\download(1).jpg" name="img" alt="image"/>
   </div>

   
   </div>
    );
    
  }
  
 


export default App;

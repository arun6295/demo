import logo from './logo.svg';
import './App.css';
import  NvBar from './components/header';
import Blogs from './components/blogs/Blogs';
import AddBlog from './components/blogs/AddBlog';
import { signIn, signout } from './components/authentication';
import { useState } from 'react';
import {Link,Route, BrowserRouter,Switch  } from "react-router-dom";
function App() {
   const [user,setUser] =useState();
   const [loginInfo,setInfo] =useState(0);
  
  const signOutBtnClick =  () => 
  {
    let usr=signout();
    console.log("before logout")
    console.log(user)
    setInfo({loginInfo:!loginInfo});
  console.log("after logout")
  console.log(user)
    
  };
  
  return (
      
   <NvBar/>
  );
}

export default App;

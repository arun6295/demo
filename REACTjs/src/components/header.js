import React, { Component } from 'react';
import {Link,Route, BrowserRouter,Switch  } from "react-router-dom";
import AddBlog from './blogs/AddBlog';
import Blogs from './blogs/Blogs';
class NvBar extends Component {
    render() {
        return (
          <BrowserRouter>
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a class="navbar-brand" href="#">SocialActivity</a>

  
  <ul class="navbar-nav">
    <li class="nav-item">
      <Link to="/reg" class="nav-link" >Register</Link>
    </li>
    <li class="nav-item">
      <Link  to="/log" class="nav-link" >Login</Link>
    </li>
    <li class="nav-item">
      <Link  to="/addblog" class="nav-link" >addblog</Link>
    </li>
    <li class="nav-item">
      <Link to="/showblog" class="nav-link" >showblogs</Link>
    </li>
    
    
  </ul>
</nav>

  
<div class="container">
  
  
</div>
</div>

      <Switch>
      <Route path="/addblog"  component={AddBlog} />


<Route path="/showblog"  component={Blogs} />
</Switch>




 
</BrowserRouter>


        );
    }
}

export default NvBar;
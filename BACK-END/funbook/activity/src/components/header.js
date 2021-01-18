import React, { Component } from 'react';
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom';
import AddBlogs from './blogs/AddBlogs';
import Blogs from './blogs/Blogs';
import {connect} from 'react-redux';

class Header extends Component {

  Login()
  {
    this.props.dispatch({type:"LoginClick"});
    console.log("logout");
  }

  Logout()
  {
    
    this.props.dispatch({type:"LogoutClick"});
    console.log("logout");

  }
    render() {
      console.log("info:"+this.props.signinInfo);
        return (
          <BrowserRouter>
            <div>
                

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <a class="navbar-brand" href="#">Social Activity</a>

  
  <ul class="navbar-nav">
    <li class="nav-item">
      <Link to="/reg" class="nav-link" >Register</Link>
    </li>
  
   {this.props.signinInfo ?(
   
   <Link class="nav-link" onClick={this.Logout.bind(this)}>Logout</Link>
   ):

   (<Link  class="nav-link"  onClick={this.Login.bind(this)}>Login</Link>)
 
    }
   
   
   
    <li class="nav-item">
      <Link to="/addblog" class="nav-link">addblog</Link>
    </li>
    <li class="nav-item">
      <Link to="/showblog" class="nav-link">showblog</Link>
    </li>

  </ul>
</nav>

    <Switch>
  
   <Route path="/addblog" component={AddBlogs}/>
   <Route path="/showblog" component={Blogs}/>
   </Switch>

</div>

</BrowserRouter>  
           
        );
    }
}

const f1=(state)=>({uName:state.userName,signinInfo:state.loginInfo})
export default connect(f1)(Header);
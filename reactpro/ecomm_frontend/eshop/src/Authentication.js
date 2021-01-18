import React,{Component} from 'react';
import {connect} from 'react-redux';
class Authentication extends React.Component{
  /*  constructor(props)
    {
        super(props)
        this.state={
            loginInfo:true
        };
        
    }*/

    checkLogin()
    {
       
        this.props.dispatch({type:"LoginClick"});
      //  this.setState({loginInfo:!this.state.loginInfo})
    }
    checkLogout()
    {
        this.props.dispatch({type:"LogoutClick"});
      //  this.setState({loginInfo:!this.state.loginInfo})
    }
    render()
    {
        if(this.props.logininfo)
        {
            console.log(this.props.message);
            console.log(this.props.logininfo);
            console.log(this.props.un);
            return(
                <div>
                    <p>{this.props.un}</p>
                    <a name="top"></a>
                    <button type="submit" onClick={this.checkLogin.bind(this)}> CLICK OUT</button>
                    <a href="#top">TOP</a>
                </div>

            );
        }else {
            console.log(this.props.un);
            return(
                
                <div>
                     <a href="https://www.google.com"></a>
                     <p>{this.props.un}</p>
                     <button type="submit" onClick={this.checkLogout.bind(this)}> CLICK IN</button>
                
                     
    
                </div>
            );

        }

      /*  let info;
        if(this.state.loginInfo)
        {

            info=<div> <a href="#">Logout</a></div>
        

        return(
            <div>
            
            <a href="#">Logout</a>

            </div>

        );
        }else{
            info=<div> <a href="#">LogIn</a></div>
            return(
                <div>
                
                <a href="#">LogIn</a>
    
                </div>
            );

        }
        return info;*/
    }
    
}
//connect to redux
const mapStateToProps=(state)=>({message:state.message,logininfo:state.logininfo,un:state.username});
//redux
export default connect(mapStateToProps)(Authentication);
import React, { Component } from 'react';
import { Provider } from "react-redux";
import { connect } from 'react-redux';
import DisplayProducts from './DisplayProducts';
import {reducer} from './reducer';
import {createStore} from 'redux';
const  store = createStore(reducer);
class TestState extends Component {

    

    log_in()
    {
        
        this.props.dispatch({type: "LoginClicked"})
        //console.log(this.props.loginInfo)
    }
    log_out()
    {
        
        //this.props.loginInfo= false;
        //console.log(this.props.loginInfo)
        this.props.dispatch({type: "LogoutClicked"})
    }
    render() {
        console.log("username  = "+this.props.un)
        console.log("login info  = "+this.props.loginInfo)

        if(this.props.loginInfo)
        {
            return (
                <div>
                 <p> Welcome to    {this.props.un} </p>
                 <Provider store= {store}>
                 <DisplayProducts />
                  </Provider> 
                 
                   <button onClick={this.log_out.bind(this)}>Logout</button> 
                </div>
            );
        } else{
            return (
                <div>
                 <p>Hello   {this.props.un} please signin </p>
                   <button onClick={this.log_in.bind(this)}>Login</button> 
                </div>
            );
        }
        
        
    }
}
const f1 = (state) => ({un: state.userName,  loginInfo: state.loginInfo})
export default connect(f1)(TestState);
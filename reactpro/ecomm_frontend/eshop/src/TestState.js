import React, { Component } from 'react';
import {connect} from 'react-redux';
import DisplayProducts from './DisplayProducts';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducer';


const  store = createStore(reducer);

class TestState extends Component {


    log_out()
    {
       // console.log(this.props.logininfo);
        this.props.dispatch({type:"LogoutClick"})

    }

    log_in()
    {
       // console.log(this.props.logininfo);
        //dispatching an action to redux
        this.props.dispatch({type:"LoginClick"})

    }
    render() {
        //console.log(this.props.info);
        console.log("username:"+this.props.un);
        console.log("logininfo:"+this.props.logininfo);
        if(this.props.logininfo)
        {

        return (
            
            <div>
                <a href="#down">DOWN</a>
                <a name="top"></a>
                <p>welcome to {this.props.un}</p>
                <Provider store={store}>
                <DisplayProducts/>

                </Provider>
                
                
             
                <button onClick={this.log_out.bind(this)}>Logout</button>
                <a name="down"/>
                <a href="#top">TOP</a>

            </div>
        );
        }else{
            return (
            
                <div>
                   <p>sign in {this.props.un}</p> 
                    <button onClick={this.log_in.bind(this)}>Login</button>
                </div>
            );
        }

    }
}

const f1=(state)=>({info:state.message,un:state.username,logininfo:state.logininfo})
export default connect(f1)(TestState);
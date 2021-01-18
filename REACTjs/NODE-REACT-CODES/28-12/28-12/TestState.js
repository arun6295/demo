import React, { Component } from 'react';
import { connect } from 'react-redux';
class TestState extends Component {
    render() {
        console.log(this.props.un)
        
        
        return (
            <div>
                
            </div>
        );
    }
}
const f1 = (state) => ({un: state.userName})
export default connect(f1)(TestState);
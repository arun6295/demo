import React,{Component} from 'react';
import TableChild from './TableChild';
class Table extends React.Component
{
    constructor(props){  //initialization phase of component life cycle
        console.log("Table cons executing");
        super(props);
        this.state={
            num:this.props.tableNum,
        };
        
    }
    dosqr()
    {
        console.log(this);
        this.setState(
            {
                num:this.state.num*this.state.num
            }
        )
    }
    //used to control dom updation
    static getDerivedStateFromProps(props,state)
    {
        console.log("Table getderivedstate from props executing");
        if(state.num>1000){
        //here state reintializing with parent props value
        state.num=props.tableNum;
        return state.num;
    }
    else{
        return null;
    }
}
componentDidMount()    //component did mounting completed
{
    console.log("table did mount");
}
componentDidUpdate(p,s)
{
    console.log("props value"+p.tableNum+ 'prev state value'+s.num);
}
    render(){     
        console.log("table rendor executing");     //mounting ->pageloading
        return(
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.dosqr.bind(this)}>GetSquare</button>
                <TableChild x={this.state.num}/>
            </div>
            
        );
    }
}
export default Table;
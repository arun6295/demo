import React,{Component} from 'react';
class TableChild extends React.Component
{
    constructor()
    {
        super();
    }
   
   
    //used to control dom updation
    static getDerivedStateFromProps(props,state)
    {
        console.log("Table getderivedstate from props executing");
      
        return null;
    }
    

componentDidMount()    //component did mounting
{
    console.log("table did mount");
}
componentDidUpdate(p,s)
{
    console.log("Table child value"+p.x);
}
    render()
    {    
        console.log("table rendor executing");     //mounting ->pageloading
        return(
            <div>
                Table child
            </div>
        );
    }
}
export default TableChild;
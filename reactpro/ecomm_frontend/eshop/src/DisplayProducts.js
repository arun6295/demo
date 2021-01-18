import React,{Component} from 'react';
import {connect} from 'react-redux';

class DisplayProducts extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            products:[]
        }
    }
    //to get the data from server to client(chrome)
    
    componentDidMount()
    {
        fetch("http://localhost:4070/getproducts")
        .then(res=>res.json())
        //.then(d=>console.log(d));
        .then(data=>this.setState({products:data}));
      //  console.log(this.state.products);
       
    }
    render()
    {
        console.log("no of products:"+this.props.procount);
        return(<div><p>no of products:{this.props.procount}</p>
            
              <table border="1" width="80%" cellpadding="6px" cellSpacing="4"> 
              <tr>
                  <th>productid</th>
                  <th>productname</th>
                  <th>productprice</th>

              </tr>
              {
                this.state.products.map(
                  temp=><tr>
                        <td>{temp.proid}</td>
                        <td>{temp.proname}</td>
                        <td>{temp.proprice}</td>
                        </tr>)
                        
            }

            </table>
            </div>);
        
    }
}
const mapStateToProps=(state)=>({procount:state.noofproducts})
export default connect(mapStateToProps)(DisplayProducts);
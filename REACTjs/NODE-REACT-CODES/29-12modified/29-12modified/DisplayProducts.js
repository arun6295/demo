import React,{Component} from 'react';
import { connect } from 'react-redux';

class DisplayProducts extends React.Component
{

   
constructor()
{
    super();
    this.state  = 
    {
       products: []
    }
    
}
    componentDidMount()
    {
        fetch("http://localhost:4040/getproducts")
        .then(res=> res.json())
        .then(data=> this.setState({products:data}));
        //console.log(this.state.products);
    }
    render()
    {
        console.log(this.state.products);
        console.log("pro count  "+this.props.productCount);
        return(<div> Shop Products Here <p> 
            product count {this.props.productCount} </p>
            <table border="1">
                <tr>
                    <th> ProductId </th>
                    <th> ProductName </th>
                    <th> ProductPrice </th>
                </tr>
            {
                this.state.products.map(
                       x=><tr>
                        <td>{x.proid} </td>
                        <td>{x.proname} </td>
                        <td>{x.proprice} </td>
                        </tr>)
            }
            </table>
            </div>
            )
    }
}
const mapStateToProps = (state) => ({productCount: state.noOfProducts})

export  default connect(mapStateToProps)(DisplayProducts);
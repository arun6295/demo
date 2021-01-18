import React,{Component} from 'react';

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
        return(<div> Shop Products Here 
            {
                this.state.products.map(
                       x=><ul>
                        <li>{x.proid} </li>
                        <li>{x.proname} </li>
                        <li>{x.proprice} </li>
                        </ul>)
            }
            </div>
            )
    }
}
export  default DisplayProducts;
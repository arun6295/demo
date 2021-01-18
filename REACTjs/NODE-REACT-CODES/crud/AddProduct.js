import React, { Component } from 'react';
import firebase from './firebaseconfig';
class AddProduct extends Component {

    constructor(props)
    {
       super(props);
       this.state = 
       {
           proid: '',
           proname: '',
           proprice: '',
           products: []
       }
    }

    componentDidMount()
    {
        const fbRef=firebase.database().ref('products');
        fbRef.on('value',(snapshot)=> {
            //get data from firebase and asign to proList
            const proList=snapshot.val();
            console.log(proList);
            const productList = [];
            //get one by one object from proList and assign to productList
            for(let h in proList)
            {
            productList.push({h,...proList[h]});
            }
            console.log(productList);
            //intialise products array using productList
            this.setState({products: productList});
            
        })
    }
    storeField(e)
    {
       this.setState({[e.target.name]: e.target.value})
    }

    addProduct(e)
    {
        e.preventDefault();
        const product =
        {
            productid: this.state.proid,
            productname:this.state.proname,
            productPrice: this.state.proprice
        }
        console.log("product data = "+product);
        //send this product to database->our database is firbase
        //create firebase reffrence
        const fbRef=firebase.database().ref('products');
        console.log("reff = "+fbRef);
        //push data(product) into firebase using firebase reffrence
        fbRef.push(product);
        this.setState({proid:'', proname: '', proprice:''})
    }

    deleteProduct(p)
    {
        console.log(p+" is going to delete");
        const fbRef=firebase.database().ref('products').child(p.h);
        fbRef.remove(err=>
        {
            if(err)
            {
                console.log(err);
            }
            else{
                console.log(p.productid+"is deleted");
            }
        });
    }

    editProduct(p)
    {
        console.log(p+" is going to edit");
        const fbRef=firebase.database().ref('products').child(p.h);
        this.setState({proid: p.productid, proname: p.productname, proprice: p.productPrice})
        fbRef.remove(err=>
            {
                if(err)
                {
                    console.log(err);
                }
                else{
                    console.log(p.productid+"is deleted");
                }
            });
    }
    render() {
        return (
            <div>
              <form onSubmit={this.addProduct.bind(this)}>
                  <div>
                  <label>ProductId </label>
                  <input  type="text" name="proid" onChange={this.storeField.bind(this)}
                  value={this.state.proid} />
                  </div>
                  <div>
                  <label>ProductName </label>
                  <input  type="text" name="proname" onChange={this.storeField.bind(this)}
                  value={this.state.proname} />
                  </div>
                  <div>
                  <label>ProductPrice </label>
                  <input  type="text" name="proprice" onChange={this.storeField.bind(this)}
                  value={this.state.proprice} />
                  </div>
                  <button type="submit">addproduct </button>
              </form>  
              <table border="1">
                <tr> 
                    <th> product id </th>
                    <th> product name </th>
                    <th> product price </th>
                    <th> Delete </th>
                    <th> Edit </th>
                </tr>
           
              {
                  
                    this.state.products.map(
                           singlepro=><tr>
                            <td>key =  {singlepro.productid} </td>
                            <td>{singlepro.productname} </td>
                            <td>{singlepro.productPrice} </td>
                            <td><button onClick = {()=> this.deleteProduct(singlepro)}>delete </button> </td>
                            <td><button onClick = {()=> this.editProduct(singlepro)}>edit </button> </td>
                            </tr>)
               
                  
              }
              </table>
            </div>
        );
    }
}

export default AddProduct;
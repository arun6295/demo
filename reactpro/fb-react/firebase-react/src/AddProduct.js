import React, { Component } from 'react';
import firebase from './firebaseconfig';

class AddProduct extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            proid:"",
            proname:"",
            proprice:"",
            products:[]
        }


    }
    componentDidMount()
    {
        const fbRef=firebase.database().ref('products');
        //on is the method to get data.
        fbRef.on('value',(snapshot)=>{
            //get data from firebase and assign to proList
           const proList= snapshot.val();
           console.log(proList);
           const productList=[];
           //pushing data in to productList//get one by one from proList and assign to product list
           for(let p in proList)
           {
            productList.push({p,...proList[p]});
            

           }
           console.log(productList);
           //initialise products array using productList.
           this.setState({products:productList});
           
           console.log("products:"+this.setState({products:productList}));
           
        })

    }
    storeField(e)
    {
        this.setState({[e.target.name]:e.target.value});

    }
    addProduct(e)
    {
        e.preventDefault();
        const product=
        {
            proid:this.state.proid,
            proname:this.state.proname,
            proprice:this.state.proprice
        }
        console.log("product data"+product);

        //send the data to firebase.
        //create firebase refrerence
       const fbRef=firebase.database().ref('products');
        console.log("ref"+fbRef);
        //push data in to firebase using firebase reference
        fbRef.push(product);
        this.setState({proid:'',proname:'',proprice:''})
   
    }
    deleteProduct(p)
    {

        console.log(p+"is going to delete");
        const fbRef=firebase.database().ref('products').child(p.p);
        fbRef.remove(err=>
            {
                if(err)
                {
                    console.log(err);
                }else{
                    console.log(p.proid+"is deleted");
                }
            });


    }
    editProduct(p)
    {

        console.log(p+"is going to edit");
        const fbRef=firebase.database().ref('products').child(p.p);
        this.setState({proid:p.proid,proname:p.proname,proprice:p.proprice})
        fbRef.remove(err=>
            {
                if(err)
                {
                    console.log(err);
                }else{
                    console.log(p.proid+"is deleted");
                }
            });
        


    }
    render() {
        return (
            <div>
                <form onSubmit={this.addProduct.bind(this)}>
                    <div>
                    <label>ProductId</label>
                    <input type="text" name="proid" onChange={this.storeField.bind(this)} value={this.state.proid} required/>
                    </div>
                    <div>
                    <label>ProductName</label>
                    <input type="text" name="proname" onChange={this.storeField.bind(this)} value={this.state.proname} required/>
                    </div>
                    <div>
                    <label>ProductPrice</label>
                    <input type="text" name="proprice" onChange={this.storeField.bind(this)} value={this.state.proprice} required/>
                    </div>
                    <button type="submit">ADD PRODUCTS</button>
                </form>

                <table border="1">
                    <tr>
                        <th>product id</th>
                        <th>product name</th>
                        <th>product price</th>
                        <th>delete</th>
                        <th>edit</th>
                    </tr>

                {
                    this.state.products.map(
                        x=><tr>
                            <td>{x.proid}</td>
                            <td>{x.proname}</td>
                            <td>{x.proprice}</td>
                            <td><button onClick={()=>this.deleteProduct(x)}> delete </button> </td>
                            <td><button onClick={()=>this.editProduct(x)}> edit</button></td>
                        </tr>
                    )
                }
                </table>
            </div>
        );
    }
}

export default AddProduct;
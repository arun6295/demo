import React, { Component } from 'react';

class AddProduct extends Component
 {
     constructor(props)
     {
         super(props);
         this.state=
         {
             proid:"",
             proname:"",
         }
     }
     storeFormData(e)
     {
         this.setState({[e.target.name]:e.target.value})

     }
     addproduct()
     {
         const product=
         {
             pid:this.state.proid,
             pname:this.state.proname,
             pprice: 67000
         }
         fetch("http://localhost:4070/addproduct",{
             method:'POST',
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify(product)
             

         })
         .then(res=>res.json())
         .then(data=>console.log(data));
     }
     

    render() {
        return (
            <div>
                <form method="GET" onSubmit={this.addproduct.bind(this)}>
                    <div>
                    <label>productid</label>
                    <input type="text" name="proid" onChange={this.storeFormData.bind(this)} value={this.state.proid} required/>
                    </div>
                    <div>
                    <label>productname</label>
                    <input type="text" name="proname" onChange={this.storeFormData.bind(this)} value={this.state.proname}/>
                    </div>
                    <button type="submit">addproduct</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;
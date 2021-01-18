import React, { Component } from 'react';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proid: "",
      proname: "",
    };
  }

  storeField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addProduct() {
    const product = {
      pId: this.state.proid,
      pName: this.state.proname,
      pPrice: 67000,
    };
    fetch("http://localhost:4040/addproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.addProduct.bind(this)}>
          <div>
            <label> ProductId </label>
            <input
              type="text"
              name="proid"
              onChange={this.storeField.bind(this)}
              value={this.state.proid}
            />
          </div>

          <div>
            <label> ProductName </label>
            <input
              type="text"
              name="proname"
              onChange={this.storeField.bind(this)}
              value={this.state.proname}
            />
          </div>
          <button type="submit">addproduct</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
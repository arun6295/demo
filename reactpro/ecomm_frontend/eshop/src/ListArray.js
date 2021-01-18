function ProductArray()
{
    const products=['dell','lenovo','hp'];
    products[0]='sony';
    return(
       /* <div>
            <h6>{products[0]}</h6>
            <h6>{products[1]}</h6>
            <h6>{products[2]}</h6>
        </div>*/
        <div>
            {
            products.map(x=><li>{x}</li>)
}
        </div>
    )
}
export default ProductArray;
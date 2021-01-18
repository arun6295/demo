import React, {Component } from 'react';
import App from './App';
//class component
class ProductList extends React.Component
{
    render()
    {
        return(
        <ul>
            <li>
                Dell
            </li>
            <li>
                Lenovo
            </li>
            <li>
                Hp
            </li>
        </ul>
        );
    }
}
export default ProductList;
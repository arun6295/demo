import logo from './logo.svg';
import './App.css';
import A from './test.js';
import Pro from './productListex.js';
import Productlist from './ProductData';
import Authentication from './Authentication';
import ProductArray from './ListArray';
import PropsEx from './PropsEx';
import PropsExFc from './PropsExFc';
import Table from './Table';
import DisplayProducts from './DisplayProducts';
import AddProduct from './AddProduct';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TestState from './TestState';
import {reducer} from './reducer';

/*
//reducer concept //create initial state
const initialState=
{
  logininfo:false,
  message:"please sign in to see the products",
  username:'arun',
  noofproducts:0

};
//reducer function //pass the state.
function reducer(state=initialState,action)
{
  console.log("action type="+action.type);
  //let's update the state based on action.
  if(action.type==="LoginClick")
  {
    return {logininfo:true,username:"rao"}

  }
  else if(action.type==="LogoutClick")
  {
    return {logininfo:false,username:"arun"}
  }
  return state;

}*/
//pass function to reducer.
const store=createStore(reducer);

function App() {
  return (
   /*<div>
     <A/>
     <Pro/>
     <Productlist/>
     <Authentication/>
     <ProductArray/>
     <PropsEx techName="MongoDb"/>
     <PropsExFc techName="Node"/>
     <Table tableNum="5"/>
     <Table tableNum="6"/>
     
     <h1 style={{color:"green"}}>welcome to react js</h1>
     <h2 style={{color:"blue"}}>created by facebook</h2>//
   </div>*/
   /*<div>
     <DisplayProducts/>
     <AddProduct/>
     <Authentication/>
   </div>*/
   //passing the store to reducer
   
   <Provider store={store}> 
   <TestState/>
   <Authentication/>
   <AddProduct/>
   

   </Provider>
  );
}

export default App;



import { Provider } from "react-redux";
import { createStore } from "redux";
import TestState from "./TestState";

const baseState = 
{
  userName: "guest",
  loginInfo: false,
  noOfProducts: 0
}

function  reducer(state = baseState,action)
{
  console.log("action type  = "+action.type)
  //let's update the state based on action
  if(action.type==="LoginClicked")
  {
    return {loginInfo: true, userName: "harsha" }
  } else if(action.type==="LogoutClicked")
  {
    return {loginInfo: false, userName: "guest" }
  }
  return state;
}

const  store = createStore(reducer);


function App() {
  return (
    <Provider store= {store}>
     <TestState />
    </Provider> 
  );
}
export default App;

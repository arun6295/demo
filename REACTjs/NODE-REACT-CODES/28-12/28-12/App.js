

import { Provider } from "react-redux";
import { createStore } from "redux";
import TestState from "./TestState";

const baseState = 
{
  userName: "harsha"
}

function  red(state = baseState,action)
{
  return state;
}

const  store = createStore(red);


function App() {
  return (
    <Provider store= {store}>
     <TestState />
    </Provider> 
  );
}
export default App;

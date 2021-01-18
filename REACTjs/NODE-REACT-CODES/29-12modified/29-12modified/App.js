

import { Provider } from "react-redux";
import {createStore} from 'redux';
import TestState from "./TestState";
import {reducer} from './reducer';

const  store = createStore(reducer);

function App() {
  return (
    <Provider store= {store}>
     <TestState />
    </Provider> 
  );
}
export default App;

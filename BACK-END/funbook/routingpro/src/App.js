import logo from './logo.svg';
import './App.css';
import B from './components/B';
import C from './components/C';
import A from './components/A';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';
import fe from './components/fe';
import {R} from 'react-router-dom';

//routing.//npm install react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/a">gotoA</Link>
      <Link to="/b">gotoB</Link>
      <Link to="/c">gotoC</Link>
      <Link to="/d">gotod</Link>
      <Switch>
        
        <Route path="/a" component={A}/>
        <Route path="/b" component={B}/>
        <Route path="/c" component={C}/>
        <Route path="/d" component={fe}/>

      </Switch>
      </BrowserRouter>

    </div>
  );
  

}

export default App;

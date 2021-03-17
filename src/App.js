import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Index from "./feature/Index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/home"  style={{color:"white"}}>HELLO?</Link>
          </header>
        </Route>
        <Route path="/home" exact>
          <Index />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

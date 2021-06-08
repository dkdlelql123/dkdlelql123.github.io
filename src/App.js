import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import Index from "./feature/Index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/home" exact>
          아아아
        </Route>
      </Switch>
    </div>
  );
}

export default App;

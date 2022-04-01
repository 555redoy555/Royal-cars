import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} >
            <Home></Home>
          </Route>
          <Route path={'/home'} >
            <Home></Home>
          </Route>
          <Route path={'/login'} >
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import Home from './components/Home/index'
import Navigation from './components/Nav/index'
import Resgister from './components/Resgister/index'
import Login from './components/Login/index'
import HomePage from './components/HomePageUser'
import { Route, Switch, Link } from 'react-router-dom';
import DetailUser from './components/DetailUser/DetailUser';



function App() {
  

  return (
    <div className="App">
      <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Resgister} />
          <Route path='/userPage' exact component={HomePage} />
          <Route path='/detailuser/:id' exact component={DetailUser} />

      </Switch>
    </div>
  );
}

export default App;

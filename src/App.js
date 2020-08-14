import React, {Fragment, useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import AppPage from './components/RootPage'
//import UserPage from './components/UserPage'
//import SettingPage from './components/SettingPage'
import LoginPage from './components/LoginPage'
import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
  return(
    <Fragment>
      <Link to="/">Root </Link>
      |
      <Link to="/user">User</Link>
      |
      <Link to="/setting">Setting</Link>
    </Fragment>
  )
}

function App() {

  const [valueLogin, setLogin] = useState(false)

  function handleClick(evt) {
    setLogin(!valueLogin)
  }

  return (
    <div className="App">
      <BrowserRouter>

      <Navigation />

      <br/><br/>

      <Switch>

          <Route exact path="/">
            {
              valueLogin
                ? <AppPage onClickLogOut={handleClick} />
                : <Redirect to="/login" />
            }
          </Route>

          <Route path="/login">
            {
              valueLogin
                ? <Redirect to="/" />
                : <LoginPage onClickLogIn={handleClick} />
            } 
          </Route>


        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
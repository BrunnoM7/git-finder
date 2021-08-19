import React, { useState, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GithubState from './context/github/GithubState';

import About from './components/pages/About'
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert'

import './App.css';

const App = () => {

  const [alert, setAlert] = useState(null);

  // Get user repos
  

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000)
  }

  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route 
                exact 
                path='/' 
                render={props => (
                  <Fragment>
                    <Search
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              
              <Route 
                exact
                path='/about'
                component={About}
              />

              <Route 
                exact
                path='/user/:login'
                component={User}
              />
            </Switch>
            
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
  
}

export default App;

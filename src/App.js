import React, { Component, Fragment } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Adapter from './components/Adapter';
import Welcome from './components/Welcome'
import LoginForm from './components/LoginForm';
import ViewsContainer from './components/ViewsContainer'
import NavBar from './components/NavBar'
import { Button } from 'semantic-ui-react'


// const { google } = require('googleapis');

// google.options({
//   auth: 'AIzaSyCZh9Pb6kSQs4IB8JO0KhGd767p0NYvNf8'
// });

// const civicinfo = google.civicinfo({
//   version: 'v2'
// });

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <br />
        <Route exact path="/" component={Welcome} />
        {Adapter.isLoggedIn() ?
          <Redirect to="/" />
          :
          <Switch>
            <Route exact path="/register" component={(props) => <RegistrationForm {...props} />} />
            <Route exact path="/login" component={(props) => <LoginForm {...props} />} />
            <Route exact path="/view" component={ViewsContainer} />
          </Switch>
        }
      </div>

    );
  }
}

export default App;

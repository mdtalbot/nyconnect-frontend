import React, { Component, Fragment } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Adapter from './components/Adapter';
import Welcome from './components/Welcome'
import LoginForm from './components/LoginForm';
import ViewsContainer from './components/ViewsContainer'
import NavBar from './components/NavBar'
import withAuth from './components/withAuth';


// const { google } = require('googleapis');

// google.options({
//   auth: 'AIzaSyCZh9Pb6kSQs4IB8JO0KhGd767p0NYvNf8'
// });

// const civicinfo = google.civicinfo({
//   version: 'v2'
// });

class App extends Component {

  render() {
    const AuthedRegistrationForm = withAuth(RegistrationForm, "/");
    const AuthedLoginForm = withAuth(LoginForm, "/my-snacks");
    return (
      <div className="App">
        <NavBar />


        <Route exact path="/" component={Welcome} />
        <Route exact path="/register" component={(props) => <AuthedRegistrationForm {...props} />} />
        <Route exact path="/login" component={(props) => <AuthedLoginForm {...props} />} />
        <Route exact path="/view" component={ViewsContainer} />
      </div>

    );
  }
}

export default App;

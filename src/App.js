import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'

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
        <Container />
      </div>

    );
  }
}

export default App;

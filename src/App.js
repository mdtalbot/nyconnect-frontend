import React, { Component } from 'react';
import './App.css';
import ViewsContainer from './components/ViewsContainer'

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
        <ViewsContainer />
      </div>

    );
  }
}

export default App;

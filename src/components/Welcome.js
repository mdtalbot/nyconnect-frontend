import React from 'react';
import { Button } from 'semantic-ui-react'
import ViewsContainer from './ViewsContainer'
import { Route, Link } from 'react-router-dom'
import ElectionPage from './ElectionPage'

export default function Welcome(props) {
  return (
    <div className="welcome">
    <div className='welcome-content'>
      <h1>Welcome to PolitiConnect!</h1>
      <h4>Engagement with local, state, and national politics made easy</h4>
    <br />
      <Link to="/view" className='ui massive violet button' component={ViewsContainer}>See your representatives</Link>
      <Link to="/elections" className='ui massive purple button' component={ElectionPage}>See upcoming elections</Link>
      </div>
      </div>
  );
}

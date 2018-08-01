import React from 'react';
import { Button } from 'semantic-ui-react'
import ViewsContainer from './ViewsContainer'
import { Route, Link } from 'react-router-dom'

export default function Welcome(props) {
  return (
    <div className="welcome">
    <div className='welcome-content'>
      <h1>Welcome to PolitiConnect!</h1>
      <h4>Connecting You to Your Representatives</h4>
    <br />
      <Link to="/view" className='ui massive violet button' component={ViewsContainer}>See your representatives</Link>
      <Button color='purple' size='massive'>See upcoming elections</Button>
      </div>
      </div>
  );
}

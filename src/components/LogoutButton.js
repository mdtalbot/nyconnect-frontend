import React from 'react';
import Adapter from './Adapter';
import { withRouter } from 'react-router';
import withColor from './withColor';

const LogoutButton = ({ to = "/login", history}) => {
  return (
    <a
      className="logout-button"
      onClick={() => {
        Adapter.logout();
        history.push(to);
      }}
    >
      Logout
      </a>
  )
}

export default withColor(withRouter(LogoutButton));

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter';
import LogoutButton from './LogoutButton'

const propTypes = {};

const defaultProps = {};

export default function NavBar(props) {
  return (
    <header className="nav">
      <NavLink activeClassName="selected" exact to="/">Home</NavLink>  |
      {Adapter.isLoggedIn() ?
        <Fragment>
          <LogoutButton />
        </Fragment>
        :
        <Fragment>
            <NavLink activeClassName="selected" exact to="/register">Registration</NavLink>  |
            <NavLink activeClassName="selected" exact to="/login">Login</NavLink>
        </Fragment>
      }
      <br />
      <br />
    </header>
  );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

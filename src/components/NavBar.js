import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter';
import AddressSearch from './AddressSearch';

const propTypes = {};

const defaultProps = {};

export default function NavBar(props) {
  return (
    <header className="nav">
      <NavLink activeClassName="selected" exact to="/">Home</NavLink>  |
      {Adapter.isLoggedIn() ?
        <button onClick={() => {
          Adapter.logout();
          props.history.push("/login");
        }}>Logout</button>
        :
        <Fragment>
            <NavLink activeClassName="selected" exact to="/register">Registration</NavLink>  |
            <NavLink activeClassName="selected" exact to="/login">Login</NavLink>
        </Fragment>
      }
    </header>
  );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

import React from 'react';
import { Input, Form } from "semantic-ui-react";
import LoginForm from './LoginForm'


export default class AddressSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <form className="ui form header" onSubmit={this.props.handleSearchSubmit}>
      //   <div className="fields">
      //     <div className="six wide field">
      //     <input className="ui fluid input" type="text" placeholder="Enter your address here." value={this.props.userAddress} onChange={this.props.handleSearchChange} />
      //     </div>
      //   <div className="field">
      //     <input className="ui button" type="submit" value="Submit" />
      //     </div>
      //   </div>
      // </form>
      <div className='search-bar'>
      <Form onSubmit={this.props.handleSearchSubmit}>
        <Form.Group>
          <Form.Input width={12} placeholder="Enter your address to see a list of your representatives." value={this.props.userAddress} onChange={this.props.handleSearchChange} />
          <Form.Button content="Submit" />
        </Form.Group>
        </Form>
      </div>
    );
  }
}

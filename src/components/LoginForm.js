import React from 'react';
import { Form, Checkbox, Button, Grid } from 'semantic-ui-react'
import Adapter from './Adapter'


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    Adapter.login(this.state.username, this.state.password)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div className="login-form">
      <Grid centered>
        <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' name="username" type="text" width={8} onChange={this.handleChange} value={this.state.username}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' name="password" type="text" width={8} onChange={this.handleChange} value={this.state.password}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <div>
          <Button type='submit' color='blue' floated='left' value='Login'>Log In</Button>
          {/* <Button floated='right' color='grey'>Create account</Button> */}
        </div>
        </Form>
        </Grid>
      </div>
    );
  }
}



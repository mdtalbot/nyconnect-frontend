import React from 'react';
import {Form, Checkbox, Button, Grid } from 'semantic-ui-react'


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

    fetch(`http://localhost:4000/sessions/`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.props.history.push("/");
      })
    // .then(() => {
    //   this.setState({ ...this.state });
    // })
  }

  render() {
    return (
      <Grid centered>
        <Form verticalAlign='middle' onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' width={8} onChange={this.handleChange} value={this.state.username}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' width={8} onChange={this.handleChange} value={this.state.password}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <div>
          <Button type='submit' color='blue' floated='left' value='login'>Log In</Button>
          {/* <Button floated='right' color='grey'>Create account</Button> */}
        </div>
        </Form>
      </Grid>
    );
  }
}



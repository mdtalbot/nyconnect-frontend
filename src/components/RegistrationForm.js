import React from 'react';
import { Grid, Form, Button, Checkbox } from 'semantic-ui-react'

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://politiconnect.herokuapp.com:3000/users/`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        localStorage.setItem('token', json.token);
        this.props.history.push("/");
      })
  }

  render() {
    return (
      <div className="registration">
        <Grid centered>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">E-mail Address</label>
              <input
                type="email"
                name="email"
                placeholder="E-mail Address"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type="submit" color='blue' value="Register" >Register</Button>
          </Form>
        </Grid>
      </div>
    )
  }
}


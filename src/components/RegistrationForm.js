import React from 'react';
import { Grid, Form, Button } from 'semantic-ui-react'

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:4000/users/`, {
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
          <Form.Group inline>
          <Form.Field>
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.first_name}
            />
          </Form.Field>
          <Form.Field>
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            name="last_name"
            placeholder="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
            />
              </Form.Field>
              </Form.Group>
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
          <label htmlFor="email">E-mail address</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            onChange={this.handleChange}
            value={this.state.email}
            />
            </Form.Field>
          <Button type="submit" color='blue' value="register" >Register</Button>
          </Form>
        </Grid>
      </div>
    )
  }
}

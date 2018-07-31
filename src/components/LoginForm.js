import React from 'react';
import { Button, Form, Modal, Grid } from 'semantic-ui-react'

export default function LoginForm(props) {
  return (
    <Modal trigger={<Button>Log in</Button>}>
      <Grid vertcalAlign='middle' centered>
        <Grid.Column>
          <Modal.Header>
            Log in to your account
          </Modal.Header>
          <Form size='large'>
              <Form.Field required fluid label='Username' control='input' placeholder='Username' />
              <Form.Field required fluid label='Password' control='input' placeholder='Password' />
            <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Modal>
  );
}

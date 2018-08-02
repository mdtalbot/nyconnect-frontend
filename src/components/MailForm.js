import React, { Component } from 'react';
import { Button, Grid, Form, Modal } from 'semantic-ui-react'


export default function MailForm(props) {
  return (

      <Modal trigger={<Button>E-mail</Button>}>
        <Grid centered>
          <Grid.Column>
          <Modal.Header className="mailer-header">Contact your representative!</Modal.Header>
          <div className='mail-form'>
            <Form onSubmit={ props.handleEmailSubmit }>
        <Form.Input label='To' placeholder={props.emails} value={props.emails} name="repEmail" readOnly/>
              <Form.TextArea label='Body' placeholder='Have your say!' onChange={props.handleChange} value={props.emailBody} />
              <Button type='submit'>Submit</Button>
            </Form>
          </div>
          </Grid.Column>

          </Grid>

      </Modal>
  );
}


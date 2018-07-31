import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Modal } from 'semantic-ui-react'


export default function MailForm(props) {
  return (
    <Modal trigger={<Button>E-mail</Button>}>
      <Modal.Header>Contact your representative!</Modal.Header>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input required fluid label='First name' placeholder='First name' />
          <Form.Input fluid required label='Last name' placeholder='Last name' />
        </Form.Group>
        <Form.Input label='To' placeholder={props.emails} value={props.emails} readOnly/>
        <Form.TextArea label='Body' placeholder='Have your say!' />
        <Button type='submit'>Submit</Button>
      </Form>
    </Modal>
  );
}


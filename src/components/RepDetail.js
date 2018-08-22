import React from 'react';
import RepLinks from './RepLinks'
import MailForm from './MailForm'
import {Container, Item, Image, Modal, Form} from 'semantic-ui-react'


export default function RepDetail(props) {

  console.log(props)
      if (props.selectedReps.length == 0) {
        return <h2>Click a representative to see their information!</h2>
    } else {
        return (
          <div className='rep-detail-view ui big'>
            <Item.Group relaxed>
              <Item>
              <Item.Image height="auto" width="auto" max-height="250" max-width="250" src={props.selectedReps.photoUrl ? props.selectedReps.photoUrl : require('../assets/unavailable.jpg')} />

              <Item.Content verticalAlign="middle" float="left">
                  <Item.Header>{props.selectedReps.name}</Item.Header>
                <Item.Meta>
                    {props.selectedReps.party}
                </Item.Meta>
                <Item.Description>
                    {props.selectedReps.address ? props.selectedReps.address[0].line1 : "Address unavailable."}
                    <br />
                    {props.selectedReps.address ? props.selectedReps.address[0].line2 : ''}
                    <br />
                    {props.selectedReps.address ? props.selectedReps.address[0].city : ''} {props.selectedReps.address ? props.selectedReps.address[0].state : ''} {props.selectedReps.address ? props.selectedReps.address[0].zip : ''}
                    <br />
                    {props.selectedReps.phones}
                    <br />
                    <a href={props.selectedReps.urls}>Website</a>
                </Item.Description>
                  {props.selectedReps.emails ? <MailForm emails={props.selectedReps.emails} handleEmailInput={props.handleEmailInput} handleEmailSubmit={props.handleEmailSubmit} emailBody={props.emailBody} /> : 'E-mail unavailable.'}
                    <Item.Extra>
                    {props.selectedReps.channels ? props.selectedReps.channels.map((channel, index) => <RepLinks key={index} type={channel.type} id={channel.id} />) : "No social media links available."}
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </div>
        );
     }
}

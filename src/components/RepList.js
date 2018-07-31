import React from 'react';
import RepListItem from './RepListItem'
import {List} from 'semantic-ui-react'

export default function RepList(props) {
  console.log(props)
  if (props.representatives.length == 0) {
    return (
      <p>Waiting...</p>
    )
  } else {
    return (
      <List selection verticalAlign='middle'>
        {props.representatives.offices.map((rep, index) => <RepListItem key={index} name={rep.name} value={rep.officialIndices} handleRepClick={props.handleRepClick}/>
        )}
      </List>
    )
  }
}

import React from 'react';
import { List } from 'semantic-ui-react'

export default function ElectionItem(props) {
  return (
    <List.Item value={props.value}>
      <List.Header>{props.name}</List.Header>
      {props.electionDay}
    </List.Item>
  );
}



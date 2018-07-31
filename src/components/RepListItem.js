import React from 'react';
import { List } from 'semantic-ui-react'

export default function RepListItem(props) {
  let formattedName = props.name.replace(/ /g, "_");

  return (
    <List.Item value={props.value} onClick={() => props.handleRepClick(props.value)}>
      {/* <a href={`http://www.wikipedia.com/wiki/${formattedName}`} className="ui circular icon mini button" role="button" target="_blank">
        <i aria-hidden="true" className="question circle outline icon"></i>
      </a> */}
      <List.Content>
        <List.Header>{props.name}</List.Header>
      </List.Content>

    </List.Item>
  );
}





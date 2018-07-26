import React from 'react';

export default function RepListItem(props) {
  let formattedName = props.name.replace(/ /g, "_");

  return (
    <div className='list-item row' value={props.value} onClick={() => props.handleRepClick(props.value)}>
      <div className="header">{props.name}</div>
      <a href={`http://www.wikipedia.com/wiki/${formattedName}`} className="ui circular icon mini button" role="button" target="_blank">
        <i aria-hidden="true" className="question circle outline icon"></i>
      </a>
    </div>
  );
}





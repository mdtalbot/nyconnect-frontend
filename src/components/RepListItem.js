import React from 'react';

export default function RepListItem(props) {
  console.log("REP LIST", props);

  return (
    <li className='list-item' value={props.value} onClick={()=> props.handleRepClick(props.value)}>
      {props.name}
    </li>
  );
}




import React from 'react';
import RepListItem from './RepListItem'

export default function RepList(props) {
  console.log(props)
  if (props.representatives.length == 0) {
    return (
      <p>Waiting...</p>
    )
  } else {
    return (
      <ul className="reps-list">
        {props.representatives.offices.map((rep, index) => <RepListItem key={index} name={rep.name} value={rep.officialIndices} handleRepClick={props.handleRepClick}/>
        )}
      </ul>
    )
  }
}

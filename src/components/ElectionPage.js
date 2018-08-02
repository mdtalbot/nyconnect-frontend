import React from 'react';
import { List } from "semantic-ui-react";
import ElectionItem from './ElectionItem'

export default class ElectionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elections: []
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyCZh9Pb6kSQs4IB8JO0KhGd767p0NYvNf8')
      .then(res => res.json())
      .then(res => this.setState({ elections: res }))
  }

  render() {
    if (this.state.elections.length == 0) {
      return (
        <noscript>Placeholder</noscript>
      )
    } else {

      return (
        <List size='large' selection verticalAlign='middle'>
          {this.state.elections.elections.map((election, index) => <ElectionItem key={index} name={election.name} electionDay={election.electionDay}/>
          )}
        </List>
      )
    }
  }
}

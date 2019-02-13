import React from 'react';
import RepList from "./RepList";
import AddressSearch from './AddressSearch'
import RepDetail from './RepDetail'
import {Grid, Header, Container} from 'semantic-ui-react'

export default class ViewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      elections: [],
      userName: '',
      userLogin: '',
      userPassword: '',
      userAddress: '',
      representatives: [],
      selectedReps: [],
      repEmail: '',
      emailBody: '',
      formStatus: ''
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyCZh9Pb6kSQs4IB8JO0KhGd767p0NYvNf8')
      .then(res => res.json())
      .then(res => this.setState({ elections: res }))
  }

  handleRepClick = (value) => {
    console.log("VALUE", value);
    if (value.length > 1) {
      this.setState({
        selectedReps: [this.state.representatives.officials[value[0]], this.state.representatives.officials[value[1]]]
      })
    } else {
      this.setState({
        selectedReps: [this.state.representatives.officials[value]]
      })
    }

    // debugger
  }

  handleSearchChange = (event) => {
    this.setState({ userAddress: event.target.value })
  }

  handleSearchSubmit = (event) => {
    event.preventDefault()
    fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCZh9Pb6kSQs4IB8JO0KhGd767p0NYvNf8&address=${this.state.userAddress}`)
      .then(res => res.json())
      .then(res => this.setState({ representatives: res }))
  }

  handleElectionSubmit = (event) => {
    event.preventdefault()
    fetch('https://www.googleapis.com/civicinfo/v2/elections')
  }

  mapSelectedReps = () => {
    return this.state.selectedReps.map((s) => {
      return <RepDetail selectedReps={s} handleEmailInput={this.handleEmailInput} handleEmailSubmit={this.handleEmailSubmit}/>
    })
  }

  handleEmailInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleEmailSubmit = (event) => {
    event.preventDefault()

    fetch(`http://politiconnect-backend.herokuapp.com:3000/rep_mail`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        // address: this.state.repEmail,
        // message: this.state.emailBody
        address: event.target[0].value,
        message: event.target[1].value
      }
      )
    })
      .then(res => res.json())
  }

  render() {
    console.log("SELECTED REPS", this.state.selectedReps);

    return (
      <div className="views-container">
        <Header size='small'><AddressSearch userAddress={this.state.userAddress} handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} emailBody={this.state.emailBody} />
        </Header>

        <Grid divided="vertically" className="rep-detail-view" >
              {/* <div > */}
          <Grid.Column className="rep-list-view" width={4}>
                <RepList representatives={this.state.representatives} handleRepClick={this.handleRepClick} />
                </Grid.Column>
              {/* <div className=""> */}
          <Grid.Column width={10}>
                {this.mapSelectedReps()}
                </Grid.Column>
        </Grid>
      </div>
    );
  }
}

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
      userAddress: '',
      representatives: [],
      selectedReps: []
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

  mapSelectedReps = () => {
    return this.state.selectedReps.map((s) => {
      return <RepDetail selectedReps={s} />
    })
  }

  render() {
    console.log("SELECTED REPS", this.state.selectedReps);

    return (
      <div>
        <Header size='small'><AddressSearch userAddress={this.state.userAddress} handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} />
        </Header>

        <Grid divided="vertically" className="rep-detail-view" >
              {/* <div > */}
          <Grid.Column className="rep-list-view" width={4}>
                <RepList representatives={this.state.representatives} handleRepClick={this.handleRepClick} />
                </Grid.Column>
              {/* <div className=""> */}
          <Grid.Column width={12}>
                {this.mapSelectedReps()}
                </Grid.Column>
        </Grid>
      </div>
    );
  }
}

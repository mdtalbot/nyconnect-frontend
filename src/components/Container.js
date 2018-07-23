import React from 'react';
import RepList from "./RepList";
import AddressSearch from './AddressSearch'
import RepDetail from './RepDetail'

export default class Container extends React.Component {
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
    console.log("OFFICIALS", this.state.representatives.officials)
    console.log("VALUE", value);

    this.setState({ selectedReps: this.state.representatives.officials[value] })
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



  render() {
    return (
      <div className="container">
        <AddressSearch userAddress={this.state.userAddress} handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} />

        <RepList representatives={this.state.representatives} handleRepClick={this.handleRepClick} />
        <RepDetail selectedReps={this.state.selectedReps} />
      </div>

    );
  }
}

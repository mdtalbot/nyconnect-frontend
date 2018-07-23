import React from 'react';


export default class AddressSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSearchSubmit}>
        <label>
          Input your address:
          <input type="text" value={this.props.userAddress} onChange={this.props.handleSearchChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

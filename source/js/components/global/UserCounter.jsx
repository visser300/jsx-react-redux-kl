import React, { Component } from 'react';

export default class UserCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 10
    }
  }
  render() {
    return (
      <span className="user-info">
        <h1>Users</h1>
        <h5>{this.state.users}</h5>
      </span>
    );
  }
}

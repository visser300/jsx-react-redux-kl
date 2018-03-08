import React, { Component } from 'react';

export default class UserRevenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 10
    }
  }
  timer() {
    this.setState({
      users: this.state.users + 1
    })
    if(this.state.users > 99) { 
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 500);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <span className="user-info">
        <h1>Revenue</h1>
        <h5>{Math.round(this.state.users * 0.1)}M</h5>
      </span>
    );
  }
}

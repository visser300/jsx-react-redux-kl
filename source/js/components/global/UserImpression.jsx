import React, { Component } from 'react';

export default class UserImpression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: 10,
      titleFontStyle: { 'fontSize': '16px'},
      bodyFontStyle: {  'fontSize': '12px' },
    }
  }
  timer() {
    var width = this.myDiv.offsetWidth;

    this.setState({
      users: this.state.users + 1,
      titleFontStyle: { 'fontSize': (width / 10) + 'px'},
      bodyFontStyle: {  'fontSize': ((width - 4) / 10) + 'px' },
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
      <div ref={input => {this.myDiv = input}} className="user-info">
        <div className="title" style={this.state.titleFontStyle}>Impressions</div>
        <div className="body" style={this.state.bodyFontStyle}>{this.state.users}K</div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import ChartData from '../../../test/data.js';

export default class UserCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type
    }
  }
  handleChange(event) {
    this.setState({type: event.target.value});
  }
  onResize(layout, layouts) {
    console.log(123);
    this.setState(this.state);
  }
  render() {
    let config;

    if (this.state.type == "line") {
      config = ChartData.LineData;
    } else if (this.state.type == "bar") {
      config = ChartData.BarData;
    } else if (this.state.type == "pie") {
      config = ChartData.PieData;
    } else if (this.state.type == "web") {
      config = ChartData.WebData;
    }

    config.title.text = this.props.title;

    return (
      <div>
        <div className="body">
          <ReactHighcharts config={config}> </ReactHighcharts>
        </div>
        <div className="footer">
          <select onChange={this.handleChange.bind(this)}>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="pie">Pie</option>
            <option value="web">Web</option>
          </select>
        </div>
      </div>
    );
  }
}

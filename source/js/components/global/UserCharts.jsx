import React, { Component } from 'react';
import {Line, Bar, Pie} from 'react-chartjs-2';
import ChartData from '../../../test/data.js';

export default class UserCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        line: ChartData.LineData,
        bar: ChartData.BarData,
        pie: ChartData.PieData,
      }
    }
  }
  renderLineChartUsers() {
    console.log(this.state.data.line);
    console.log(ChartData.LineDataOptions);
    return <Line data={this.state.data.line} options={ChartData.LineDataOptions}/>;
  }
  renderBarChartUsers() {
    return <Bar data={this.state.data.bar} options={ChartData.BarDataOptions}/>;
  }
  renderPieChartUsers() {
    return <Pie data={this.state.data.pie} options={ChartData.PieDataOptions}/>;
  }
  render() {
    if (this.props.type == "1") {
      return this.renderLineChartUsers();
    } else if (this.props.type == "2") {
      return this.renderBarChartUsers();
    } else {
      return this.renderPieChartUsers();
    }
  }
}

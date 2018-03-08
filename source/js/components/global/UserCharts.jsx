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
        pie1: ChartData.PieData,
        pie2: ChartData.PieData2,
      }
    }
  }
  renderLineChartUsers() {
    return <Line data={this.state.data.line} options={ChartData.LineDataOptions}/>;
  }
  renderBarChartUsers() {
    return <Bar data={this.state.data.bar} options={ChartData.BarDataOptions}/>;
  }
  renderLongPieChartUsers() {
    return <Pie data={this.state.data.pie1} options={ChartData.PieDataOptions}/>;
  }
  renderShortPieChartUsers() {
    return <Pie data={this.state.data.pie2} options={ChartData.PieDataOptions}/>;
  }
  render() {
    let chart;
    if (this.props.type == "1") {
      chart = this.renderLineChartUsers();
    } else if (this.props.type == "2") {
      chart = this.renderBarChartUsers();
    } else if (this.props.type == "3") {
      chart = this.renderLongPieChartUsers();
    } else if (this.props.type == "4") {
      chart = this.renderShortPieChartUsers();
    }

    return (
      <div>
        <div className="header">{this.props.title}</div>
        <div className="body">
          {chart}
        </div>
      </div>
    );
  }
}

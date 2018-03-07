import React, { Component } from 'react';
import {Line, Bar, Pie} from 'react-chartjs-2';
import ChartData from '../../../test/data.js';

export default class UserCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "1",
      data: {
        line: ChartData.LineData,
        bar: ChartData.BarData,
        pie: ChartData.PieData,
      }
    }
  }
  handleChange(event) {
    this.setState({type: event.target.value});
  }
  renderLineChartUsers() {
    return <Line data={this.state.data.line} options={ChartData.LineDataOptions}/>;
  }
  renderBarChartUsers() {
    return <Bar data={this.state.data.bar} options={ChartData.BarDataOptions}/>;
  }
  renderPieChartUsers() {
    return <Pie data={this.state.data.pie} options={ChartData.PieDataOptions}/>;
  }
  render() {
    let chart;
    if (this.state.type == "1") {
      chart = this.renderLineChartUsers();
    } else if (this.state.type == "2") {
      chart = this.renderBarChartUsers();
    } else {
      chart = this.renderPieChartUsers();
    }

    return (
      <div>
        <div className="header">{this.props.title}</div>
        <div className="body">
          {chart}
        </div>
        <div className="footer">
          <select onChange={this.handleChange.bind(this)}>
            <option value="1">Line Chart</option>
            <option value="2">Bar Chart</option>
            <option value="3">Pie Chart</option>
          </select>
        </div>
      </div>
    );
  }
}

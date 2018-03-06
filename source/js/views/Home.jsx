import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from 'actions/app';
import ReactGridLayout from 'react-grid-layout';
import {Line, Bar, Pie} from 'react-chartjs';
import ChartData from '../../test/data.js';

@connect(state => ({
  counter: state.app.get('counter'),
}))

export default class Home extends Component {
  static propTypes = {
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleTestButtonClick = () => {
    const { dispatch } = this.props;
    dispatch(increment());
  }

  render() {

    let layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2},
      {i: 'c', x: 2, y: 0, w: 1, h: 2}
    ];
    
    let chartOptions={
      series: { pie: { show: true } }, 
      grid  : { hoverable: true }, 
      tooltip: true,
      tooltipOpts: { content: "%p.0%, %s", shifts: {x: 20,y: 0},                   
      defaultTheme: false }
    };

    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div className="carbox" key="a">
          <Line data={ChartData.LineData} options={ChartData.LineDataOptions}/>
        </div>
        <div className="carbox" key="b">
          <Bar data={ChartData.BarData} options={ChartData.BarDataOptions}/>
        </div>
        <div className="carbox" key="c">
          <Pie data={ChartData.PieData} options={ChartData.PieDataOptions}/>
        </div>
      </ReactGridLayout>
    );
  }
}

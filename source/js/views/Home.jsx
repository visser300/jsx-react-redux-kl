import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactGridLayout from 'react-grid-layout';
import DeviceStorage from 'react-device-storage';
import UserCharts from 'components/global/UserCharts';
import UserImpression from 'components/global/UserImpression';
import UserRevenue from 'components/global/UserRevenue';
import ROI from 'components/global/ROI';

//@connect(state => ({}))

export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }
  constructor(props) {
    super(props);
 
    this.state = {
      refresh: 0
    }

    this.storage = new DeviceStorage({
      cookieFallback: true,
      cookie: {
        secure: true
      }
    }).localStorage();

    this.layout = this.storage.read('layout')
    if (!this.layout) {
      this.layout = [
        {i: 'a1', x: 0, y: 0, w: 3, h: 6, minW: 3, maxW: 10, minH: 4, maxH: 12},
        {i: 'a2', x: 3, y: 0, w: 3, h: 6, minW: 3, maxW: 10, minH: 4, maxH: 12},
        {i: 'a4', x: 6, y: 0, w: 1, h: 2, minW: 1, maxW: 6, minH: 2, maxH: 6},
        {i: 'b1', x: 0, y: 4, w: 3, h: 6, minW: 3, maxW: 10, minH: 4, maxH: 12},
        {i: 'b2', x: 3, y: 4, w: 3, h: 6, minW: 3, maxW: 10, minH: 4, maxH: 12},
        {i: 'b4', x: 6, y: 2, w: 1, h: 2, minW: 1, maxW: 6, minH: 2, maxH: 6},
        {i: 'c4', x: 6, y: 4, w: 1, h: 2, minW: 1, maxW: 6, minH: 2, maxH: 6},
        {i: 'd4', x: 6, y: 6, w: 2, h: 4, minW: 2, maxW: 10, minH: 2, maxH: 6},
      ];
    }
  }
  onLayoutChange(layout) {
    this.storage.save('layout', layout);
    this.setState(this.state);
  }
  render() {

    return (
      <ReactGridLayout className="layout" onLayoutChange={this.onLayoutChange.bind(this)} layout={this.layout} cols={10} rowHeight={30} width={1200}>
        <div className='carbox' key="a1">
          <UserCharts type="line" title="Campaigns" />
        </div>
        <div className='carbox' key="a2">
          <UserCharts type="pie" title="Investment" />
        </div>
        <div className='carbox' key="a4">
          <UserImpression />
        </div>
        <div className='carbox' key="b1">
          <UserCharts type="bar" title="Annual Budget" />
        </div>
        <div className='carbox' key="b2">
          <UserCharts type="web" title="Response" />
        </div>
        <div className='carbox' key="b4">
          <UserRevenue />
        </div>
        <div className='carbox' key="c4">
          <ROI />
        </div>
        <div className='carbox' key="d4">
        <UserCharts type="pie" title="Response by Channel" />
        </div>
      </ReactGridLayout>
    );
  }
}

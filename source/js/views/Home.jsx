import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactGridLayout from 'react-grid-layout';
import UserCharts from 'components/global/UserCharts';
import UserImpression from 'components/global/UserImpression';
import UserRevenue from 'components/global/UserRevenue';
import ROI from 'components/global/ROI';

//@connect(state => ({}))

export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  render() {

    let layout = [
      {i: 'a1', x: 0, y: 0, w: 3, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'a2', x: 3, y: 0, w: 3, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'a4', x: 6, y: 0, w: 1, h: 2, minW: 1, maxW: 6, minH: 2, maxH: 6},
      {i: 'b1', x: 0, y: 4, w: 3, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'b2', x: 3, y: 4, w: 3, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'b4', x: 6, y: 2, w: 1, h: 2, minW: 1, maxW: 6, minH: 2, maxH: 6},
      {i: 'c4', x: 6, y: 4, w: 1, h: 2, minW: 1, maxW: 6, minH: 2, maxH: 6},
      {i: 'd4', x: 6, y: 6, w: 2, h: 4, minW: 2, maxW: 10, minH: 2, maxH: 6},
    ];
    
    return (
      <ReactGridLayout className="layout" layout={layout} cols={10} rowHeight={30} width={1200}>
        <div className='carbox' key="a1">
          <UserCharts type="1" title="Campaigns" />
        </div>
        <div className='carbox' key="a2">
          <UserCharts type="2" title="Investment" />
        </div>
        <div className='carbox' key="a4">
          <UserImpression />
        </div>
        <div className='carbox' key="b1">
          <UserCharts type="3" title="Annual Budget" />
        </div>
        <div className='carbox' key="b2">
          <UserCharts type="1" title="Response" />
        </div>
        <div className='carbox' key="b4">
          <UserRevenue />
        </div>
        <div className='carbox' key="c4">
          <ROI />
        </div>
        <div className='carbox' key="d4">
        <UserCharts type="4" title="Response by Channel" />
        </div>
      </ReactGridLayout>
    );
  }
}

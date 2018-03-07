import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactGridLayout from 'react-grid-layout';
import UserCharts from 'components/global/UserCharts';
import UserCounter from 'components/global/UserCounter';

//@connect(state => ({}))

export default class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  render() {

    let layout = [
      {i: 'a1', x: 0, y: 0, w: 4, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'a2', x: 4, y: 0, w: 4, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'a3', x: 8, y: 0, w: 4, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'a4', x: 12, y: 0, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6},
      {i: 'b1', x: 0, y: 4, w: 4, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'b2', x: 4, y: 4, w: 4, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'b3', x: 8, y: 4, w: 4, h: 6, minW: 4, maxW: 10, minH: 4, maxH: 12},
      {i: 'b4', x: 12, y: 2, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6},
      {i: 'c4', x: 12, y: 4, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6},
      {i: 'd4', x: 12, y: 6, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6},
    ];
    
    return (
      <ReactGridLayout className="layout" layout={layout} cols={14} rowHeight={30} width={1200}>
        <div className='carbox' key="a1">
          <UserCharts type="1" />
        </div>
        <div className='carbox' key="a2">
          <UserCharts type="2" />
        </div>
        <div className='carbox' key="a3">
          <UserCharts type="3" />
        </div>
        <div className='carbox' key="a4">
          <UserCounter />
        </div>
        <div className='carbox' key="b1">
          <UserCharts type="2" />
        </div>
        <div className='carbox' key="b2">
          <UserCharts type="1" />
        </div>
        <div className='carbox' key="b3">
          <UserCharts type="3" />
        </div>
        <div className='carbox' key="b4">
          <UserCounter />
        </div>
        <div className='carbox' key="c4">
          <UserCounter />
        </div>
        <div className='carbox' key="d4">
          <UserCounter />
        </div>
      </ReactGridLayout>
    );
  }
}

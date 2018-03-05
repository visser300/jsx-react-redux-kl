import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RouteStatus = ({ code, children }) => (
  <Route
    render={
      ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }

        return children;
      }
    }
  />
);

RouteStatus.propTypes = {
  code: PropTypes.number.isRequired,
  children: PropTypes.object,
};

export default class NotFound extends Component {
  render() {
    return (
      <RouteStatus code={ 404 }>
        <div className='NotFound'>
          <h1>Not Found</h1>
        </div>
      </RouteStatus>
    );
  }
}

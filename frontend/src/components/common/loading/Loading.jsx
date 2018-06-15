import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Loading.css';

const propTypes = {
  error: PropTypes.bool,
  timeOut: PropTypes.bool,
  pastDelay: PropTypes.bool
};

const defaultProps = {
  error: false, timeOut: false, pastDelay: false
};

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    /**
     * console.log(this.props);
     * {isLoading: true, pastDelay: false, timedOut: false, error: null}
     */
    if (this.props.error) {
      return <div>Error</div>;
    } else if (this.props.timeOut) {
      return <div>Time out</div>;
    } else if (!this.props.pastDelay) {
      // delay Loading Component show on screen 200ms (be default, can be set in Loadable)
      // if after 200ms, component has just loaded, Loading will show.
      return null;
    }
    return (
      <div className="Loading">
        <div className="LoadingText">
          Loading...
        </div>
      </div>
    );
  }
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;

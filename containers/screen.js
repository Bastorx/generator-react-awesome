import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScreenInfo from "../components/screen";

class Screen extends Component {
  static propTypes = {
    windowWidth: PropTypes.number,
    windowHeight: PropTypes.number
  };
  render() {
    const { windowWidth, windowHeight } = this.props;
    return <ScreenInfo height={windowHeight} width={windowWidth} />;
  }
}

export default connect(state => ({
  windowHeight: state.windowState.windowHeight,
  windowWidth: state.windowState.windowWidth
}))(Screen);

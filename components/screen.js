import React from "react";
import PropTypes from "prop-types";

const Screen = ({ width, height }) => (
  <div>
    <ul>
      <li>Width: {width}</li>
      <li>Height: {height}</li>
    </ul>
  </div>
);

Screen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Screen;

/* eslint-disable linebreak-style */
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars = (props) => (
  <Scrollbars
    {...props}
    autoHide
    renderTrackHorizontal={(properties) => (
      <div
        {...properties}
        style={{ display: 'none' }}
        className="track-horizontal"
      />
    )}
  />
);

export default CustomScrollbars;

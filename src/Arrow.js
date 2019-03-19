import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Arrow = ({ className, direction, size, style, onClick, ...rest }) => (
  <div className={`arrow ${className}`} style={{ height: `${size}px`, width: `${size}px` }} onClick={onClick}>
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
      {direction === 'right' && <path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />}
      {direction === 'left' && <path d='M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' />}
      <path fill='none' d='M0 0h24v24H0V0z' />
    </svg>
  </div>
);

Arrow.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func
};

Arrow.defaultProps = {
  className: '',
  size: 24,
  style: {},
  onClick: void 0
};

export default Arrow;

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Arrow from './Arrow';

import './style.css';

const ReactSliding = ({ arrowSize, children, disableIndex, defaultIndex, height, slides, timeout, width }) => {
  const [currentIndex, setIndex] = useState(defaultIndex);
  const intervalRef = useRef();

  let slideElements = [];
  let dots = [];

  if (children === void 0) {
    slides.forEach((slide, index) => {
      slideElements.push(
        <li
          key={`slide-${index}`}
          className={`slide${index === currentIndex ? ' show' : ''}`}
          style={{
            backgroundImage: `url(${slide})`,
            transition: `opacity 500ms ease-in-out`
          }}
        />
      );
      if (!disableIndex) {
        dots.push(
          <div
            key={`dot-${index}`}
            className={`dot${index === currentIndex ? ' current' : ''}`}
            onClick={() => setIndex(index)}
          />
        );
      }
    });
  }

  const next = () => setIndex(currentIndex + 1 > slideElements.length - 1 ? 0 : currentIndex + 1);
  const previous = () => setIndex(currentIndex - 1 < 0 ? slideElements.length - 1 : currentIndex - 1);

  const handleNavClick = navFunction => event => {
    event.preventDefault();
    navFunction();
  };

  useEffect(() => {
    const id = setInterval(next, timeout);
    intervalRef.current = id;

    return () => {
      if (intervalRef.current !== void 0) {
        clearInterval(intervalRef.current);
      }
    };
  });

  return (
    <div className='container' style={{ width: width, height: height }}>
      <Arrow className='nav-button previous' onClick={handleNavClick(previous)} size={arrowSize} direction='left' />
      <Arrow className='nav-button next' onClick={handleNavClick(next)} size={arrowSize} direction='right' />
      <ul className='slides'>{slideElements}</ul>
      {!disableIndex && <div className='dotbar'>{dots}</div>}
    </div>
  );
};

ReactSliding.propTypes = {
  arrowSize: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.node),
  disableIndex: PropTypes.bool,
  defaultIndex: PropTypes.number,
  height: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.string),
  timeout: PropTypes.number,
  width: PropTypes.string
};

ReactSliding.defaultProps = {
  arrowSize: 48,
  children: void 0,
  disableIndex: false,
  defaultIndex: 0,
  height: '100%',
  slides: [],
  timeout: 5000,
  width: '100%'
};

export default ReactSliding;

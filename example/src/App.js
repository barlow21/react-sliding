import React, { useState } from 'react';
import ReactSliding from 'react-sliding';
import Menu from './Menu';

const slides = ['images/bee.jpg', 'images/bridge.jpg', 'images/cornfield.jpg', 'images/deer.jpg'];

const Example = () => {
  const [disableIndex, setDisableIndex] = useState(false);
  const [arrowSize, setArrowSize] = useState(48);
  const [timeout, setTimeout] = useState(5000);
  const [size, setSize] = useState('100%');

  const options = { disableIndex, arrowSize, timeout, width: size, height: size };
  const menuOptions = {
    disableIndex,
    setDisableIndex,
    arrowSize,
    setArrowSize,
    timeout,
    setTimeout,
    size,
    setSize
  };
  return (
    <div className='example'>
      <Menu {...menuOptions} />
      <div className='show' style={{ position: 'relative' }}>
        <ReactSliding slides={slides} {...options} />
      </div>
    </div>
  );
};
export default Example;

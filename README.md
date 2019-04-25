# react-sliding

>

[![NPM](https://img.shields.io/npm/v/react-sliding.svg)](https://www.npmjs.com/package/react-sliding) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[Live](https://barlow21.github.io/react-sliding/)

## Install

```bash
npm install --save react-sliding
```

## Properties

| Property     | Description                                                       | Type    | Default |
| ------------ | ----------------------------------------------------------------- | ------- | ------- |
| arrowSize    | Set the size for the previous and next arrows                     | Integer | 48      |
| defaultIndex | Choose the index where the slideshow should start                 | Integer | 0       |
| disableIndex | Choose whether to show or hide the index display                  | Boolean | false   |
| height       | Set the height of the slideshow                                   | String  | '100%'  |
| slides       | The images you want to be shown. This must be an array of strings | Array   | []      |
| timeout      | Set the timeout in ms at which the images change                  | Integer | 5000    |
| width        | Set the width of the slideshow                                    | String  | '100%'  |

## Usage

```jsx
import React from "react";
import ReactSliding from "react-sliding";

const slides = ["images/bee.jpg", "images/bridge.jpg", "images/cornfield.jpg", "images/deer.jpg"];

const Example = () => (
  <div style={{ position: "relative" }}>
    <ReactSliding slides={slides} />
  </div>
);
export default Example;
```

## License

MIT © [barlow21](https://github.com/barlow21)

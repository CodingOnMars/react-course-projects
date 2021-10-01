import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // console.log(hexColor); // hex value provided by library
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // console.log(bcg); // returns rgb values

  // NOTE: fallback in case Values.js library won't return hex value
  const hex = rgbToHex(...rgb);
  // String with hex value
  const hexValue = `#${hexColor ? hexColor : hex}`;

  return (
    <article
      // Make text white for dark backgrounds
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
    </article>
  );
};

export default SingleColor;

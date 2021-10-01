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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      // Make text white for dark backgrounds
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      // When clicking on color item, show alert text
      // and copy hex value to clipboard
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4 className='tour-title'>{name}</h4>
          <p className='tour-price'>${price}</p>
        </div>
        <p>{info}</p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;

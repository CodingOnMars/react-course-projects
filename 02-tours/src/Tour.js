import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4 className='tour-title'>{name}</h4>
          <p className='tour-price'>${price}</p>
        </div>
        {/* If readMore is true, show full info, if not - show only first 200 characters */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}...
          {/* Toggle setReadMore value */}
          <button onClick={() => setReadMore(!readMore)}>
            {/* If readMore is true (i.e. text is expanded), display 'Show less', if not = display 'Read more' */}
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

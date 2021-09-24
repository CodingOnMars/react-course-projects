import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt='person photo' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <p className='author'>{name}</p>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>suprise me</button>
    </article>
  );
};

export default Review;

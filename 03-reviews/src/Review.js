import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // NOTE: Math.random could generate same number multiple times
    // To avoid that and always get a new number we set up condition
    // If random number is equal to current index, add 1
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // console.log(randomNumber);
    setIndex(checkNumber(randomNumber));
  };

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
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;

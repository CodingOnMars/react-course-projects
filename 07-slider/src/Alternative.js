import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // NOTE: Alternative approach using functions instead of useEffect
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  /* Adding useEffect to properly show prev and next slides
  useEffect(() => {
    const lastIndex = people.length - 1;
    // Show prev slide
    if (index < 0) {
      setIndex(lastIndex);
    }
    // Show first slide if no new slides left when clicking Next button
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  */

  // Autoplay
  // Show next slide every 5sec
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    /* 
    !NOTE: We need to add cleanup function
    otherwise every time we click prev/next buttons,
    we'll invoke setInterval
    */
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';

          {
            /* NOTE: Add active class if personIndex matches index value. Since we set up default index value as 0, first item from data.js will be displayed by default */
          }
          if (personIndex === index) {
            position = 'activeSlide';
          }
          {
            /* Display last item in slider left to the active */
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img className='person-img' src={image} alt={name} />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

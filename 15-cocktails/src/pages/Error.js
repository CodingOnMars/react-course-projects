import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
        <h1>Oops! This page does not exist</h1>
        <Link className='btn btn-primary' to='/'>
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;

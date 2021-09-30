import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: by default form returns a string
    // console.log(typeof count);
    let amount = parseInt(count);
    // console.log(typeof amount); // now returns a number
    if (count <= 0) {
      amount = 0;
    }

    if (count > 8) {
      amount = 8;
    }
    // NOTE: data returns an array with all items. To return amount equal to input value, we use slice() method
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs (8 max):</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

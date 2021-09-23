import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    // If tour id does not match id, it will be return to newTours array.
    // If it does not match, it will not be returned to newTours array
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    // NOTE: when fetch loading set setLoading to true. In case if useState(false).
    // Technically, in our case, we don't need it here since we set up useState(true)
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours); // returns an array with 5 tour objects, to see it we need to set up useEffect() first
      setLoading(false); // hide title with 'Loading...'
      setTours(tours); // show Tours component
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []); // [] - empty dependency array (list), run only once, on initial render

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // If tours array length is 0 (i.e., no tours left on the screen), display 'No tours left'
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          {/* On button click fetch tours from API and display them on the screen (in Tours component) */}
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

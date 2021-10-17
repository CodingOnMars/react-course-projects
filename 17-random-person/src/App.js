import { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('Name');
  const [value, setValue] = useState('Random person');

  const handleValue = (e) => {
    console.log(e.target);
  };

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            className='user-img'
            // NOTE: If a person is an object (is not null), look for an image property. If not, display default image
            src={(person && person.image) || defaultImage}
            alt='Random user'
          />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button className='icon' data-label='name' onClick={handleValue}>
              <FaUser />
            </button>
            <button className='icon' data-label='email' onClick={handleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onClick={handleValue}>
              <FaCalendarTimes />
            </button>
            <button className='icon' data-label='street' onClick={handleValue}>
              <FaMap />
            </button>
            <button className='icon' data-label='phone' onClick={handleValue}>
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onClick={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button'>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

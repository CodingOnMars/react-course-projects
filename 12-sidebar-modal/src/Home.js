import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {
  // const data = useGlobalContext();
  // // console.log(data); // returns AppContext.Provider value

  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;

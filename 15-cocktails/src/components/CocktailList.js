import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails); // if fetch was successful returns an array with 25 objects that contain data about cocktails (id, name, image, info, glass)

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>No cocktails match your search criteria</h2>
    );
  }

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
};

export default CocktailList;

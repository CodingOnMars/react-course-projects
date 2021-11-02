import React, { useState, useContext, useEffect } from 'react';
import useFetch from './useFetch';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

// console.log(API_ENDPOINT); // checking if the key from .env file is displayed correctly

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState({ show: false, msg: '' });
  // const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('batman');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  // NOTE: this code left for reference and its functionality was replaced with useFetch custom hook

  // // fetchMovies will run every time we type query to the search
  // const fetchMovie = async (url) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     // console.log(response);
  //     const data = await response.json();
  //     // console.log(data);

  //     if (data.Response === 'True') {
  //       setMovies(data.Search);
  //       setError({ show: false, msg: '' });
  //     } else {
  //       setError({ show: true, msg: data.Error });
  //     }

  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovie(`${API_ENDPOINT}&s=${query}`);
  // }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../Components/UI/Header';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=c225640b9109317dc84c9f661f0ca0ba&include_adult=false&include_video=false&language=sv-SE&page=1&sort_by=popularity.desc'
    );

    console.log(result.data.results);
    setMovies(result.data.results);
  };

  return (
    <>
      <Header title='Populära Filmer' />
      {movies.map((movie) => (
        <img src={movie.poster_path} alt={movie.title} />
      ))}
    </>
  );
};

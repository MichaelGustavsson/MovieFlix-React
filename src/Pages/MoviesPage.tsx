import { useState, useEffect } from 'react';
import { Header } from '../Components/UI/Header';
import { IMovie } from '../Models/IMovie';
import { GridList } from '../Components/GridList';
import { LoadMovies } from '../Utilities/LoadMovies';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setMovies(await LoadMovies('discover/movie'));
  };

  return (
    <>
      <Header title='Populära Filmer' />
      <GridList movies={movies} />
    </>
  );
};

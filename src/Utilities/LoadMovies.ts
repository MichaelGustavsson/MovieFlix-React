import axios from 'axios';
import { IMovie } from '../Models/IMovie';

export const LoadMovies = async (endpoint: string): Promise<IMovie[]> => {
  const key = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const options = import.meta.env.VITE_LANGUAGE;

  const url = `${baseUrl}${endpoint}?api_key=${key}&language=${options}`;
  console.log(url);

  console.log(key, baseUrl, options);
  const result = await axios.get(url);
  // const result = await axios.get(
  //   'https://api.themoviedb.org/3/discover/movie?api_key=c225640b9109317dc84c9f661f0ca0ba&include_adult=false&include_video=false&language=sv-SE&page=1&sort_by=popularity.desc'
  // );

  return result.data.results;
};

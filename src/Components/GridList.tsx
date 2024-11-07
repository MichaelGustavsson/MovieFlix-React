import { IMovie } from '../Models/IMovie';

import styles from './gridlist.module.css';
import { Item } from './Item';

export const GridList = ({ movies }: { movies: IMovie[] }) => {
  return (
    <section className={styles.grid}>
      {movies.map((movie: IMovie) => (
        <Item key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

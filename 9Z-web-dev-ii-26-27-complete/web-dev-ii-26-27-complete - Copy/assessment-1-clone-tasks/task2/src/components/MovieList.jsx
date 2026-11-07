import MovieCard from './MovieCard.jsx';
import { movies } from '../data/movies.js';

/**
 * Chooses the desktop card style by position in the list:
 * 1st = featured, 2nd and 3rd = standard, the rest = horizontal.
 */
function getVariant(index) {
  if (index === 0) return 'featured';
  if (index <= 2) return 'standard';
  return 'horizontal';
}

/** Renders all movies in a responsive CSS Grid. */
export default function MovieList() {
  return (
    <section className="movie-list" aria-label="Movies">
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} variant={getVariant(index)} eager={index < 2} />
      ))}
    </section>
  );
}

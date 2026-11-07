/**
 * One reusable movie card. The `variant` prop only adds a modifier class:
 *   featured   - full-width poster, text and button side by side (desktop)
 *   standard   - poster on top, text and button underneath
 *   horizontal - poster on the left, text and button on the right (desktop)
 * Tablet and mobile styles override these arrangements in CSS.
 */
export default function MovieCard({ movie, variant, eager = false }) {
  const { title, description, poster, posterAlt } = movie;

  return (
    <article className={`movie-card movie-card--${variant}`}>
      <img
        className="movie-card__poster"
        src={poster}
        alt={posterAlt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />

      <div className="movie-card__body">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__description">{description}</p>
        </div>

        <button className="button movie-card__button" type="button">
          Watch Now
        </button>
      </div>
    </article>
  );
}

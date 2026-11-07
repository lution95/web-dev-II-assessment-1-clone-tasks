/** Genres shown in the header navigation. */
const genres = ['Action', 'Comedy', 'Romance', 'Drama'];

/** Genre navigation. Hidden on mobile by CSS, per the mobile wireframe. */
export default function Navigation() {
  return (
    <nav className="site-nav" aria-label="Genres">
      <ul className="site-nav__list">
        {genres.map((genre) => (
          <li key={genre}>
            <a className="site-nav__link" href={`#${genre.toLowerCase()}`}>
              {genre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

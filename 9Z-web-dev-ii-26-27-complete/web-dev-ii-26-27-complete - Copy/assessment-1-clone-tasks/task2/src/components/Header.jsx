import Navigation from './Navigation.jsx';
import SearchButton from './SearchButton.jsx';

/**
 * Site header: logo on the left, genre navigation in the middle
 * (hidden on mobile) and the search button on the right.
 */
export default function Header() {
  return (
    <header className="site-header">
      <a className="site-header__logo" href="#top" aria-label="watch.it home">
        watch.it
      </a>
      <Navigation />
      <SearchButton />
    </header>
  );
}

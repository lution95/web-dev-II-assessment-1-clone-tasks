import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';

/**
 * Root component: the site header followed by the primary content area.
 * The layout of the movie cards changes with the viewport width (see
 * styles/global.css) - the React tree itself stays the same.
 */
export default function App() {
  return (
    <>
      <Header />

      <main className="page-main">
        <div className="main-content">
          <MovieList />
        </div>
      </main>
    </>
  );
}

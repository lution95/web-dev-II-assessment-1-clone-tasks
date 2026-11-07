import { logo } from '../data/media.js';

/** Site header: the Erased Tapes logo, centred, 200px wide. */
export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="site-header__logo-link" aria-label="Erased Tapes home">
        <img className="site-header__logo" src={logo} alt="Erased Tapes logo" />
      </a>
    </header>
  );
}

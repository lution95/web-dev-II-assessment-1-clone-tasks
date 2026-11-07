import { copyrightText } from '../data/content.js';
import Navigation from './Navigation.jsx';
import SocialIcons from './SocialIcons.jsx';

/** Full-width footer (#14181d): links, copyright and social icons. */
export default function Footer() {
  return (
    <footer className="site-footer">
      <Navigation className="footer-nav" label="Footer navigation" />
      <p className="site-footer__copyright">{copyrightText}</p>
      <SocialIcons className="site-footer__social" />
    </footer>
  );
}

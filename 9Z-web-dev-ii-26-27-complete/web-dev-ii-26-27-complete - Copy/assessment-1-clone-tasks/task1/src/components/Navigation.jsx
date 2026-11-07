import { navLinks } from '../data/navLinks.js';

/**
 * Primary navigation shown underneath the logo.
 * The footer reuses the same links, so `className` lets the parent
 * pick the BEM block while the markup stays identical.
 */
export default function Navigation({ className = 'main-nav', label = 'Main navigation' }) {
  return (
    <nav className={className} aria-label={label}>
      <ul className={`${className}__list`}>
        {navLinks.map(({ label: text, href }) => (
          <li key={text} className={`${className}__item`}>
            <a className={`${className}__link`} href={href}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

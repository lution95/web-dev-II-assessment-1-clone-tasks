import { socialIcons } from '../data/media.js';

/** Row of three 50px social icons with 10px between them. */
export default function SocialIcons({ direction = 'row', className = '' }) {
  return (
    <ul className={`social-icons social-icons--${direction} ${className}`.trim()}>
      {socialIcons.map(({ name, src, href, mono }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={name}>
            <img
              className={`social-icons__image${mono ? ' social-icons__image--mono' : ''}`}
              src={src}
              alt=""
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

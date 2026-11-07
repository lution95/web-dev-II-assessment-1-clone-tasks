/**
 * Every image used by the page, imported so Vite can fingerprint and
 * bundle them. The files stay in the supplied /assets folder.
 */
import logo from '../../assets/logo.svg';
import profilePicture from '../../assets/profile_picture.jpg';

import articulation from '../../assets/articulation.jpg';
import blurred from '../../assets/blurred.jpg';
import eulogyForEvolution from '../../assets/eulogy-for-evolution.jpg';
import theCell from '../../assets/the-cell.jpg';
import allEncores from '../../assets/all-encores.jpg';

import facebookIcon from '../../assets/facebook-icon.png';
import instagramIcon from '../../assets/instagram-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';

export { logo, profilePicture };

/**
 * The wireframe has five gallery slots: one large featured cover and four
 * small ones. The assets folder has six covers; encores-2 is left out
 * because it is a near-duplicate of all-encores.
 */
export const featuredAlbum = { src: articulation, alt: 'Articulation album artwork' };

export const smallAlbums = [
  { src: blurred, alt: 'Blurred album artwork' },
  { src: eulogyForEvolution, alt: 'Eulogy for Evolution album artwork' },
  { src: theCell, alt: 'The Cell album artwork' },
  { src: allEncores, alt: 'All Encores album artwork' },
];

/** `mono` icons are white glyphs on transparent, so they get a dark disc. */
export const socialIcons = [
  { name: 'Facebook', src: facebookIcon, href: 'https://www.facebook.com', mono: false },
  { name: 'Instagram', src: instagramIcon, href: 'https://www.instagram.com', mono: false },
  { name: 'Twitter', src: twitterIcon, href: 'https://www.twitter.com', mono: true },
];

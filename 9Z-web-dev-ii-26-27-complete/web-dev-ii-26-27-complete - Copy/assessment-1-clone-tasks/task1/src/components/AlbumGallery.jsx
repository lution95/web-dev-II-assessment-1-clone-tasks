import { featuredAlbum, smallAlbums } from '../data/media.js';

/**
 * Album artwork gallery: one large featured cover on the left and
 * four smaller covers in a 2x2 grid on the right (CSS Grid).
 */
export default function AlbumGallery() {
  return (
    <section className="gallery" aria-label="Album artwork">
      <figure className="gallery__item gallery__item--featured">
        <img className="gallery__image" src={featuredAlbum.src} alt={featuredAlbum.alt} />
      </figure>

      {smallAlbums.map(({ src, alt }) => (
        <figure className="gallery__item" key={src}>
          <img className="gallery__image" src={src} alt={alt} loading="lazy" />
        </figure>
      ))}
    </section>
  );
}

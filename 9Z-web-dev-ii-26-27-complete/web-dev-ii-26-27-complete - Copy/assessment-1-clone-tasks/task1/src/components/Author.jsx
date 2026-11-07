import { authorText } from '../data/content.js';
import { profilePicture } from '../data/media.js';
import SocialIcons from './SocialIcons.jsx';

/** Author section: heading + bio, 200px photo and stacked social icons (Flexbox). */
export default function Author() {
  return (
    <section className="author" id="our-story" aria-labelledby="author-heading">
      <div className="author__text">
        <h2 className="author__heading" id="author-heading">
          The Author
        </h2>
        <p className="author__bio">{authorText}</p>
      </div>

      <img className="author__photo" src={profilePicture} alt="Portrait of the author" />

      <SocialIcons direction="column" className="author__social" />
    </section>
  );
}

import { comments } from '../data/content.js';

/** Reader comments: username in bold with the comment text below it. */
export default function Comments() {
  return (
    <section className="comments" aria-labelledby="comments-heading">
      <h2 className="comments__heading" id="comments-heading">
        Comments
      </h2>

      <ul className="comments__list">
        {comments.map(({ username, text }) => (
          <li className="comment" key={username}>
            <strong className="comment__username">{username}</strong>
            <p className="comment__text">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

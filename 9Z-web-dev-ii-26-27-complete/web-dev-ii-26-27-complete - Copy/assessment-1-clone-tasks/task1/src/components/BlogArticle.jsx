import {
  articleTitle,
  articleSubtitle,
  articleIntro,
  articleBlocks,
} from '../data/content.js';

const COLUMN_COUNT = 3;

/**
 * Splits a flat list into `count` consecutive, equally sized chunks.
 * With the 12 supplied blocks this yields the exact flow in the wireframe:
 *   column 1: heading + 3 paragraphs
 *   column 2: paragraph, heading, 2 paragraphs
 *   column 3: paragraph, heading, 2 paragraphs
 */
function splitIntoColumns(items, count) {
  const size = Math.ceil(items.length / count);
  return Array.from({ length: count }, (_, i) => items.slice(i * size, (i + 1) * size));
}

/** Main article: large title, bigger intro paragraph and a 3-column body. */
export default function BlogArticle() {
  const columns = splitIntoColumns(articleBlocks, COLUMN_COUNT);

  return (
    <article className="article" id="our-blog">
      <h1 className="article__title">
        <span className="article__title-main">{articleTitle}</span>
        <span className="article__title-sub">{articleSubtitle}</span>
      </h1>

      <p className="article__intro">{articleIntro}</p>

      <div className="article__columns">
        {columns.map((blocks, columnIndex) => (
          <div className="article__column" key={columnIndex}>
            {blocks.map((block, i) =>
              block.type === 'heading' ? (
                <h2 className="article__heading" key={i}>
                  {block.text}
                </h2>
              ) : (
                <p className="article__paragraph" key={i}>
                  {block.text}
                </p>
              )
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

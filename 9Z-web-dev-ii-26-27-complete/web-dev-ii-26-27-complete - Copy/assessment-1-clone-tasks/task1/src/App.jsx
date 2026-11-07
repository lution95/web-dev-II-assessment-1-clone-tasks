import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import BlogArticle from './components/BlogArticle.jsx';
import AlbumGallery from './components/AlbumGallery.jsx';
import Author from './components/Author.jsx';
import Comments from './components/Comments.jsx';
import Footer from './components/Footer.jsx';

/**
 * Root component. Composes the page in the same order as the wireframe:
 * header + navigation, the white content column (article, gallery,
 * author, comments) and the full-width footer.
 */
export default function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Navigation />

        <main className="content">
          <BlogArticle />
          <AlbumGallery />
          <Author />
          <Comments />
        </main>
      </div>

      <Footer />
    </>
  );
}

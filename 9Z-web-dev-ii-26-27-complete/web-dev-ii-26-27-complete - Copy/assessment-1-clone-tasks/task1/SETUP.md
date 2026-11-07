# Task 1 - Run notes

React + Vite project (function components only).

```bash
cd assessment-1-clone-tasks/task-1-layout-in-react
npm install
npm run dev      # open the local URL shown in the terminal
npm run build    # production build check
```

## Structure
```
src/
  components/  Header, Navigation, BlogArticle, AlbumGallery,
               Author, SocialIcons, Comments, Footer
  data/        content.js (text from assets/text-content.md),
               media.js (image imports), navLinks.js
  styles/      global.css (tokens, layout, responsive rules)
  App.jsx, main.jsx
assets/        supplied images + text (unchanged)
```

## Spec checklist
- Page `#e9e9e9`, content white, footer `#14181d`
- Logo 200px, author photo 200px, social icons 50px with 10px gaps, 50px standard spacing
- Fonts from Google Fonts: Protest Guerrilla (headings), Josefin Sans (text)
- Headings 3em, title much larger, first paragraph larger
- CSS Grid: 3-column article, 2fr/1fr/1fr gallery (featured spans 2 rows)
- Flexbox: author section, social icons, footer

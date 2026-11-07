# Task 2 - Run notes

React + Vite project (function components only), mobile-first CSS.

```bash
cd assessment-1-clone-tasks/task-2-responsive-layouts
npm install
npm run dev      # open the local URL shown in the terminal
npm run build    # production build check
```

## Structure
```
src/
  components/  Header, Navigation, SearchButton, MovieList, MovieCard
  data/        movies.js (titles, descriptions, posters)
  styles/      global.css (tokens + mobile / tablet / desktop layouts)
  App.jsx, main.jsx
assets/        supplied posters + text (unchanged)
```

## Layouts
| Width | Layout |
|---|---|
| < 720px | 1 column, no genre links, large gap 16px |
| 720px+ | 2 columns, genre links, logo 3em, large gap 32px |
| 1024px+ | featured card, 2 standard cards, 3 horizontal cards, large gap 48px |

One reusable `MovieCard`; the `variant` prop (`featured`, `standard`,
`horizontal`) only adds a CSS modifier class.

Brand colours: `#070410`, `#231651`, `#4DCCBD`, `#EEF36A`, `#FFFFFF`.
Container max-width 900px. Fonts: Teko (logo, headings, buttons), Lato (text).

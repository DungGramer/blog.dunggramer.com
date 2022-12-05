import ThemeProvider from 'providers/ThemeProvider';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/atom-one-dark.css';
import 'styles/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

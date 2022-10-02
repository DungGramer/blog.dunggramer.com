import ThemeProvider from 'providers/ThemeProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/atom-one-dark.css';
import 'styles/index.scss';

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

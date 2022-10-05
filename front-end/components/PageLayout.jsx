import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';
import Head from 'next/head';

export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
    <Head>
      <meta name='dmca-site-verification' content='cGtlak9odldLOUttMjEzKzJwNkovSTRLQVBxaVo3VjVpVU91UHlMbUR0Yz01' />
    </Head>
    <div className={theme.type}>
      <Container>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className="page-footer">
          <div>
            <a href="#">courses</a>
            {' | '}
            <a href="#">github</a>
            {' | '}
            <a href="#">facebook</a>
            <a href="//www.dmca.com/Protection/Status.aspx?ID=960e73fd-fc19-4354-a6f2-b4574158f75f" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=960e73fd-fc19-4354-a6f2-b4574158f75f"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
          </div>
        </footer>
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
    </>
  );
}

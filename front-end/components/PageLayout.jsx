import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';
import Head from 'next/head';
import HeadMeta from 'components/HeadMeta';
import Header from 'components/Header';
import Image from 'next/image';
import Script from 'next/script';

export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <HeadMeta />
      <div className={theme.type}>
        <Container>
          {/* <Navbar theme={theme} toggleTheme={toggleTheme} /> */}
          <Header />
          <div className={`page-wrapper ${className}`}>{children}</div>
          <footer className="page-footer">
            <div>
              <a href="#">courses</a>
              {' | '}
              <a href="#">github</a>
              {' | '}
              <a href="#">facebook</a>
              <a
                href="//www.dmca.com/Protection/Status.aspx?ID=960e73fd-fc19-4354-a6f2-b4574158f75f&refurl=https://blog.dunggramer.com/"
                title="DMCA.com Protection Status"
                className="dmca-badge"
              >
                {' '}
                <Image
                  src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=960e73fd-fc19-4354-a6f2-b4574158f75f"
                  alt="DMCA.com Protection Status"
                  width={121}
                  height={23}
                  layout="intrinsic"
                />
              </a>{' '}
              <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js" async />
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

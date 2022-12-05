import clsx from 'clsx';
import useToggle from 'hooks/useToggle';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

const NavRoutes = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Courses',
    href: '/courses',
  },
  {
    name: 'Github',
    href: 'https://github.com/DungGramer/',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/dunggramer/',
  },
];

const Header = () => {
  const [isExpanded, toggleExpansion] = useToggle();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="logo"
          height={48}
          width={48}
          layout="intrinsic"
        />
      </Link>

      <div className={styles['icon-nav']} onClick={toggleExpansion}>
        <i className={clsx(styles.hamburger, { [styles.open]: isExpanded })} />
      </div>

      <nav className={styles.nav}>
        <ul>
          {NavRoutes.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

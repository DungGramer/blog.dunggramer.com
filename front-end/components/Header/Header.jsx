import Image from 'next/image';
import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="logo" height={24} width={24} layout="intrinsic" />

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

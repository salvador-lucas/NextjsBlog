import Link from 'next/link';
import React, { FC } from 'react';
import classes from './main-header.module.css';
import Logo from './logo';

const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.navigation}>
        <ul className={classes.item}>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">All posts</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

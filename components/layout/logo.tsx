import Link from 'next/link';
import React, { FC } from 'react';

import classes from './main-header.module.css';

const Logo: FC = () => {
  return (
    <div className={classes.logo}>
      <Link href="/">NextJS Blog</Link>
    </div>
  );
};

export default Logo;

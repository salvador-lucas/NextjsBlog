import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

import classes from './button.module.css';

interface ButtonProps {
  href?: string;
  children?: ReactNode;
  onCLick?: () => void;
}

const Button: FC<ButtonProps> = ({ href, children, onCLick }) => {
  if (href)
    return (
      <Link href={href} className={classes.btn}>
        {children}
      </Link>
    );
  return (
    <button onClick={onCLick} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;

import * as React from 'react';

import s from './Button.module.css';
import clsx from 'clsx';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  ...props
}: ButtonProps): React.ReactElement => {
  return <button className={clsx(s.button, className)} {...props} />;
};

import clsx from 'clsx';
import * as React from 'react';
import s from './Input.module.css';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

export const Input = ({
  className,
  ...props
}: InputProps): React.ReactElement => {
  return <input className={clsx(className, s.input)} type="text" {...props} />;
};

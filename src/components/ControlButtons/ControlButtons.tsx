import * as React from 'react';
import { Input } from '../ui/Input';
import s from './ControlButtons.module.css';
import { Block } from '../ui/Block';

export type ControlButtonsProps = {
  before?: React.ReactNode;
  after?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
};

export const ControlButtons = ({
  value,
  onChange,
  before,
  after,
}: ControlButtonsProps): React.ReactElement => {
  const handleChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { value } }) => {
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <Block className={s.control}>
      {before}
      <Input value={value} onChange={handleChange} />
      {after}
    </Block>
  );
};

import { Block } from '../ui/Block';
import { Input } from '../ui/Input';
import s from './ControlAutocomplete.module.css';
import { Option } from './Option';
import { OptionEntity } from './Option/types';
import * as React from 'react';

const LOADING_OPTION: OptionEntity = { title: 'Loading...' };

export type ControlAutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
  isLoading?: boolean;
  options?: OptionEntity[] | null;
  maxOptions?: number;
  onClick?: (option: OptionEntity) => void;
};

export const ControlAutocomplete = ({
  value,
  onChange,
  isLoading,
  options,
  maxOptions = Infinity,
  onClick,
}: ControlAutocompleteProps): React.ReactElement => {
  const showOptions = Boolean(isLoading || options?.length);

  const handleInputChange = React.useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    ({ target: { value } }) => {
      onChange?.(value);
    },
    [onChange]
  );

  const preparedOptions = React.useMemo(() => {
    if (!options) {
      return null;
    }

    return options.length > maxOptions ? options.slice(0, maxOptions) : options;
  }, [options, maxOptions]);

  return (
    <Block>
      <Input value={value} onChange={handleInputChange} />
      <div className={s['options-wrapper']}>
        {showOptions && (
          <div className={s.options}>
            {isLoading ? (
              <Option entity={LOADING_OPTION} />
            ) : (
              preparedOptions?.map((option) => (
                <Option key={option.title} entity={option} onClick={onClick} />
              ))
            )}
          </div>
        )}
      </div>
    </Block>
  );
};

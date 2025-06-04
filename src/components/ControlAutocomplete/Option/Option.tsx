import { OptionEntity } from './types';
import s from './Option.module.css';
import * as React from 'react';

type OptionProps = {
  entity: OptionEntity;
  onClick?: (option: OptionEntity) => void;
};

export const Option = ({
  entity,
  onClick,
}: OptionProps): React.ReactElement => {
  const handleClick = React.useCallback(() => {
    onClick?.(entity);
  }, [entity, onClick]);

  return (
    <div className={s.option} onClick={handleClick}>
      <div className={s.title}>{entity.title}</div>
      {entity.subtitle && <div className={s.subtitle}>{entity.subtitle}</div>}
      {entity.image && <div className={s.image}>{entity.image}</div>}
    </div>
  );
};

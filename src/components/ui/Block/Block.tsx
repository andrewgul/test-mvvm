import clsx from 'clsx';
import s from './Block.module.css';

type BlockProps = React.HTMLAttributes<HTMLDivElement>;

export const Block = ({
  className,
  ...props
}: BlockProps): React.ReactElement => {
  return <div className={clsx(className, s.block)} {...props} />;
};

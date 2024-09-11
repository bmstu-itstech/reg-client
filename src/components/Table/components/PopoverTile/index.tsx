import type {FC} from 'react';
import Props from './PopoverTile.props';

const PopoverTile: FC<Props> = ({
  onClick,
  icon,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      {...props}
      className={`flex gap-2 w-full  cursor-pointer items-center justify-start ${className}`}>
      {icon}
      <p className='text-nowrap select-none font-normal text-base'>
        {children}
      </p>
    </div>
  );
};

export default PopoverTile;

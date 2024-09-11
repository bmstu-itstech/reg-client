import type {FC} from 'react';
import Props from './TableBody.props';
import OptionsIcon from '@/components/icons/OptionsIcon';
import {useState} from 'react';
import Popover from '@/components/Table/components/Popover';

const TableBody: FC<Props> = ({
  left,
  right,
  options,
  className = '',
  ...props
}) => {
  const [isPopOverVisible, setPopOverVisible] = useState(false);

  const handleMouseEnter = () => {
    setPopOverVisible(true);
  };

  const handleMouseLeave = () => {
    setPopOverVisible(false);
  };
  return (
    <div
      className={`${className} flex justify-between w-full bg-back-secondary  items-center p-4 text-white`}
      {...props}>
      <p className='w-44 text-nowrap'>{left}</p>
      <div className='flex w-full  text-label-dark-secondary justify-end items-center text-nowrap'>
        {right?.map((rightItem, index) => {
          return (
            <p
              key={index}
              className={`${index + 1 == right.length && options ? 'w-38' : 'w-44'} text-nowrap`}>
              {rightItem}
            </p>
          );
        })}
        {options && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative cursor-pointer h-full'>
            <OptionsIcon />
            {isPopOverVisible && (
              <Popover options={options} className='absolute' />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableBody;

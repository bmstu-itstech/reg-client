import type {FC} from 'react';
import Props from './Popover.props';
import OptionsIcon from '@/components/icons/OptionsIcon';
import {useState} from 'react';
import PopoverTile from '@/components/Table/components/PopoverTile';

const Popover: FC<Props> = ({options, className = '', ...props}) => {
  return (
    <div
      className={`${className} flex flex-col justify-between w-fit bg-back-elevated
        items-center p-4 text-white  rounded-2xl right-full  gap-4 shadow-base z-10 `}
      {...props}>
      {options?.map((item, index) => {
        return (
          <PopoverTile icon={item.icon} key={index}>
            {item.text}
          </PopoverTile>
        );
      })}
    </div>
  );
};

export default Popover;

import Image from 'next/image';
import icon from '@/assets/icons/trash-icon.svg';
import React, {FC} from 'react';
import Props from './TrashIcon.props';

const TrashIcon: FC<Props> = ({className, ...props}) => {
    return (
        <Image
            src={icon}
            alt={'trash-icon'}
            className={`aspect-square ${className}`}
            {...props}
        />
    );
};

export default TrashIcon;

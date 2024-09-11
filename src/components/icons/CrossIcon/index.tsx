import Image from 'next/image';
import icon from '@/assets/icons/cross-icon.svg';
import React, {FC} from 'react';
import Props from './CrossIcon.props';

const CrossIcon: FC<Props> = ({className, ...props}) => {
    return (
        <Image
            src={icon}
            alt={'cross-icon'}
            className={`aspect-square ${className}`}
            {...props}
        />
    );
};

export default CrossIcon;

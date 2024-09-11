import Image from 'next/image';
import icon from '@/assets/icons/copy-icon.svg';
import React, {FC} from 'react';
import Props from './CopyIcon.props';

const CopyIcon: FC<Props> = ({className, ...props}) => {
    return (
        <Image
            src={icon}
            alt={'copy-icon'}
            className={`aspect-square ${className}`}
            {...props}
        />
    );
};

export default CopyIcon;

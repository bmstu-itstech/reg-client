import Image from 'next/image';
import icon from '@/assets/icons/copy-address-icon.svg';
import React, {FC} from 'react';
import Props from './CopyAddressIcon.props';

const CopyAddressIcon: FC<Props> = ({className, ...props}) => {
    return (
        <Image
            src={icon}
            alt={'copy-address-icon'}
            className={`aspect-square ${className}`}
            {...props}
        />
    );
};

export default CopyAddressIcon;

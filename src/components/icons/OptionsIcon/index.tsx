import Image from 'next/image';
import icon from '@/assets/icons/options-icon.svg';
import React, {FC} from 'react';
import Props from './OptionsIcon.props';

const OptionsIcon: FC<Props> = ({className, ...props}) => {
    return (
        <Image
            src={icon}
            alt={'options-icon'}
            className={`aspect-square ${className}`}
            {...props}
        />
    );
};

export default OptionsIcon;

import React from 'react';
import Props from './button.props';
import '../Text/index'
import {getClassName}   from "./button.classes";

const Button: React.FC<Props> = ({ label, disabled = false, variant = 'filled', className = '', ...props }) => {
    return (
        <button
            className={`${getClassName(variant, disabled)} ${className}`}
            disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;


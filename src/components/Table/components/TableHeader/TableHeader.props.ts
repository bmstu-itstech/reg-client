import type {HTMLAttributes} from 'react';


export default interface Props extends HTMLAttributes<HTMLDivElement> {
    left?: string;
    right?: string[];
}

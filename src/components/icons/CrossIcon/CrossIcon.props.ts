import type {DetailedHTMLProps, HTMLAttributes} from 'react';

export default interface Props extends React.HTMLAttributes<HTMLImageElement> {
    width?: number;
    height?: number;
}

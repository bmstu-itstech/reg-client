import type {HTMLAttributes} from 'react';

export interface Option {
  icon: React.ReactElement;
  text: string;
  callback: VoidFunction;
}

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  options?: Option[] | undefined;
}

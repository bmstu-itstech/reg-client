import type {HTMLAttributes} from 'react';
import {Option} from '@/components/Table/components/Popover/Popover.props';
export default interface Props extends HTMLAttributes<HTMLDivElement> {
  left?: string;
  right?: string[];
  options?: Option[];
}

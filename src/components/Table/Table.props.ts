import type {HTMLAttributes} from 'react';
import TableBodyProps  from '@/components/Table/components/TableBody/TableBody.props';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    params: TableBodyProps[];
}

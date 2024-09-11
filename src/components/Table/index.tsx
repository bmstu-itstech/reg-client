import type {FC} from 'react';
import Props from './Table.props';
import TableBody from '@/components/Table/components/TableBody';
import TableHeader from '@/components/Table/components/TableHeader';
import TableLayout from '@/layouts/TableLayout';


const Table: FC<Props> = ({params,title, className = '', ...props}) => {
    return (
        <div className='flex flex-col gap-4'>
            {title && <p className='text-2xl text-white font-normal'>{title}</p>}
            <TableLayout className={`gap-4  ${className}`} {...props}>
                <TableHeader left={params[0].left} right={params[0].right} />
                {params?.slice(1).map((item, index) => {
                return(
                    <TableBody left={item.left} right={item.right} options={item.options} 
                    className={`${index + 1 != params.length? 'border border-support-separator-gray': ''}`} />
                )
                })}
    </TableLayout>
        </div>

    );
};

export default Table;

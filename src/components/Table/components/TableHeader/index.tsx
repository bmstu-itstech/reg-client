import type {FC} from 'react';
import Props from './TableHeader.props';


const TableHeader: FC<Props> = ({
    left,
    right,
    className = '',
    ...props
}) => {
    return (
    <div className={`${className} w-full flex justify-between bg-back-secondary font-semibold text-xs items-center px-4 pt-4 pb-2 text-label-dark-secondary`} {...props}>
            <p className='w-44 text-wrap'>{left}</p>
            <div className='flex justify-end '>
                {right?.map((rightItem, index) => {
                    return (
                      <p
                        key={index}
                        className={`w-44 text-nowrap`}>
                        {rightItem}
                      </p>
                    );
                } )} 
            </div>
    </div>);
};

export default TableHeader;

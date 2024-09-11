import type {FC} from 'react';
import Props from './TableLayout.props';

const TableLayout: FC<Props> = ({children, className, ...props}) => {
  return (
    <div className={`rounded-2.5xl overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};

export default TableLayout;

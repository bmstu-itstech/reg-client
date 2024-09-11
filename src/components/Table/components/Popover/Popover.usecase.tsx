import CopyIcon from '@/components/icons/CopyIcon';
import CrossIcon from '@/components/icons/CrossIcon';
import CopyAddressIcon from '@/components/icons/CopyAddressIcon';
import TrashIcon from '@/components/icons/TrashIcon';

export const tablePopupFull = {
  options: [
    {
      icon: <CopyIcon />,
      text: 'Создать копию',
      callback: () => {},
    },
    {
      icon: <CopyAddressIcon />,
      text: 'Скопировать ссылку',
      callback: () => {},
    },
    {
      icon: <CrossIcon />,
      text: 'Отклонить',
      callback: () => {},
    },
    {
      icon: <TrashIcon />,
      text: 'Удалить',
      callback: () => {},
    },
  ],
};

export const Default = {
  args: {
    ...tablePopupFull,
  },
};

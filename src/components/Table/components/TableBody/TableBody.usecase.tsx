import CopyIcon from '@/components/icons/CopyIcon';
import CrossIcon from '@/components/icons/CrossIcon';
import CopyAddressIcon from '@/components/icons/CopyAddressIcon';
import trashIcon from '@/components/icons/TrashIcon';
import { tablePopupFull } from '@/components/Table/components/Popover/Popover.usecase';

export const tableBodyUsecaseDefault = {
  left: 'left',
  right: ['right']
};

export const tableBodyUsecaseOptions = {
  left: 'left',
  right: ['right'],
  ...tablePopupFull,
};

export const tableBodyUsecaseOnlyLeft = {
  left: 'left',
  ...tablePopupFull,
};

export const tableBodyUsecaseOnlyRight = {
  right: ['right'],
  ...tablePopupFull,
};

export const tableBodyUsecaseFull = {
  left: 'left',
  right: ['right1', 'right2', 'right3'],
  ...tablePopupFull,
};

export const tableBodyUsecaseEmptytemplate = {
  left: 'Пустой шаблон',
  right: ['@its_tech']
};

export const tableBodyUsecaseRegBMStU = {
  left: 'Регистрация на мероприятие МГТУ им.Н.Э.Баумана',
  right: ['@stud_bmstu']
};

export const tableBodyUsecaseRegVolonterMero = {
  left: 'Регистрация волонтёра на мероприятие',
  right: ['@activist_bmstu']
};

export const tableBodyUsecaseRegVolonterHardaton = {
  left: 'Регистрация волонтёра на Хардатон',
  right: ['@CMR'],
};

import {
  tableBodyUsecaseEmptytemplate,
  tableBodyUsecaseFull,
  tableBodyUsecaseRegBMStU,
  tableBodyUsecaseRegVolonterHardaton,
  tableBodyUsecaseRegVolonterMero,
} from './components/TableBody/TableBody.usecase';
import {tableHeaderUsecaseNameAuthor} from '@/components/Table/components/TableHeader/TableHeader.usecase';
import {tableHeaderUsecaseFull} from '@/components/Table/components/TableHeader/TableHeader.usecase';

export const tableUsecaseDefault = [
  tableHeaderUsecaseFull,
  tableBodyUsecaseFull,
  tableBodyUsecaseFull,
  tableBodyUsecaseFull,
  tableBodyUsecaseFull,
  tableBodyUsecaseFull,
  tableBodyUsecaseFull,
  tableBodyUsecaseFull,
  tableBodyUsecaseFull,
];

export const tableUsecaseWithExamples = [
  tableHeaderUsecaseNameAuthor,
  tableBodyUsecaseEmptytemplate,
  tableBodyUsecaseRegBMStU,
  tableBodyUsecaseRegVolonterMero,
  tableBodyUsecaseRegVolonterHardaton,
]


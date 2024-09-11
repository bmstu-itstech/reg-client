import {Meta, StoryObj} from '@storybook/react';
import Props from './TableBody.props';
import TableBody from '.';
import {
  tableBodyUsecaseDefault,
  tableBodyUsecaseFull,
  tableBodyUsecaseOnlyLeft,
  tableBodyUsecaseOptions,
  tableBodyUsecaseOnlyRight,
} from './TableBody.usecase';

const actionsData = {};

const meta: Meta<Props> = {
  component: TableBody,
  args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    ...tableBodyUsecaseDefault,
  },
};

export const Left: Story = {
  args: {
    ...tableBodyUsecaseOnlyLeft,
  },
};

export const Right: Story = {
  args: {
    ...tableBodyUsecaseOnlyRight,
  },
};

export const Options: Story = {
  args: {
    ...tableBodyUsecaseOptions,
  },
};

export const Full: Story = {
  args: {
    ...tableBodyUsecaseFull,
  },
};

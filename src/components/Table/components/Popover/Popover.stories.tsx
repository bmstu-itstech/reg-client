import {Meta, StoryObj} from '@storybook/react';
import Props from './Popover.props';
import Popover from '.';
import {tablePopupFull} from './Popover.usecase';

const actionsData = {};

const meta: Meta<Props> = {
  component: Popover,
  args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    ...tablePopupFull,
  },
};

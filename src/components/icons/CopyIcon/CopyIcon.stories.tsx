import {Meta, StoryObj} from '@storybook/react';
import CopyIcon from '@/components/icons/CopyIcon';
import Props from './CopyIcon.props';

const meta: Meta<Props> = {
    component: CopyIcon,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};

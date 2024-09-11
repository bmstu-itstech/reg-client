import {Meta, StoryObj} from '@storybook/react';
import CopyAddressIcon from '@/components/icons/CopyAddressIcon';
import Props from './CopyAddressIcon.props';

const meta: Meta<Props> = {
    component: CopyAddressIcon,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};

import {Meta, StoryObj} from '@storybook/react';
import Props from '@/layouts/TableLayout/TableLayout.props';
import TableLayout from '@/layouts/TableLayout';

const meta: Meta<Props> = {
    component: TableLayout,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        
    },
};

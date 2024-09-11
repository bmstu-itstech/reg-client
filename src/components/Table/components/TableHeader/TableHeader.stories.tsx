import {Meta, StoryObj} from '@storybook/react';
import Props from './TableHeader.props';
import TableHeader from '.';
import { tableHeaderUsecaseDefault, tableHeaderUsecaseFull, tableHeaderUsecaseOnlyLeft, tableHeaderUsecaseOnlyRight } from './TableHeader.usecase';

const actionsData = {};

const meta: Meta<Props> = {
    component: TableHeader,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        ...tableHeaderUsecaseDefault
    },
};

export const Left: Story = {
    args: {
        ...tableHeaderUsecaseOnlyLeft
    },
};

export const Right: Story = {
    args: {
        ...tableHeaderUsecaseOnlyRight
    },
};

export const Full: Story = {
        args: {
        ...tableHeaderUsecaseFull
    },
}
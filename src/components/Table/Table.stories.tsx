import {Meta, StoryObj} from '@storybook/react';
import Props from './Table.props';
import table from '.';
import { tableUsecaseWithExamples, tableUsecaseDefault } from './Table.usecase';

const actionsData = {};

const meta: Meta<Props> = {
    component: table,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        title: 'Тест',
        params: tableUsecaseDefault,
    },
};


export const Example: Story = {
    args: {
        title: 'Начать с примера:',
        params: tableUsecaseWithExamples,
    },
};
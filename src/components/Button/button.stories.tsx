import {Meta, StoryObj} from '@storybook/react';
import Button from './button';
import Props from "./button.props"

export default {
    title: 'Components/Button',
    component: Button,
    argTypes:{
        onClick:{action: 'clicked'},
    },
} as Meta<Props>;


const testFn = (message:string) =>{
    console.log(message);
};

type Story = StoryObj<Props>;

export const Primary: Story = {
    args: {
        label: 'Удалить',
        variant: 'filled',
        onClick: () => testFn('Primary Button is clicked'),
    },
}

export const Secondary : Story = {
    args: {
        label: 'Мои Боты',
        variant: 'bordered',
        onClick: () => testFn('Primary Button is clicked'),
    },
}

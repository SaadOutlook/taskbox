import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Toolkit/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Topbar = {
  args: {
    context: "Topbar",
    split: true,
    toggled: true,
    label:"Label"
  },
};

export const Toolbar = {
  args: {
    context: "Toolbar",
    split: true,
    toggled: true,
    label:"Label"
  },
};

export const Dialog = {
  args: {
    context: "Dialog",
  split: false,
  toggled: false,
  label:"Label"
  },
};


import { Dropdown } from './Dropdown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Toolkit/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    item_list: { control: 'object' },

  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Toolbar = {
  args: {
    context: "Toolbar",
    item_list: 
    [ { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
    { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
    { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
],
 
  },
};


export const Input = {
    args: {
      context: "Input",
      data_list: ["Blank Line"],
 
    },
  };




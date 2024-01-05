import { Tabs } from "./Tabs";

export default {
    title: 'Toolkit/Tabs',
    component: Tabs,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
}

export const Wizard = {
    args: {
        itemList: ["General Options","Query","Client Setup"],
        context:"Wizard"
    },
  };

  export const Panel = {
    args: {
        itemList: ["General Options","Query","Client Setup"],
        context:"Panel"
    },
  };
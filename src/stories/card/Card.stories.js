import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Toolkit/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    context: {control: 'disabled'},
    type: {control: 'radio', if: { arg: 'context',eq:"Flowcard" }},
    parentItem: {control: 'text', if: { arg: 'context',eq:"Flowcard" }},
    childItemsList: {control: 'array',  if: { arg: 'context',eq:"Flowcard" }},
    acceptsInput: {control:'boolean', if: { arg: 'context',eq:"Flowcard" }},
    givesOutput:{control:'boolean', if: { arg: 'context',eq:"Flowcard" }},
    expandable:{control:'boolean', if: { arg: 'context',neq:"Flowcard" }}
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FlowCard = {
  args: {
    context: "Flowcard",
    title: "Excel Source",
    type: "Source",
    parentItem: "Excel Source",
    childItemsList: ["Webinar_Heading"],
    acceptsInput:true,
    givesOutput:true
  },
};

export const DefaultCard = {
    args: {
      context: "Right Panel Card",
      
      title: "Pattern Details",
      expandable:true,
    },
  };




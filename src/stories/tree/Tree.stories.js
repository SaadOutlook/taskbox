import { Tree } from "./Tree";

export default {
    title: 'Toolkit/Tree',
    component: Tree,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },

}

export const Normal = {
    args:{
        items:[{label:"Server Connections",hasChild:true,childs:[{label:"Inner Child",hasChild:true,childs:[{label:"Inside Child"}]}]},
    {label:"Server Connections",hasChild:true,childs:[{label:"Inner Child",hasChild:true,childs:[{label:"Inside Child"}]}]}
    ]
    }
}
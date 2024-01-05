import { Wizard } from "./Wizard";

export default {
    title: 'Toolkit/Wizard',
    component: Wizard,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },

}

export const Normal = {
    args: {
        title: "DatabaseSource : Database Connection",
        tabs: false
    },
}
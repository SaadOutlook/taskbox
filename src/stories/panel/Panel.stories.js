import { DockPanel } from "./Panel";


export default {
    title:'Toolkit/Dock Panel',
    component: DockPanel,
    parameters:{
        layout: 'centered',
    },
    argTypes: {
        // item_list: { control: 'object' },
    
      },

};

export const Normal = {
    args:{
        title:"Toolbox",
        bottomMenu:["Verify","Git Branches"],
        leftMenu:["Git Changes","Git Branches"],
        rightMenu:["Report Properties","Git Branches"],
        showBottom:true,
        showLeft:true,
        showRight:true,
     }
}
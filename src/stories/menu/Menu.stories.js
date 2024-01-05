import { Menu } from "./Menu";


export default {
    title:'Toolkit/Menu',
    component: Menu,
    parameters:{
        layout: 'centered',
    },
    argTypes: {
        // item_list: { control: 'object' },
    
      },

};

export const Normal = {
    args:{
        MenuItems:['File','Edit','View','Server','Tools','Project','Git','Window','Social','Help']
     }
}
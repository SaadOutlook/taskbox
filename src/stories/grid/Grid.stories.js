import { Grid } from "./Grid";

export default {
    title:'Toolkit/Grid',
    component: Grid,
    parameters:{
        layout: 'centered',
    },
    argTypes: {
        // item_list: { control: 'object' },
    
      },

};

export const Compact = {
    args:{
        context: "Compact",
        columnWidths:[149,100,100,90],
        data:{header:["Severity","Error ID","Message","Status"],content:[["Content 1","Content ","Content 3","Content "],["Content 5","Content ","Content 7","Content "]]}
    }
}

export const Normal = {
    args:{
        context: "Normal",
        columnWidths:[149,100,100,90],
        data:{header:["Severity","Error ID","Message","Status"],content:[["Content 1","Content ","Content 3","Content "],["Content 5","Content ","Content 7","Content "]]}
    }
}

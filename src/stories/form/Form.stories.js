import { Form } from "./Form";

export default {
    title:"Toolkit/Form",
    component:Form,
    parameters:{
        layout:'centered',
    },
    
};

export const Normal = {
    args:{
       name:"Form",
       dataset:[{label:"TextField",type:"Text",state:"active",orientation:"horizontal"},
       {label:"TextField",type:"Dropdown",state:"active",orientation:"horizontal"},
       {label:"TextField",type:"Number",state:"active",orientation:"horizontal"},
       
       {label:"Checkbox",type:"Radio",state:"active",orientation:"horizontal"},
       {label:"Checkbox",type:"Radio",state:"active",orientation:"horizontal"}]
    }
};
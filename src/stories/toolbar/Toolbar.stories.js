import { Toolbar } from "./Toolbar";

export default {
    title:"Toolkit/Toolbar",
    component:Toolbar,
    parameters:{
        layout:"centered"
    }
};

export const Normal = {
    args:{
        toolbarItemConfig:[[{split:false}],[{split:true},{split:true}],[{split:false},{split:false},{split:false}],[{split:false},{split:false}]],
        isDraggable:true,
        orientation:"horizontal"
    }
}
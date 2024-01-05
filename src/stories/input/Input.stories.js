import { Input } from "./Input";

export default {
    title:"Toolkit/Input",
    component:Input,
    parameters:{
        layout:'centered',
    },
    
};

export const Text = {
    args:{
        type: 'Text',
        label_text: 'Example Label',
        orientation: 'horizontal',
        state: 'active',
    }
};

export const Dropdown = {
    args:{
        type: 'Dropdown',
        label_text: 'Example Label',
        orientation: 'horizontal',
        state: 'active',
    }
};

export const Number = {
    args:{
        type: 'Number',
        label_text: 'Example Label',
        orientation: 'horizontal',
        state: 'active',
    }
}

export const Checkbox = {
    args:{
        type: 'Checkbox',
        label_text: 'Example Label',
        orientation: 'horizontal',
        state: 'active',
        checked: true
    }
}

export const Radio = {
    args:{
        type: 'Radio',
        label_text: 'Example Label',
        orientation: 'horizontal',
        state: 'active',
        checked: true
    }
}
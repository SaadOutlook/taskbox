import React from "react";

import "./form.css";
import { Input } from "../input/Input";
import  PropTypes  from "prop-types";


export const Form = ({name, dataset}) => {
    return(
    <div className="Form">
        {dataset && dataset.map((fieldinfo,index)=>{
            return(<>
               {
              <Input name={name} label_text={fieldinfo.label} type={fieldinfo.type} state={fieldinfo.state} orientation={fieldinfo.orientation} />
             
               } 
               </>
            )
        })}
    </div>
    )
}

Form.propTypes = {
    name: PropTypes.string,
    dataset: PropTypes.object
}

Form.defaultProps = {
    name: "Form",
    dataset: [{label:"TextField",type:"Text",state:"active",orientation:"horizontal"},
    {label:"TextField",type:"Dropdown",state:"active",orientation:"horizontal"},
    {label:"TextField",type:"Number",state:"active",orientation:"horizontal"},
    
    {label:"Checkbox",type:"Radio",state:"active",orientation:"horizontal"},
    {label:"Checkbox",type:"Radio",state:"active",orientation:"horizontal"}]
}


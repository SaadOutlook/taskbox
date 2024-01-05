import React, { useState } from "react";
import PropTypes from 'prop-types';

import './input.css';


export const Input = ({type, label_text, orientation, state, ...props}) =>{
    return(
    <>
    {type == "Text" ?  <TextField orientation={orientation}  labeltext={label_text} state={state}/> : 
    type == "Dropdown" ? <DropdownField orientation={orientation}  labeltext={label_text} state={state}/> : 
    type == "Number" ? <NumericField orientation={orientation}  labeltext={label_text} state={state}/> :
    type == "Checkbox" ?  <CheckboxField orientation={orientation}  labeltext={label_text} state={state} {...props}/> :
    type == "Radio" ? <RadioField orientation={orientation}  labeltext={label_text} state={state} {...props}/> : <></>
    }
    </>
    )
}

export const TextField = ({orientation, labeltext, state}) => {
    const [value_text,setValue] = useState("Data");
    return (
    <div className={state == "disabled"? "Field disabled":"Field"}>
    <label className="Label">{labeltext}</label>
    {orientation != "horizontal" && <br/>}
    <input onChange={(e)=>{setValue(e.target.text)}} className="TextField" type="text" value={value_text} disabled={state == "disabled" ? true : false}/>
    </div>
    )
}

export const DropdownField = ({orientation, labeltext, state}) => {
    const [value_text,setValue] = useState("Data");
    return (
    <div className={state == "disabled"? "Field disabled":"Field"}>
    <label className="Label">{labeltext}</label>
    {orientation != "horizontal" && <br/>}
    <select className="DropdownField" disabled={state == "disabled" ? true : false}>
        <option>Data Option</option>
        <option>b</option>
        <option>c</option>
    </select>
    </div>
    )
}

export const NumericField = ({orientation, labeltext, state}) => {
    const [value_text,setValue] = useState(0);
    return (
    <div className={state == "disabled"? "Field disabled":"Field"}>
    <label className="Label">{labeltext}</label>
    {orientation != "horizontal" && <br/>}
    <div className="NumericContainer">
    <button onClick={()=>{setValue(value_text-1)}} disabled={state == "disabled" ? true : false}  className="decspinner"></button>
    <button onClick={()=>{setValue(value_text+1)}} disabled={state == "disabled" ? true : false}  className="incspinner"></button>
    <input onChange={(e)=>{setValue(e.target.text)}} disabled={state == "disabled" ? true : false} className="NumericField" type="number" value={value_text}/>
    </div>
    </div>
    )
}

export const CheckboxField = ({orientation, labeltext, state, ...props}) => {
    return (
        <div className={orientation != "horizontal" ? state == "disabled"? "Field disabled": "Field": state == "disabled" ? "Field CheckboxField disabled":"Field CheckboxField "}>
        <label className="Label">{labeltext}</label>
        {orientation != "horizontal" && <br/>}
        <input type="checkbox" disabled={state == "disabled" ? true : false} {...props}/>
        </div>
        )
}

export const RadioField = ({orientation, labeltext, state, ...props}) => {
    return (
        <div className={orientation != "horizontal" ? state == "disabled"? "Field disabled": "Field": state == "disabled" ? "Field CheckboxField disabled":"Field CheckboxField "}>
        <label className="Label">{labeltext}</label>
        {orientation != "horizontal" && <br/>}
        <input type="radio" disabled={state == "disabled" ? true : false} {...props}/>
        </div>
        )
}


Input.propTypes = {
    type: PropTypes.oneOf(['Text','Dropdown','Number','Checkbox','Radio']),
    label_text: PropTypes.string,
    orientation: PropTypes.oneOf(['horizontal','vertical']),
    state: PropTypes.oneOf(['active','disabled']),
  };
  
 Input.defaultProps = {
    type: 'Text',
    label_text: 'Example Label',
    orientation: 'horizontal',
    state: 'active',
  };
  
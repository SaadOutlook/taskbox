import React from 'react';
import PropTypes from 'prop-types';
import './wizard.css';

import ADO from "../../assets/card-header-icon.svg"
import WizardControls from "../../assets/wizard-controls.svg"
import backIcon from "../../assets/back-icon-wiz.svg";
import forwardIcon from "../../assets/forward-icon-wiz.svg";

import { Tabs } from '../tabs/Tabs';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Form } from '../form/Form';



const title = "DatabaseSource : Database Connection";
const tabs = false;

export const Wizard = ({}) => {
    return(
    <div className='Wizard'>
        <WizardToolbar title={title} />
        {tabs ?   <Tabs context={"Wizard"} /> : <WizardNavigator />}
        <WizardBody />
        <WizardActions />
    </div>
    )
}

export const WizardToolbar = ({title}) => {
    return(
        <div className='WizardToolbar'>
            <div style={{display:"flex",alignItems:"center"}}><img style={{marginRight:"3px"}} src={ADO} />{title}</div>
            <div style={{display:"flex",alignItems:"center"}}><img src={WizardControls} /></div>
        </div>
    )
}

export const WizardNavigator = ({}) => {
    return(
        <div className='WizardNavigator'>
             <div style={{display:"flex",alignItems:"center"}}><Button icon={backIcon} context={"Toolbar"} split={false} toggled={false}/><Button icon={forwardIcon} context={"Toolbar"} split={true} toggled={false}/></div>
             <div style={{display:"flex",alignItems:"center"}}><Input type={"Dropdown"} label_text={"Editing"}/></div>
        </div>
    )
}

export const WizardBody = ({}) => {
    return(
        <div className='WizardBody'>
            <Form />
        </div>
    )
}

export const WizardActions = ({}) => {
    return(
        <div className='WizardActions'>
            <Button context={"Dialog"} split={false} toggled={false} label={"Prev"}/>
            <Button context={"Dialog"} split={false} toggled={false} label={"Next"}/>
            <Button context={"Dialog"} split={false} toggled={false} label={"OK"}/>
            <Button context={"Dialog"} split={false} toggled={false} label={"Cancel"}/>
        </div>
    )
}

Wizard.propTypes = {
    title:PropTypes.string,
    tabs:PropTypes.bool
}

Wizard.defaultProps = {
    title:"DatabaseSource : Database Connection",
    tabs:false
}


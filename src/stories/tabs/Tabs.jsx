import React, { useState } from "react";
import PropTypes from "prop-types";

import "./tabs.css";

// const itemList = ["General Options","Query","Client Setup"];
// const context= "Wizard";

export const Tabs = ({itemList,context}) => {
        return(
        <>
        {context == "Wizard"?<WizardTabs itemList={itemList} />:<PanelTabs itemList={itemList} />}
     
        
        </>
        )
}

export const WizardTabs = ({itemList}) => {
        const [active,setActive] = useState("0");
        return (
        <div className="WizardTabs">
            {itemList.map((item,index)=>{
                return(<WizardTabsItems onClick={(e)=>{
                    if(active == null){
                        e.target.classList.toggle("Active");
                        setActive(e.target.id);
                    }else{
                        document.getElementById(active).classList.toggle("Active");
                        e.target.classList.toggle("Active");
                        setActive(e.target.id);
                    }
                }} id={index} label={item}/>)
            })}
        </div>
        )
}

export const WizardTabsItems = ({id, label, ...props}) => {
    return (
        <div id={id} className={id == 0? "WizardTabsItem Active":"WizardTabsItem"} {...props}>{label}</div>
    )
}

export const PanelTabs = ({itemList}) => {
    const [active,setActive] = useState("0");
    return(
        <div className="PanelTabs">
            {itemList.map((item,index)=>{
                return(
                    <PanelTabsItems onClick={(e)=>{
                        if(active == null){
                            e.target.classList.toggle("Active");
                            setActive(e.target.id);
                        }else{
                            document.getElementById(active).classList.toggle("Active");
                            e.target.classList.toggle("Active");
                            setActive(e.target.id);
                        }
                    }} id={index} label={item} />
                )
            })}
        </div>
    )
}

export const PanelTabsItems = ({id, label, ...props}) => {
    return (
        <div id={id} className={id == 0? "PanelTabsItem Active":"PanelTabsItem"} {...props}>{label}</div>
    )
}

Tabs.propTypes = {
    itemList:PropTypes.array,
    context:PropTypes.oneOf(["Wizard","Panel"])
}

Tabs.defaultProps = {
    itemList: ["General Options","Query","Client Setup"],
    context:"Wizard"
}
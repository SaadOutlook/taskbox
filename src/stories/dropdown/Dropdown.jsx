import React from "react";
import PropTypes from 'prop-types';

import "./dropdown.css";

import dropdownIcon from "../../assets/icon-placeholder.svg";
import AccordToggle from "../../assets/toggle.svg";

let activeKey = null;
let anotheractiveKey = null;

export const Dropdown = ({context,item_list,data_list}) => {
    activeKey = null;
    anotheractiveKey = null;
    return (
        <>
        {context == "Toolbar" ? <ToolbarDropdown list={item_list}
                
                /> :  <DropdownInput list={data_list} />}
        

           


        </>
    )
}

export const ToolbarDropdown = ({ list }) => {
    return (<div className="mainToolbarDropdownContainer">
        {list.map((obj, index) => {
            return (<div className="ToolbarMenuItem">
                <ToolbarDropdownItem key={"menu_"+index} id={index} name={obj.name} hasIcon={obj.hasIcon} hasShortcut={obj.hasShortcut} shortcut={obj.shortcut} hasSubMenu={obj.hasSubMenu} endGroup={obj.endGroup} />
                <div id={"submenu_" + index} className={obj.hasSubMenu ? "ToolbarSubMenu" : " "}>
                    {obj.hasSubMenu && obj.subMenu.map((subObj, subindx) => {
                        return (<>
                            <ToolbarDropdownSubItem key={"menu_"+index+"_submenu_"+subindx} id={"submenu_" + subindx} name={subObj.name} hasIcon={subObj.hasIcon} hasShortcut={subObj.hasShortcut} shortcut={subObj.shortcut} hasSubMenu={false} />
                        </>)
                    })}
                </div>
            </div>)
        })}

    </div>)
}

export const ToolbarDropdownItem = ({ key, id, name, hasIcon, hasShortcut, shortcut, hasSubMenu, endGroup }) => {
    return (
        <div key={key} id={"menu_" + id} onClick={(e) => {
            // document.getElementById("menu_" + id).classList.toggle("ToolbarDropdownItemActive");
            // if (activeKey != null) {
            //     document.getElementById("menu_" + activeKey).classList.toggle("ToolbarDropdownItemActive");
            //     if(hasSubMenu){
            //         document.getElementById("submenu_" + activeKey).classList.toggle("ToolbarSubMenuShow");
            //         document.getElementById("submenu_" + activeKey).style.left = " "+document.getElementById("menu_" + activeKey).offsetWidth +"px";
            //     }
                
            //     console.log(activeKey);
            //     console.log("menu_" + activeKey);
                
            //     activeKey = id;
                
            // } else { activeKey = id; console.log(activeKey); };
            // if(hasSubMenu){
            //     document.getElementById("submenu_" + activeKey).classList.toggle("ToolbarSubMenuShow");
            //     document.getElementById("submenu_" + activeKey).style.left = " "+document.getElementById("menu_" + activeKey).offsetWidth +"px";
            // }

            if(activeKey == null){
                activeKey = id;
                document.getElementById("menu_" + activeKey).classList.toggle("ToolbarDropdownItemActive");
                if(hasSubMenu){
                    document.getElementById("submenu_" + activeKey).classList.toggle("ToolbarSubMenuShow");
                    document.getElementById("submenu_" + activeKey).style.left = " "+document.getElementById("menu_" + activeKey).offsetWidth +"px";
                }
            }else{
                document.getElementById("menu_" + activeKey).classList.toggle("ToolbarDropdownItemActive");
                if(document.getElementById("submenu_" + activeKey)){
                    document.getElementById("submenu_" + activeKey).classList.toggle("ToolbarSubMenuShow");
                    document.getElementById("submenu_" + activeKey).style.left = " "+document.getElementById("menu_" + activeKey).offsetWidth +"px";
                }
                activeKey = id;
                document.getElementById("menu_" + activeKey).classList.toggle("ToolbarDropdownItemActive");
                if(hasSubMenu){
                    document.getElementById("submenu_" + activeKey).classList.toggle("ToolbarSubMenuShow");
                    document.getElementById("submenu_" + activeKey).style.left = " "+document.getElementById("menu_" + activeKey).offsetWidth +"px";
                }
            }
        }} className={"ToolbarDropdownItem "}>

            <div style={{width:"30px"}}>
                {hasIcon && <img src={dropdownIcon} alt="dropdown item icon" />}

            </div>

            <div className={endGroup ? "endGroupItem" : ""}>
                <p style={{marginRight:"15px"}}>{name}</p>

                <span style={{ minWidth: "62px" }}>
                    {hasShortcut && <p style={{marginRight:"auto"}}>{shortcut}</p>}
                    {hasSubMenu && <img style={{ marginLeft: "12px" }} src={AccordToggle} alt="dropdownChildToggler" />}
                </span>
            </div>

        </div>
    )
}

export const ToolbarDropdownSubItem = ({ key, id, name, hasIcon, hasShortcut, shortcut, hasSubMenu, endGroup }) => {
    return (
        <div key={key} id={"menu_" + id} className={"ToolbarDropdownItem "}>

            <div style={{width:"30px"}}>
                {hasIcon && <img src={dropdownIcon} alt="dropdown item icon" />}

            </div>

            <div className={endGroup ? "endGroupItem" : ""}>
                <p style={{marginRight:"15px"}}>{name}</p>

                <span style={{ minWidth: "62px" }}>
                    {hasShortcut && <p style={{marginRight:"auto"}}>{shortcut}</p>}
                    {hasSubMenu && <img style={{ marginLeft: "12px" }} src={AccordToggle} alt="dropdownChildToggler" />}
                </span>
            </div>

        </div>
    )
}


export const DropdownInput = ({ list }) => {
    return (<div className="DropdownInput">

        {list.map((obj, indx) => {
            return (<>
                <DropdownInputItem id={indx} label={obj} />
            </>)
        })}



    </div>)
}

export const DropdownInputItem = ({ id, label }) => {
    return (<div onClick={() => {
        document.getElementById("dropdownInput_" + id).classList.toggle("DropdownInputItemActive");
        if (anotheractiveKey != null) {
            document.getElementById("dropdownInput_" + anotheractiveKey).classList.toggle("DropdownInputItemActive");
            anotheractiveKey = id;
        } else {
            anotheractiveKey = id;
        }
    }} id={"dropdownInput_" + id} className="DropdownInputItem">
        {label}
    </div>)
}

Dropdown.propTypes = {
    context: PropTypes.oneOf(['Toolbar','Input']),
    item_list: PropTypes.array,
    data_list: PropTypes.array,
    
  };
  
  Dropdown.defaultProps = {
  
    context: "Toolbar",
    item_list: [ { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false }],
    data_list: ["Blank Line"],
  };
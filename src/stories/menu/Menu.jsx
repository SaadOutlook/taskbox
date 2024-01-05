import React, { useState } from "react";
import PropTypes from 'prop-types';

import './menu.css';
import { Button } from "../button/Button";
import { Dropdown } from "../dropdown/Dropdown";

// const MenuItems = ['File','Edit','View','Server','Tools','Project','Git','Window','Social','Help']

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    console.log({top: _y, left: _x});
    return { top: _y, left: _x };
}


export const Menu = ({ MenuItems }) => {
    const [active,setActive] = useState(null)
    return (
        <div className="Menu">
            {MenuItems.map((item,index) => {
                return (<Button id={"mb_"+index} onClick={(e)=>{
                    e.target.classList.toggle("toolbarButtontoggle");
                    if(active != null){
                        document.getElementById(active).classList.toggle("toolbarButtontoggle");
                        setActive(e.target.id);
                    }else{setActive(e.target.id);}
                    document.getElementById("dropdownMenu").style.left = getOffset( e.target ).left - getOffset( document.getElementById('mb_0') ).left + "px";
                    document.getElementById("dropdownMenu").style.display = "inline";
                    document.getElementById("hider").style.width = e.target.offsetWidth + "px";
                }} context={"Topbar"} label={item} split={false} toggled={false} />)
            })}
            <span id="dropdownMenu" style={{position:"absolute",top:"21px",display:"none"}}>
                <div id="hider" style={{width:"33px",height:"10px",backgroundColor:"#F4F7F9",position:"absolute",left:"2px"}}></div>
                <Dropdown item_list={[{ name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
                { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: false, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
                { name: "sample name", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+O", hasSubMenu: true, subMenu: [{ name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }, { name: "SubMenu Item 1", hasIcon: true, hasShortcut: true, shortcut: "Ctrl+S" }], endGroup: false },
                ]} />
            </span>
        </div>
    )
}

Menu.propTypes = {
    MenuItems: PropTypes.array
}

Menu.defaultProps = {
    MenuItems: ['File', 'Edit', 'View', 'Server', 'Tools', 'Project', 'Git', 'Window', 'Social', 'Help']
}
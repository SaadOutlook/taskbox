import React from "react";
import PropTypes from 'prop-types';

import './panel.css';

export const DockPanel = ({title,bottomMenu,leftMenu,rightMenu,showBottom,showLeft,showRight})=>{
    return(
        <div className="DockPanel" style={{display:"Flex"}}>
            {showLeft && <LeftMenu leftMenu={leftMenu}/>}
    <div  style={{display:"Flex",flexDirection:"column"}}>
        <Panel title={title}/>
        {showBottom && <BottomMenu bottomMenu={bottomMenu}/>}
    </div>
    {showRight && <RightMenu rightMenu={rightMenu}/>}
    </div>
    )
}

export const Panel = ({title}) => {
    return(
    <div className="Panel">
        <div id="header" className="PanelHeader" onClick={()=>{document.getElementById("header").classList.toggle("active")}}>
            <div className="PanelHeaderTitle">{title}</div>
            <div className="ActivePattern"></div>
            <div className="PanelActions">
            <div className="PanelHeaderIcon" id="icon_option"></div>
            <div className="PanelHeaderIcon" id="icon_pin"></div>
            <div className="PanelHeaderIcon" id="icon_close"></div>
            
            </div>
        </div>
        <div className="PanelBody"></div>
    </div>
    )
}

export const BottomMenu = ({bottomMenu}) => {
    return(
    <div className="PanelBottomMenu">
        {bottomMenu.map((mi,index)=>{
            return(
                <div className="PanelBottomMenuItem">
                    {mi}
                </div>
            )
        })}
    </div>
    )
}

export const LeftMenu = ({leftMenu}) => {
    return(
    <div className="PanelLeftMenu">
        {leftMenu.map((mi,index)=>{
            return(
                <div className="PanelLeftMenuItem">
                    {mi}
                </div>
            )
        })}
    </div>
    )
}

export const RightMenu = ({rightMenu}) => {
    return(
    <div className="PanelRightMenu">
        {rightMenu.map((mi,index)=>{
            return(
                <div className="PanelRightMenuItem">
                    {mi}
                </div>
            )
        })}
    </div>
    )
}

DockPanel.propTypes = {
    title:PropTypes.string,
    bottomMenu:PropTypes.array,
    leftMenu:PropTypes.array,
    rightMenu:PropTypes.array,
    showBottom:PropTypes.bool,
    showLeft:PropTypes.bool,
    showRight:PropTypes.bool,
}

DockPanel.defaultProps = {
    title:"Toolbox",
    bottomMenu:["Verify","Git Branches"],
    leftMenu:["Git Changes","Git Branches"],
    rightMenu:["Report Properties","Git Branches"],
    showBottom:true,
    showLeft:true,
    showRight:true,
}
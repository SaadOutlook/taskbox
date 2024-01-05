import React, { useState } from "react";
import PropTypes from 'prop-types';

import './toolbar.css';
import { Button } from "../button/Button";

// const toolbarItemConfig = [[{split:false}],[{split:true},{split:true}],[{split:false},{split:false},{split:false}],[{split:false},{split:false}]]
// const isDraggable = true;
// const orientation = "vertical";

export const Toolbar = ({toolbarItemConfig, isDraggable, orientation}) => {
    return (
        <div style={orientation == "horizontal" ? {}:{flexDirection:"column"}} className="Toolbar">
            {isDraggable && <div className={orientation == "horizontal" ? "DraggablePattern":"DraggablePatternVert"}></div>}
            {toolbarItemConfig.map((ItemArray,groupIndex)=>{
                return(<div style={orientation == "horizontal" ? {}:{flexDirection:"column"}} className={orientation == "horizontal" ? "ToolbarActionGroup":"ToolbarActionGroupVert"}>{

                    ItemArray.map((item,index)=>{
                        return(<Button context={"Toolbar"} split={item.split} toggled={false}/>)
                    })

                }</div>)
                
            })}
        </div>
        )
}

Toolbar.propTypes = {
    toolbarItemConfig:PropTypes.array,
    isDraggable:PropTypes.bool,
    orientation:PropTypes.oneOf(["horizontal","vertical"])
}

Toolbar.defaultProps = {
    toolbarItemConfig:[[{split:false}],[{split:true},{split:true}],[{split:false},{split:false},{split:false}],[{split:false},{split:false}]],
    isDraggable:true,
    orientation:"horizontal"
}
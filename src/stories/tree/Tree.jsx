import React from "react";
import PropTypes from 'prop-types'

import './tree.css';


import itemClose from '../../assets/tree-chev-close.svg';
import cloud from '../../assets/icons/cloud.svg';

const items = [{label:"Server Connections",hasChild:true,childs:[{label:"Inner Child",hasChild:true,childs:[{label:"Inside Child"}]}]},
{label:"Server Connections",hasChild:true,childs:[{label:"Inner Child",hasChild:true,childs:[{label:"Inside Child"}]}]}
]

export const Tree = ({items}) => {
    return(
    <div style={{textAlign:"left"}}>
    {
        items.map((topl,topind)=>{
            return(
            <div className="TopLevelCont">
            <TreeItem onClick={(e)=>{
                document.getElementById("midC_"+topind).classList.toggle("hideC");
                e.target.firstChild.classList.toggle("openChev");
            }} id={"top_"+topind} label={topl.label} hasChild={topl.hasChild}/>
            {topl.hasChild && topl.childs.map((midl,midind)=>{
                return(
                <div id={"midC_"+topind} className="MidLevelCont hideC">
                    <TreeItem onClick={(e)=>{
                document.getElementById("lowC_"+midind+topind).classList.toggle("hideC");
                e.target.firstChild.classList.toggle("openChev");
            }} id={"mid_"+midind} label={midl.label} hasChild={midl.hasChild}/>
                    {
                       midl.hasChild && midl.childs.map((lowl,lowind)=>{
                        return(
                        <div id={"lowC_"+midind+topind} className="LowLevelCont hideC">
                            <TreeItem id={"low_"+lowind} label={lowl.label} hasChild={false}/>
                        </div>
                        )
                       }) 
                    }
                </div>
                )
            })}
            </div>)
        })
    }
    </div>)
}

export const TreeItem = ({id,label,hasChild, ...props}) => {
    return (
    <div  id={id} style={{display:"flex",alignItems:"center",fontSize:"13px"}} {...props}>{hasChild && <img style={{pointerEvents:"none"}} src={itemClose} />}<img src={cloud} />{label}</div>
    )
}

Tree.propTypes = {
    items:PropTypes.array
}

Tree.defaultProps = {
    items:[{label:"Server Connections",hasChild:true,childs:[{label:"Inner Child",hasChild:true,childs:[{label:"Inside Child"}]}]},
    {label:"Server Connections",hasChild:true,childs:[{label:"Inner Child",hasChild:true,childs:[{label:"Inside Child"}]}]}
    ]
}

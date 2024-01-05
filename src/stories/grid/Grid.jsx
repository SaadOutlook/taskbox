import React, { Children } from "react";
import PropTypes from 'prop-types';
import "./grid.css";

import number from "../../assets/icons/number.svg"

// const data = {header:["Severity","Error ID","Message","Status"],content:[["Content 1","Content ","Content 3","Content "],["Content 5","Content ","Content 7","Content "]]}
// const context = "Compact"

// const columnWidths = [149,100,100,90]

export const Grid = ({context,data,columnWidths}) => {
    return (
        <>
        {context == "Compact" ? <div>
        <div className="CompactGridHeader">
        {data.header.map((headerItem,index)=>{
            return(<CompactGridHeader columnWidths={columnWidths} item={headerItem} id={index}/>)
        })}
        </div>
        
        {data.content.map((contentItem,nonid)=>{
           return(<div className="CompactGridCell">
           {
            contentItem.map((content,cellid)=>{
                return(<CompactGridCell columnWidths={columnWidths} item={content} id={cellid}/>)
            })
           }
           </div>)
            
        })}
        
    </div> :  <div>
        <div className="GridHeader">
        {data.header.map((headerItem,index)=>{
            return(<GridHeader columnWidths={columnWidths} item={headerItem} id={index}/>)
        })}
        </div>
        
        {data.content.map((contentItem,nonid)=>{
           return(<div className="GridCell">
           {
            contentItem.map((content,cellid)=>{
                return(<GridCell columnWidths={columnWidths} item={content} id={cellid}/>)
            })
           }
           </div>)
            
        })}
        
    </div>}
   
   
    </>
    );
}

export const CompactGridHeader = ({item,id,columnWidths}) => {
    return (
    <div style={{width:" "+columnWidths[id]+"px"}} className="CompactGridHeaderItem" id={id}>{item}</div>
    )
}

export const CompactGridCell = ({item,id,columnWidths}) => {
    return (
    <div style={{width:" "+columnWidths[id]+"px"}} className="CompactGridCellItem" id={id} key={id}>{item}</div>
    )
}


export const GridHeader = ({item,id,columnWidths})=>{
    return (
        <div style={{width:" "+columnWidths[id]+"px"}} className="GridHeaderItem" id={id}><img src={number}/>{item}</div>
        )
}

export const GridCell = ({item,id,columnWidths}) => {
    return (
    <div style={{width:" "+columnWidths[id]-11+"px"}} className="GridCellItem" id={id} key={id}>{item}</div>
    )
}

Grid.propTypes = {
    context: PropTypes.oneOf(['Compact','Normal']),
    data: PropTypes.object
  };
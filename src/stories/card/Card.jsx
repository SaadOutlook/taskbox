import React, { useState } from "react";
import PropTypes from "prop-types";

import "./card.css"

import FlowCardIcon from "../../assets/card-header-icon.svg";
import FlowCardToggle from "../../assets/flowcard-header-toggle.svg";
import FlowCardItemTogglerPlus from "../../assets/flowcard-item-toggle-plus.svg";
import FlowCardItemTogglerMinus from "../../assets/flowcard-item-toggle-minus.svg";
import FlowCardItemIcon from "../../assets/flowcard-basic.svg";
import FlowCardInput from "../../assets/flowcard-input.svg";
import FlowCardOutput from "../../assets/flowcard-output.svg";
import AccordToggle from "../../assets/toggle.svg";

export const Card = ({ context,title,type,parentItem,childItemsList,expandable,acceptsInput, givesOutput}) => {
    

    return (
        <>
            {context == "Flowcard" ?  <FlowCard title={title} type={type} parentItem={parentItem} childItemsList={childItemsList} acceptsInput={acceptsInput} givesOutput={givesOutput}/>: <RightPanelCard title={title} expandable={expandable} /> 
               
            }



        </>
    );
}

export const FlowCard = ({title,type,parentItem,childItemsList,acceptsInput, givesOutput}) => {
    React.useEffect(() => {
        dragElement(document.getElementById("mydiv"));
    }, [])
    const [expanded, setExp] = useState(false);
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (<div id="mydiv" className="flowCard">
    <div className={"flowCardHeader "+type}>
        <div className="flowCardIconSet">
            <img src={FlowCardIcon} alt="flow card icon" /> <p>{title}</p>
        </div>
        <img onClick={(e) => { document.getElementById("mydiv").classList.toggle("collapse"); e.target.classList.toggle("rotate-flowcard-toggle") }} src={FlowCardToggle} alt="flow card toggle" />
    </div>
    <div id="flowcardbody" className="flowCardBody">
        {parentItem && <div className="flowcarditem"> {!expanded && acceptsInput && <img className="FlowCardItemInput" src={FlowCardInput} alt="flowcard input" />}  <img onClick={() => { setExp(!expanded) }} src={expanded ? FlowCardItemTogglerMinus : FlowCardItemTogglerPlus} alt="flow card item toggler" /> <img src={FlowCardItemIcon} alt="flow card item icon" />{parentItem} {!expanded && givesOutput && <img className="FlowCardItemOutput" src={FlowCardOutput} alt="flowcard output" />}</div>}
        {expanded ? childItemsList && <div className="flowcarditemList"> {childItemsList.map((item,index)=>{
            return( <div className="flowcarditem child"> {acceptsInput && <img className="FlowCardItemInput" src={FlowCardInput} alt="flowcard input" />}  <img src={FlowCardItemIcon} alt="flow card item icon" />{item} {givesOutput && <img className="FlowCardItemOutput" src={FlowCardOutput} alt="flowcard output" />}</div>
            )
        })}
            </div> : <></>}

    </div>

</div>);
}

export const RightPanelCard = ({title,expandable}) => {
    return ( <div id="rightPanel" className="rightPanelCard">
    <div className="rightPanelHeader">

        <p>{title}</p>

       {expandable && <img onClick={(e) => { document.getElementById("rightPanel").classList.toggle("collapse-right"); e.target.classList.toggle("rotate-right") }} src={AccordToggle} alt="flow card toggle" />}  </div>
    <div id="flowcardbody" className="rightPanelBody">
        Card Body

    </div>

</div>)
}

Card.propTypes = {
    context: PropTypes.oneOf(['Flowcard','Right Panel Card']),
    title: PropTypes.string,
    type: PropTypes.oneOf(['Source']),
    parentItem: PropTypes.string,
    childItemsList: PropTypes.array,
    expandable:PropTypes.bool,
    acceptsInput:PropTypes.bool,
    givesOutput:PropTypes.bool
  };
  
Card.defaultProps = {
    context: "Flowcard",
    title: "Excel Source",
    type: "Source",
    parentItem: "Excel Source",
    childItemsList: ["Webinar_Heading"],
    expandable:true,
    acceptsInput:true,
    givesOutput:true
   
  };
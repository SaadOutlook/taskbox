import React from "react";
import PropTypes from 'prop-types';
import "./accordion.css";
import AccordToggle from "../../assets/toggle.svg";


export const AccordionItem = ({index,label}) => {
return (<span><div id={index}  className="accordionItem" onClick={()=>{document.getElementById("accordionToggle_"+index).classList.toggle("rotate");document.getElementById("container_"+index).classList.toggle("hide")}}><img id={"accordionToggle_"+index} className="accordionToggle" src={AccordToggle} alt="accordion toggle"/><p>{label}</p></div><div id={"container_"+index} className="accordionContainer hide">Accordion Content</div></span>)
}

export const Accordion = ({list}) => {
return (<div className="accordionListContainer">{list.map((element,i) => {
    return (<div><AccordionItem index={i} label={element}/></div>);
})}</div>)
}




Accordion.propTypes = {
    list: PropTypes.array
}


Accordion.defaultProps = {
   list: ["Sources","Destination"]
  };

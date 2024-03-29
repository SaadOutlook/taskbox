import React from "react";
import PropTypes from "prop-types"

import './list.css'

import DMQ from '../../assets/icons/dmq.svg'
// const data = ["AI Data Extractor","COBOL Source","Email Source","Mongodb Source"]
const imgData = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_699_412)"><path d="M7.30251 7.12293H6.6888V13.9795H7.30251V7.12293Z" fill="#333399"/><path d="M14.3806 9.55916L13.9466 9.12635L9.08536 13.9747L9.51932 14.4075L14.3806 9.55916Z" fill="#333399"/><path d="M18.1469 10.1703H17.5332V17.0268H18.1469V10.1703Z" fill="#333399"/><path d="M15.6268 17.105V16.4929H8.75191V17.105H15.6268Z" fill="#333399"/><path d="M10.9652 4.07557H3.32645V9.25868H10.9652V4.07557Z" fill="#F9F9F9" stroke="#333399" stroke-width="0.75" stroke-miterlimit="10"/><path d="M10.9652 12.1498H3.32645V19.3123H10.9652V12.1498Z" fill="#F9F9F9" stroke="#333399" stroke-width="0.75" stroke-miterlimit="10"/><path d="M20.5234 6.66712H14.0207V12.7618H20.5234V6.66712Z" fill="#F9F9F9" stroke="#333399" stroke-width="0.75" stroke-miterlimit="10"/><path d="M20.6736 14.7413H14.1708V19.9244H20.6736V14.7413Z" fill="#F9F9F9" stroke="#333399" stroke-width="0.75" stroke-miterlimit="10"/></g><defs><clipPath id="clip0_699_412"><rect width="18" height="18" fill="white" transform="translate(3 3)"/></clipPath></defs></svg>';
export const List = ({data}) => {
    return(<ul className="List">
        {data && data.map((item,index)=>{
            return(<ListItem label={item} id={index} />)
        })}
    </ul>)
}

export const ListItem = ({label,id}) => {
    return(<li className="ListItem" key={id}><img src={DMQ} />{label}</li>)
}

List.propTypes = {
    data: PropTypes.array,
    
}

List.defaultProps = {
    data : ["AI Data Extractor","COBOL Source","Email Source","Mongodb Source"]
}
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

import toolbarbtnsplit from "../../assets/toolbar_btn_split.svg";
import open from "../../assets/icons/open.svg";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ context, split, toggled, label,icon, ...props }) => {

  return (
    <>
      {(context == "Topbar" ?
        <>
          <button {...props} className={split ? toggled ? 'toolbarButtonCompact  toolbarButtontoggle':'toolbarButtonCompact toolbarBtnHover' : toggled ? 'toolbarButton toolbarButtontoggle':'toolbarButton toolbarBtnHover'}>
            {label}{split ? <img className='toolbarbtnsplit' src={toolbarbtnsplit} alt="toolbarsplit" /> : <></>}
          </button>
        </> : <>
          {(context == "Toolbar" ? <>
            <div className={split ? toggled ? 'toolbarIconBtnSplitContainer toolbarButtontoggle' : 'toolbarIconBtnSplitContainer toolbarBtnHoverSplit ' : ""}>
              <button className={split ? 'toolbarIconBtn' : toggled ? ' toolbarButtontoggle toolbarIconBtn ':'toolbarIconBtn toolbarBtnHover '}>
                <img src={icon ? icon:open} alt="btn icon" />
              </button>
              {split ? <button className='toolbarIconBtnSplit'>
                <img src={toolbarbtnsplit} alt="toolbarsplit" />
              </button> : <></>}
            </div>
          </> : <>
            <button className='dialogbtn '>
              {label}
            </button></>)}

        </>)}


    </>

  );
};

Button.propTypes = {
  context: PropTypes.oneOf(['Topbar','Toolbar','Dialog']),
  split: PropTypes.bool,
  toggled: PropTypes.bool,
  label: PropTypes.string.isRequired
};

Button.defaultProps = {

  split: true,
  toggled: true,
  label:"Label"
};

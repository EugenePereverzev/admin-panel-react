import React from 'react';
import './SubList.css';

function SubList (props) {
        return (
            <div className="sub-list" onClick={props.onClick} {...{style: props.style}}> 
                <div>{props.label}</div>
                {props.children}
            </div>
        );
};

export default SubList;
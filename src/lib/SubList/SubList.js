import React from 'react';
import style from './SubList.module.css';

function SubList (props) {
        return (
            <div className={style._} onClick={props.onClick} style={props.style}> 
                <div>{props.label}</div>
                {props.children}
            </div>
        );
};

export default SubList;
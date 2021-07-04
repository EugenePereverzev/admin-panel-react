import React from 'react';
import style from './Button.module.css';
import cc from 'classcat';

function Button (props) {
    const classString = cc ({
        [style._] : true,
        [style.disabled] : props.disabled,
        [style.reversed] : !props.disabled && props.reversed,
    });

    return (
        <div className={classString} onClick={props.onClick} {...props.style}>
            {!!props.icon && <svg className={style.icon}><use href={props.icon}/></svg>}
            {!!props.label && <div className={style.label}>{props.label}</div>}
        </div>
    );
   
}

export default Button;
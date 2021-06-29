import React from 'react';
import './Button.css';

function Button (props) {
    const icon = !!props.icon && <svg className="button-icon"><use href={props.icon}/></svg>;
    const label = !!props.label && <div className="button-label">{props.label}</div>;
    const classString = (
            "button" + (
                !!props.disabled ? " button__disabled" : (
                    !!props.reversed ? " button__reversed" : ""
                )
            )
    );

    return (
        <div className={classString} onClick={props.onClick}>
            {icon}
            {label}
        </div>
    );
}

export default Button;
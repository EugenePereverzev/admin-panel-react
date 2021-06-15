import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    state = { 
        isIconOn: !!this.props.icon,
        isTextOn: !!this.props.label,
        isDisable: !!this.props.disabled,
        isReverse: !!this.props.reversed,
    }

    render () {
        const icon = this.state.isIconOn && <svg className="button-icon"><use href={this.props.icon}/></svg>;
        const label = this.state.isTextOn && <div className="button-label">{this.props.label}</div>;
        const classString = "button" + (this.state.isDisable?" disabled":(this.state.isReverse?" reversed":""));

        return (
            //<div className={classString}>
            <div className={classString} onClick={this.props.onClick}>
                {icon}
                {label}
            </div>
        )
    };
}

export default Button;
import React, { Component } from 'react';
import Button from '../Button/Button';
import { ICON_LOCKED, ICON_X_LARGE } from '../Icons/Icons';
import './Input.css';

class Input extends Component {

    state = { 
        value: this.props.value,
        isTextOn: !!this.props.label,
        isDisable: !!this.props.disabled,
        isLock: !!this.props.locked,
    }

    clearValue = () => {
        this.setState = ({ ...this.state,
            value: "",
        })
    }

    render () {
        const button = (this.state.isLock && <Button icon={ICON_LOCKED}/>) ||
                    (!!this.state.value && <Button icon={ICON_X_LARGE} onClick={this.clearValue} />);
        const label = this.state.isTextOn && <div className="input-label">{this.props.label}</div>;
        const hint = !this.state.value && !!this.props.hint && <div className="input-hint">{this.props.hint}</div>;
        const classString = "input" + (this.state.isLock?" locked":"");

        return (
            <div className={classString}>
                {this.props.children}
                {label}
                <div className="input-box">
                    <input type="text" className="input-field" value={this.state.value}/>
                    {hint}
                </div>
                {button}
            </div>
        )
    }
}

export default Input;
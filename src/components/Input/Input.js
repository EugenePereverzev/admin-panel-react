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

    handlerClearValue = () => {
        this.setState ({ value: "" });
    }

    handlerOnChange = (e) => {
        this.setState({ value: e.target.value });
    }
    
    render () {
        const button = (this.state.isLock && <Button icon={ICON_LOCKED}/>) ||
                    (!!this.state.value && <Button icon={ICON_X_LARGE} onClick={this.handlerClearValue} />);
        const label = this.state.isTextOn && <div className="input-label">{this.props.label}</div>;
        const classString = "input" + (this.state.isLock?" locked":"");
        const style = (!!this.props.width?{style: {width: this.props.width}}:{});

        return (
            <div className={classString} {...style}>
                {this.props.children}
                {label}
                <input type="text" className="input-field" value={this.state.value} onChange={this.handlerOnChange} placeholder={this.props.placeHolder}/>
                {button}
            </div>
        )
    }
}

export default Input;
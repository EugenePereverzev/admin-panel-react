import React, { Component } from 'react';
import Button from '../Button/Button';
import { ICON_LOCKED, ICON_X_LARGE } from '../Icons/Icons';
import style from './Input.module.css';
import cc from 'classcat';

class Input extends Component {

    state = { 
        value: this.props.value || '',
    }

    handlerClearValue = () => {
        this.setState ({ value: '' });
    }

    handlerOnChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handlerOnKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.props.onSubmit && this.props.onSubmit(this.state.value);
            e.preventDefault();
        }
    }
  
    render () {
        const classString = cc ({
            [style._]: true,
            [style.locked]: this.props.locked,
            [style.disabled]: this.props.disabled,
        });

        const inlineStyle = (
                !!this.props.width ?
                {style: {width: this.props.width}} :
                {}
        );

        return (
            <div className={classString} {...inlineStyle}>
                {this.props.children}
                {!!this.props.label && <div className={style.label}>{this.props.label}</div>}
                <input 
                    type="text" 
                    className={style.field} 
                    value={this.state.value} 
                    onChange={this.handlerOnChange} 
                    onKeyUp={this.handlerOnKeyUp}
                    placeholder={this.props.placeHolder} 
                    pattern={this.props.pattern}/>
                {(this.props.locked && <Button icon={ICON_LOCKED}/>) ||
                    (!!this.state.value && !this.props.disabled && <Button icon={ICON_X_LARGE} onClick={this.handlerClearValue} />)}
            </div>
        )
    }
}

export default Input;